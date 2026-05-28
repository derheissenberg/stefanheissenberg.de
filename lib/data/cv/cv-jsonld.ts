/**
 * DATA: cv-jsonld.ts
 * PURPOSE: Generate schema.org JSON-LD from CV data files (single source of truth)
 *
 * KEY CONCEPTS:
 * - Employment history comes from CV_EXPERIENCE — never hand-duplicated in page.tsx
 * - parseExperienceDates is shared by JSON-LD and CvTimelineRow <time dateTime>
 * - LEARNING: Person.hasOccupation lists the full career history (each role + employer + dates)
 * - LEARNING: Person.worksFor stays on the current employer only — complementary, not redundant
 */

import type {
  CvCredentialBlock,
  CvExperienceEntry,
  CvSkillGroup,
} from "@/types/cv";
import { CV_BASE_URL, CV_PAGE_URL } from "@/lib/data/cv/cv-meta";

// ─── Date parsing ─────────────────────────────────────────────────────────────

const MONTH_TO_ISO: Record<string, string> = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};

const MONTH_YEAR_PATTERN = /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{4})/g;

export type ParsedExperienceDates = {
  startDate: string;
  endDate?: string;
};

/** Parse month-level ISO dates from duration; fall back to yearStart/yearEnd without inventing days. */
export function parseExperienceDates(entry: CvExperienceEntry): ParsedExperienceDates {
  const monthYearMatches = [...entry.duration.matchAll(MONTH_YEAR_PATTERN)];

  const startDate =
    monthYearMatches.length >= 1
      ? `${monthYearMatches[0][2]}-${MONTH_TO_ISO[monthYearMatches[0][1]]}`
      : `${entry.yearStart}-01`;

  if (entry.yearEnd === "Now") {
    return { startDate };
  }

  if (monthYearMatches.length >= 2) {
    return {
      startDate,
      endDate: `${monthYearMatches[1][2]}-${MONTH_TO_ISO[monthYearMatches[1][1]]}`,
    };
  }

  if (entry.yearEnd) {
    return { startDate, endDate: `${entry.yearEnd}-01` };
  }

  return { startDate };
}

// ─── Occupations (employment history) ─────────────────────────────────────────

export type SchemaOccupation = {
  "@type": "Occupation";
  name: string;
  worksFor: {
    "@type": "Organization";
    name: string;
  };
  startDate: string;
  endDate?: string;
  occupationLocation?: {
    "@type": "Place";
    name: string;
  };
  skills?: string;
};

export function buildOccupations(experience: CvExperienceEntry[]): SchemaOccupation[] {
  return experience.map((entry) => {
    const { startDate, endDate } = parseExperienceDates(entry);
    const roleName = `${entry.role}${entry.roleHighlight}`.trim();
    const locality = entry.location.split(" · ")[0]?.trim();
    const focusAreas = entry.extras?.find((extra) => extra.label === "Focus areas");

    const occupation: SchemaOccupation = {
      "@type": "Occupation",
      name: roleName,
      worksFor: {
        "@type": "Organization",
        name: entry.company,
      },
      startDate,
    };

    if (endDate) {
      occupation.endDate = endDate;
    }

    if (locality) {
      occupation.occupationLocation = {
        "@type": "Place",
        name: locality,
      };
    }

    if (focusAreas && focusAreas.tags.length > 0) {
      occupation.skills = focusAreas.tags.join(", ");
    }

    return occupation;
  });
}

// ─── Skills ───────────────────────────────────────────────────────────────────

/** Flatten CV_SKILLS tag groups into a deduplicated knowsAbout array. */
export function buildKnowsAbout(
  skillGroups: CvSkillGroup[],
  extraTerms: string[] = [],
): string[] {
  const fromSkills = skillGroups.flatMap((group) => group.tags);
  return [...new Set([...fromSkills, ...extraTerms])];
}

// ─── Credentials ──────────────────────────────────────────────────────────────

export type SchemaCredential = {
  "@type": "EducationalOccupationalCredential";
  name: string;
  credentialCategory: string;
  recognizedBy: { "@type": "Organization"; name: string };
  validFrom?: string;
  validUntil?: string;
  dateCreated?: string;
  url?: string;
};

export type SchemaAlumni = {
  "@type": "CollegeOrUniversity";
  name: string;
  description: string;
};

function normalizeCredentialTitle(title: string, titleHighlight?: string): string {
  return `${title}${titleHighlight ?? ""}`.replace(/\s+/g, " ").trim();
}

function parseYearRange(year?: string): {
  validFrom?: string;
  validUntil?: string;
  dateCreated?: string;
} {
  if (!year) return {};

  const rangeMatch = year.match(/^(\d{4})[—–-](\d{2,4})$/);
  if (rangeMatch) {
    const startYear = rangeMatch[1];
    const endPart = rangeMatch[2];
    const endYear = endPart.length === 2 ? `20${endPart}` : endPart;
    return { validFrom: startYear, validUntil: endYear };
  }

  if (/^\d{4}$/.test(year)) {
    return { dateCreated: year };
  }

  return {};
}

/** Generate hasCredential from cv-credentials.ts Certifications block. */
export function buildHasCredential(credentialBlocks: CvCredentialBlock[]): SchemaCredential[] {
  const certificationsBlock = credentialBlocks.find((block) => block.label === "Certifications");
  if (!certificationsBlock) return [];

  return certificationsBlock.items.map((item) => {
    const name = normalizeCredentialTitle(item.title, item.titleHighlight);
    const years = parseYearRange(item.year);

    const credential: SchemaCredential = {
      "@type": "EducationalOccupationalCredential",
      name: name.includes("UX") && name.includes("Master") ? "UX Master Certification" : name,
      credentialCategory: "certification",
      recognizedBy: {
        "@type": "Organization",
        name: item.org ?? "Unknown",
      },
    };

    if (years.validFrom) credential.validFrom = years.validFrom;
    if (years.validUntil) credential.validUntil = years.validUntil;
    if (years.dateCreated) credential.dateCreated = years.dateCreated;
    if (item.credentialUrl) credential.url = item.credentialUrl;

    return credential;
  });
}

/** Generate alumniOf from cv-credentials.ts Education block. */
export function buildAlumniOf(credentialBlocks: CvCredentialBlock[]): SchemaAlumni[] {
  const educationBlock = credentialBlocks.find((block) => block.label === "Education & languages");
  if (!educationBlock) return [];

  const degree = educationBlock.items.find((item) =>
    normalizeCredentialTitle(item.title, item.titleHighlight).includes("Communication Design"),
  );

  if (!degree) return [];

  const degreeName = normalizeCredentialTitle(degree.title, degree.titleHighlight);
  const org = degree.org ?? "IB-Hochschule Berlin";
  const year = degree.year ?? "2009—12";

  return [
    {
      "@type": "CollegeOrUniversity",
      name: org.replace(", Berlin", "").trim(),
      description: `${degreeName} (${year.replace("—", "–")})`,
    },
  ];
}

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

export function buildBreadcrumbList() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: CV_BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "CV",
        item: CV_PAGE_URL,
      },
    ],
  };
}
