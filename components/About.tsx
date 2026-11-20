import Section from "@/components/Section";

const SKILLS = [
  { area: "Full-Stack Web", detail: "GCP, AWS, React" },
  { area: "Mobile Development", detail: "iOS and Android applications" },
  { area: "Machine Learning", detail: "BirdNET, Audio spectrogram transformers, TensorFlow" },
  { area: "Embedded Systems", detail: "Edge computing, real-time processing" },
  { area: "Bioacoustics", detail: "Audio analysis & augmentation, Scientific reporting" },
] as const;

/**
 * Description of the practice followed by a technical skills list.
 *
 * @returns The about section element.
 */
export default function About() {
  return (
    <Section id="about" label="About">
      <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Full-Stack Development Expertise
      </h3>
      <div className="mt-5 max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
        <p>
          My work focuses on the intersection of software engineering and environmental
          conservation, building intelligent systems that help researchers and organizations
          make data-driven decisions for wildlife protection.
        </p>
        <p>
          Tyler Schwenk Technical LLC provides comprehensive software development services
          across web, mobile, and embedded platforms. With deep expertise in modern frameworks
          and technologies, I deliver production-ready solutions that solve real-world problems.
        </p>
      </div>

      <h4 className="mt-14 text-sm font-semibold">Technical Skills</h4>
      <dl className="mt-4 grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
        {SKILLS.map((item) => (
          <div key={item.area} className="border-b border-line py-4">
            <dt className="font-medium">{item.area}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
