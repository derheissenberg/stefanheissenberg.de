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

export function AwardBadgesSection() {
  return (
    <section className="bg-[var(--background)] py-8 lg:py-16" aria-label="Awards and certifications">
      {/* Container: 1160px max-width, centered, no horizontal padding (matches Figma) */}
      {/* LEARNING: max-w-[1160px] matches Figma container width exactly */}
      {/* LEARNING: Reduced padding on mobile (py-8) for tighter spacing */}
      <div className="mx-auto max-w-[1160px] px-6 lg:px-0">
        {/* Grid layout: 3 columns, 30px horizontal gap, labels aligned at bottom */}
        {/* LEARNING: grid-cols-3 creates 3 equal columns, gap-x-[30px] for horizontal spacing */}
        {/* LEARNING: Added gap-y-[24px] for mobile vertical spacing, reduced from default for tighter layout */}
        {/* Each grid cell uses flex-col to stack icon(s) and label vertically */}
        <div className="grid grid-cols-1 gap-x-[30px] gap-y-[24px] sm:grid-cols-2 md:grid-cols-3 md:gap-y-0">
          {/* Award Winning Design */}
          {/* LEARNING: flex flex-col with h-full ensures each badge group fills grid cell height */}
          {/* items-center centers icons horizontally, flex-grow spacer pushes label to bottom for alignment */}
          <div className="flex h-full flex-col items-center">
            {/* Icon container - two badges side by side */}
            {/* LEARNING: flex items-center gap-3 places two badges horizontally with spacing */}
            {/* Fixed height container ensures consistent icon area height across all badges */}
            <div className="flex h-[120px] items-center justify-center gap-3">
              <div className="relative h-[120px] w-[120px] flex-shrink-0">
                <Image
                  src="/images/trustbadges/comprix-design-award.png"
                  alt="Com Prix Design Award"
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>
              <div className="relative h-[120px] w-[120px] flex-shrink-0">
                <Image
                  src="/images/trustbadges/design-ward-winning-design.svg"
                  alt="German Design Award"
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>
            </div>
            {/* Spacer: flex-grow pushes label to bottom, ensuring all labels align on desktop */}
            {/* LEARNING: flex-grow takes up remaining space, pushing label to same vertical position */}
            {/* LEARNING: Hidden on mobile (md:block) to remove extra vertical space, shown on desktop for alignment */}
            <div className="hidden flex-grow md:block"></div>
            {/* Label - 16px gap from icon container (matches Figma gap-y) */}
            {/* LEARNING: mt-[16px] creates 16px vertical gap between icon and label */}
            {/* LEARNING: Increased mobile font size from text-sm (14px) to text-[17px] (~21% increase) for better readability */}
            <p className="mt-[16px] text-center text-[17px] font-medium text-white sm:text-base">
              Award Winning Design
            </p>
          </div>

          {/* UX Master */}
          {/* LEARNING: Same structure - fixed icon container height, flex-grow spacer, label at bottom */}
          <div className="flex h-full flex-col items-center">
            {/* Fixed height icon container matches other badges for consistent label alignment */}
            {/* LEARNING: Height fixed at 120px, width auto to maintain image aspect ratio */}
            {/* Container constrains height to 120px, width adjusts to image aspect ratio */}
            <div className="flex h-[120px] items-center justify-center">
              <Image
                src="/images/trustbadges/ux-master-design-stefan-heissenberg-certified-nng.png"
                alt="Nielsen Norman Group UX Master Certification"
                width={200}
                height={120}
                className="h-[120px] w-auto object-contain"
                sizes="200px"
              />
            </div>
            {/* Spacer pushes label to same vertical position as other labels on desktop */}
            {/* LEARNING: Hidden on mobile (md:block) to remove extra vertical space */}
            <div className="hidden flex-grow md:block"></div>
            {/* Label with same spacing */}
            <p className="mt-[16px] text-center text-sm font-medium text-white sm:text-base">UX Master</p>
          </div>

          {/* Scrum Master */}
          {/* LEARNING: Same structure ensures all three labels align at the same vertical position */}
          <div className="flex h-full flex-col items-center">
            {/* Fixed height icon container matches other badges */}
            <div className="flex h-[120px] items-center justify-center">
              <div className="relative h-[120px] w-[120px] flex-shrink-0">
                <Image
                  src="/images/trustbadges/scrum-master-professional-stefan-heissenberg-psm-i.png"
                  alt="Scrum.org Professional Scrum Master PSM I"
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>
            </div>
            {/* Spacer pushes label to same vertical position on desktop */}
            {/* LEARNING: Hidden on mobile (md:block) to remove extra vertical space */}
            <div className="hidden flex-grow md:block"></div>
            {/* Label with same spacing */}
            {/* LEARNING: Increased mobile font size from text-sm (14px) to text-[17px] (~21% increase) for better readability */}
            <p className="mt-[16px] text-center text-[17px] font-medium text-white sm:text-base">Scrum Master</p>
          </div>
        </div>
      </div>
    </section>
  );
}
