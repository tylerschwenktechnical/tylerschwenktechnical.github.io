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
  highlights: string[];
  link?: { label: string; href: string };
  technologies: string[];
}

const PROJECTS: Project[] = [
  {
    title: "Real-time acoustic monitoring platform",
    organization: "Instinct",
    organizationUrl: "https://instinctenvironmental.com/",
    logoPath: "/logos/instinct2.png",
    logoClassName: "scale-125",
    highlights: [
      "Leading the re-architecture and deployment of a real-time wildlife monitoring platform that ties together satellite-connected sensors, cloud infrastructure, and multi-channel alerting across 50+ field devices.",
      "Built end-to-end pipelines for Globalstar satellite telemetry and designed multi-tenant Google Cloud infrastructure.",
      "Extended the Vue 3 dashboard for live sensor monitoring and geospatial views. Developing companion iOS and Android apps.",
    ],
    technologies: ["Google Cloud", "Satellite IoT", "Edge computing", "Data pipelines", "Vue 3", "iOS", "Android"],
  },
  {
    title: "Bioacoustic classifier development and consulting",
    organization: "The Nature Conservancy",
    organizationUrl: "https://www.nature.org/en-us/",
    logoPath: "/logos/tnc-mark.png",
    highlights: [
      "Developed an acoustic classifier for California red-legged frogs using a custom automated BirdNET training framework.",
      "Built a cross-platform application for conservation researchers that runs BirdNET alongside custom models.",
    ],
    link: {
      label: "Model development and field deployment guide",
      href: "https://tnc-conservation-technology.gitbook.io/acoustic-frog-monitoring",
    },
    technologies: ["BirdNET", "Machine learning", "Audio processing", "Cross-platform app"],
  },
  {
    title: "Trading card marketplace",
    organization: "Trade Routes",
    organizationUrl: "https://www.traderoutestcg.com/",
    logoPath: "/logos/TR Logo.png",
    highlights: [
      "Architected and built a peer-to-peer marketplace from the ground up, covering PostgreSQL schema design, a Django REST API, a React frontend, and AWS infrastructure.",
      "Run business operations and technical leadership for the platform.",
    ],
    technologies: ["Django", "PostgreSQL", "React", "AWS"],
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
 * One project entry: client, title, highlights, optional reference link,
 * and the technologies involved.
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
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      {project.link && (
        <a
          href={project.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="link mt-4 inline-block text-sm"
        >
          {project.link.label} &#8599;
        </a>
      )}

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
 * Selected client work, most recent first.
 *
 * @returns The work section element.
 */
export default function Projects() {
  return (
    <Section id="work" label="Selected work">
      <ol className="divide-y divide-line">
        {PROJECTS.map((project) => (
          <ProjectEntry key={project.title} project={project} />
        ))}
      </ol>
    </Section>
  );
}
