import Image from "next/image";
import { SITE } from "@/lib/site";

/**
 * Opening section: full-width landscape photo behind the business name,
 * taglines, a contact call to action, and profile links. A soft blurred
 * shadow behind the text keeps it readable over brighter parts of the photo.
 *
 * @returns The hero section element.
 */
export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[min(85svh,52rem)] items-end overflow-hidden bg-neutral-900"
    >
      <Image
        src="/logos/el-cap.webp"
        alt="El Capitan mountain landscape - Tyler Schwenk Technical LLC background"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

      <div className="container-page relative pb-12 pt-32 sm:pb-20">
        <div className="relative isolate w-fit max-w-full">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-10 -inset-y-8 -z-10 rounded-[3rem] bg-black/35 blur-2xl"
          />
          <h1
            id="hero-heading"
            className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl"
          >
            {SITE.legalName}
          </h1>
          <p className="mt-5 text-xl font-medium text-white sm:text-2xl">
            Full-Stack Software Development
          </p>
          <p className="mt-2 max-w-2xl text-lg text-white/85">
            Specializing in bioacoustics, machine learning, and conservation technology
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition-opacity hover:opacity-90"
            >
              Get In Touch
            </a>
            <div className="flex gap-6 text-sm font-medium text-white/90">
              <a href={SITE.github.url} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                GitHub
              </a>
              <a href={SITE.linkedin.url} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
