import { SITE } from "@/lib/site";

/**
 * Minimal footer with the copyright line and a link back to the top.
 *
 * @returns The site footer element.
 */
export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-2 py-8 text-sm text-subtle sm:flex-row sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {SITE.legalName}
        </p>
        <a href="#top" className="transition-colors hover:text-ink">
          Back to top
        </a>
      </div>
    </footer>
  );
}
