import { NAV_ITEMS, SITE } from "@/lib/site";

/**
 * Sticky top bar with the business wordmark and in-page navigation.
 *
 * @returns The site header element.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-canvas/85 backdrop-blur">
      <div className="container-page flex h-14 items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight">
          {SITE.owner}
          <span className="hidden font-normal text-subtle sm:inline"> Technical</span>
        </a>
        <nav aria-label="Primary">
          <ul className="flex gap-5 text-sm text-muted sm:gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
