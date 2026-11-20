import Section from "@/components/Section";
import { SITE } from "@/lib/site";

const CHANNELS = [
  { label: "Email", href: `mailto:${SITE.email}`, text: SITE.email, external: false },
  { label: "GitHub", href: SITE.github.url, text: SITE.github.label, external: true },
  { label: "LinkedIn", href: SITE.linkedin.url, text: SITE.linkedin.label, external: true },
] as const;

const SERVICES = [
  "Full-stack web development",
  "Custom Machine learning solutions",
  "Bioacoustic applications",
  "Conservation technology",
] as const;

/**
 * Contact section listing contact channels alongside services offered.
 *
 * @returns The contact section element.
 */
export default function Contact() {
  return (
    <Section id="contact" label="Get In Touch">
      <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Interested in working together? Let&apos;s discuss your project.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <dl className="space-y-5">
          {CHANNELS.map((channel) => (
            <div key={channel.label}>
              <dt className="text-sm text-subtle">{channel.label}</dt>
              <dd className="mt-0.5">
                <a
                  href={channel.href}
                  {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="link break-all"
                >
                  {channel.text}
                </a>
              </dd>
            </div>
          ))}
        </dl>

        <div>
          <h3 className="text-sm font-semibold">Services Offered</h3>
          <ul className="mt-4 border-t border-line">
            {SERVICES.map((service) => (
              <li key={service} className="border-b border-line py-3 text-muted">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
