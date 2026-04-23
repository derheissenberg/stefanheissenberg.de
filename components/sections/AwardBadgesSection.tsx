/**
 * COMPONENT: AwardBadgesSection
 * PURPOSE: Displays three achievement badges: Award Winning Design, UX Master, Scrum Master
 *
 * KEY CONCEPTS:
 * - Figma specs: 1160px width container, 3-column grid layout
 * - Gap: 30px horizontal, 16px vertical (between icon and label)
 * - Labels aligned in single row at bottom (all labels at same vertical position)
 * - Each badge group: icon(s) on top, label below
 * - Uses flex-grow to push labels to bottom for alignment
 * - Consistent badge sizing and proportions
 */

import Image from "next/image";

const badges = [
  {
    src: "/images/trustbadges/comprix-design-award.png",
    alt: "Com Prix Design Award",
    label: "Comprix Award",
    width: 80,
    height: 80,
  },
  {
    src: "/images/trustbadges/design-ward-winning-design.svg",
    alt: "German Design Award",
    label: "German Design Award",
    width: 136,
    height: 62,
  },
  {
    src: "/images/trustbadges/ux-master-design-stefan-heissenberg-certified-nng.png",
    alt: "Nielsen Norman Group UX Master Certification",
    label: "NN/g UX Master",
    width: 88,
    height: 88,
  },
  {
    src: "/images/trustbadges/scrum-master-professional-stefan-heissenberg-psm-i.png",
    alt: "Scrum.org Professional Scrum Master PSM I",
    label: "Scrum PSM I",
    width: 80,
    height: 80,
  },
];

export function AwardBadgesSection() {
  return (
    <section className="bg-[var(--background)] py-8 lg:py-14" aria-label="Awards and certifications">
      <div className="mx-auto max-w-[1160px] px-6 lg:px-0">
        <div className="mb-8 h-px w-full bg-white/10 lg:mb-10" />
        <div className="grid grid-cols-2 gap-[30px] lg:grid-cols-4">
          {badges.map((badge) => (
            <div key={badge.label} className="flex flex-col items-center px-[20px] py-[14px]">
              <div className="flex h-[104px] w-full items-center justify-center">
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  width={badge.width}
                  height={badge.height}
                  className="h-auto w-auto object-contain"
                  sizes="(max-width: 900px) 42vw, 220px"
                />
              </div>
              <p
                className="mt-[18px] text-center text-[16px] text-white"
                style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 500 }}
              >
                {badge.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
