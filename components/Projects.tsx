import type { ReactNode } from "react";
import Image from "next/image";
import Section from "@/components/Section";

/** Rendered edge length, in pixels, of the square logo tile. */
const LOGO_TILE_SIZE = 44;

interface Project {
  title: string;
  organization: string;
  organizationUrl: string;
  logoPath: string;
  /** Extra classes to compensate for padding baked into a logo file. */
  logoClassName?: string;
  description: ReactNode[];
  technologies: string[];
}

const PROJECTS: Project[] = [
  {
    title: "Custom Bioacoustic ML Classifier Development & Consulting",
    organization: "The Nature Conservancy",
    organizationUrl: "https://www.nature.org/en-us/",
    logoPath: "/logos/tnc-mark.png",
    description: [
      "Developed an acoustic classifier for California red-legged frogs using a custom automated BirdNET training framework",
      "Built a cross-platform application for conservation researchers integrating BirdNET and custom models",
      <>
        View the technical documentation of my model development, and field deployment guide{" "}
        <a
          href="https://tnc-conservation-technology.gitbook.io/acoustic-frog-monitoring"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          here
        </a>
      </>,
    ],
    technologies: ["Machine Learning", "Audio Processing", "Conservation Technology"],
  },
  {
    title: "Real-time Acoustic Monitoring Platform",
    organization: "Instinct",
    organizationUrl: "https://instinctenvironmental.com/",
    logoPath: "/logos/instinct2.png",
    logoClassName: "scale-125",
    description: [
      "Leading re-architecture and deployment of real-time wildlife monitoring platform integrating satellite-connected sensors, cloud infrastructure, and multi-channel alerting across 50+ field devices",
      "Built end-to-end data pipelines processing Globalstar satellite telemetry and designed scalable Google Cloud infrastructure supporting multi-tenant organizations",
      "Extended Vue 3 web dashboard for live sensor monitoring and geospatial visualization; developing companion iOS and Android mobile applications",
    ],
    technologies: ["Edge Computing", "Google Cloud", "iOS/Android Development", "Satellite IoT", "Data Pipelines"],
  },
  {
    title: "Marketplace Platform",
    organization: "Trade Routes",
    organizationUrl: "https://www.traderoutestcg.com/",
    logoPath: "/logos/TR Logo.png",
    description: [
      "Architected and developed full-stack peer-to-peer marketplace from the ground up, including PostgreSQL database design, Django REST API, React frontend, and AWS cloud infrastructure",
      "Managing business operations and technical leadership for trading card marketplace platform",
    ],
    technologies: ["Django", "PostgreSQL", "React", "AWS", "Full-Stack"],
  },
];

/**
 * Small white tile holding an organization logo so mixed logo shapes
 * line up and stay legible in both color schemes. Decorative: the
 * organization name next to it carries the link for assistive tech.
 *
 * @param props - The project whose logo is shown.
 * @returns A logo tile.
 */
function LogoTile({ project }: { project: Project }) {
  return (
    <div
      className="shrink-0 overflow-hidden rounded-md border border-line bg-white"
      style={{ width: LOGO_TILE_SIZE, height: LOGO_TILE_SIZE }}
    >
      <Image
        src={project.logoPath}
        alt=""
        width={LOGO_TILE_SIZE}
        height={LOGO_TILE_SIZE}
        className={`h-full w-full object-contain p-1 ${project.logoClassName ?? ""}`}
      />
    </div>
  );
}

/**
 * One project entry: client, title, description bullets, and the
 * technologies involved.
 *
 * @param props - The project to render.
 * @returns A list item for the work list.
 */
function ProjectEntry({ project }: { project: Project }) {
  return (
    <li className="py-10 first:pt-0 last:pb-0">
      <div className="flex items-center gap-3">
        <LogoTile project={project} />
        <a
          href={project.organizationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          {project.organization}
        </a>
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight">{project.title}</h3>

      <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-subtle">
        {project.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-x-2 text-sm text-subtle" aria-label="Technologies">
        {project.technologies.map((tech, index) => (
          <li key={tech} className="whitespace-nowrap">
            {index > 0 && <span aria-hidden="true" className="mr-2">·</span>}
            {tech}
          </li>
        ))}
      </ul>
    </li>
  );
}

/**
 * Featured client projects.
 *
 * @returns The work section element.
 */
export default function Projects() {
  return (
    <Section id="projects" label="Featured Projects">
      <ol className="divide-y divide-line">
        {PROJECTS.map((project) => (
          <ProjectEntry key={project.title} project={project} />
        ))}
      </ol>
    </Section>
  );
}
