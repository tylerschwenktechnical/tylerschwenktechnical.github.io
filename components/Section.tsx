import type { ReactNode } from "react";

interface SectionProps {
  /** Anchor id used by the navigation. */
  id: string;
  /** Short heading shown in the left column on wide screens. */
  label: string;
  children: ReactNode;
}

/**
 * Page section with a consistent two-column layout: a small heading on the
 * left and the section content on the right. Stacks on narrow screens.
 *
 * @param props - Section id, heading label, and content.
 * @returns A labelled section element.
 */
export default function Section({ id, label, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="scroll-mt-14 border-t border-line">
      <div className="container-page grid gap-6 py-16 sm:py-24 md:grid-cols-[10rem_1fr] md:gap-12">
        <h2 id={headingId} className="text-sm font-semibold text-ink md:pt-1">
          {label}
        </h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
