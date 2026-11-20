import Section from "@/components/Section";
import { SITE } from "@/lib/site";

const PROFILES = [SITE.github, SITE.linkedin];

/**
 * Contact section with email as the primary channel and profile links.
 *
 * @returns The contact section element.
 */
export default function Contact() {
  return (
    <Section id="contact" label="Contact">
      <p className="text-2xl font-semibold tracking-tight sm:text-3xl">Have a project in mind?</p>
      <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted">
        I take on contract work in web, mobile, and machine learning, especially
        for conservation and research teams. Email is the best way to reach me.
      </p>
      <a href={`mailto:${SITE.email}`} className="link mt-6 inline-block break-all text-xl sm:text-2xl">
        {SITE.email}
      </a>
      <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
        {PROFILES.map((profile) => (
          <li key={profile.url}>
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-subtle"
            >
              {profile.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
