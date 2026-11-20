import Section from "@/components/Section";

const CAPABILITIES = [
  { area: "Web and cloud", detail: "React, Vue, Django, PostgreSQL, Google Cloud, AWS" },
  { area: "Mobile", detail: "iOS and Android applications" },
  { area: "Machine learning", detail: "BirdNET, audio spectrogram transformers, TensorFlow" },
  { area: "Embedded and edge", detail: "Edge computing, real-time processing, satellite IoT" },
  { area: "Bioacoustics", detail: "Audio analysis and augmentation, scientific reporting" },
] as const;

/**
 * Short description of the practice followed by a capabilities list.
 *
 * @returns The about section element.
 */
export default function About() {
  return (
    <Section id="about" label="About">
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
        <p>
          I work where software engineering meets environmental conservation,
          building systems that help researchers and organizations make
          data-driven decisions about wildlife.
        </p>
        <p>
          Tyler Schwenk Technical LLC takes on projects across web, mobile,
          embedded, and machine learning, from first prototype through
          deployment in the field.
        </p>
      </div>

      <h3 className="mt-14 text-sm font-semibold">Capabilities</h3>
      <dl className="mt-4 grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
        {CAPABILITIES.map((item) => (
          <div key={item.area} className="border-b border-line py-4">
            <dt className="font-medium">{item.area}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
