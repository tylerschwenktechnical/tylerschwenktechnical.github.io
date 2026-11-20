import Image from "next/image";
import { SITE } from "@/lib/site";

/**
 * Opening section: positioning statement, primary call to action,
 * and a wide landscape photo.
 *
 * @returns The hero section element.
 */
export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading">
      <div className="container-page pb-12 pt-16 sm:pb-16 sm:pt-24">
        <p className="text-sm font-medium text-accent">{SITE.legalName}</p>
        <h1
          id="hero-heading"
          className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl"
        >
          Software for conservation, wildlife monitoring, and field research.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Full-stack web, mobile, and machine learning development. Recent work
          includes acoustic species classifiers and a satellite-connected sensor
          platform running on devices in the field.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a href={`mailto:${SITE.email}`} className="btn-primary">
            Email me
          </a>
          <a href="#work" className="link text-sm">
            See recent work
          </a>
        </div>
      </div>

      <div className="container-page pb-16 sm:pb-24">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-line sm:aspect-[21/9]">
          <Image
            src="/logos/el-cap.webp"
            alt="Granite cliffs above Yosemite Valley at sunset"
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover object-[50%_60%]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
