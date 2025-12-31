import Image from "next/image";

export default function Projects() {
  /* const projects = [
    {
      title: "Custom Bioacoustic ML Classifier Development & Consulting",
      organization: "The Nature Conservancy",
      organizationUrl: "https://www.nature.org/en-us/",
      logoPath: "/logos/TheNatureConservancy.png",
      logoWidth: 120,
      logoHeight: 60,
      description: [
        <>Developed an acoustic classifier for California red-legged frogs using a <a href="https://github.com/Tyler-Schwenk/BirdNET-CustomClassifierSuite" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 underline transition-colors">custom automated BirdNET training framework</a></>,
        "Built a cross-platform application for conservation researchers integrating BirdNET and custom models",
      ],
      technologies: ["Machine Learning", "Audio Processing", "Conservation Technology"]
    },
    {
      title: "Wildlife Surveying Platform",
      organization: "Instinct",
      organizationUrl: "https://instinctenvironmental.com/",
      logoPath: "/logos/instinct2.png",
      logoWidth: 70,
      logoHeight: 25,
      description: [
        "Leading full-stack development of web, iOS, and Android applications for ML-powered acoustic monitoring",
        "Building automated wildlife surveying system detecting 6,500+ species with real-time edge computing",
        "Implementing satellite connectivity and notification systems for remote deployment"
      ],
      technologies: ["Next.js", "iOS Development", "Android Development", "Edge Computing", "IoT"]
    }
  ]; */

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background image 
      <div className="absolute inset-0">
        <Image 
          src="/logos/trail2.jpeg"
          alt="Trail background"
          fill
          className="object-cover"
          quality={90}
        />
        {/* Dark overlay for readability 
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      */}
      
      {/* <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* <h2 className="text-4xl font-bold text-white mb-4 text-center drop-shadow-lg">
          Featured Projects
        </h2>
        <p className="text-lg text-slate-100 mb-12 text-center max-w-3xl mx-auto drop-shadow-md">
          Delivering impactful software solutions for wildlife conservation and environmental research
        </p>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <a 
                    href={project.organizationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Image 
                      src={project.logoPath}
                      alt={`${project.organization} logo`}
                      width={project.logoWidth}
                      height={project.logoHeight}
                      className="object-contain"
                    />
                  </a>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <a 
                    href={project.organizationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors inline-flex items-center gap-1"
                  >
                    {project.organization}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {project.description.map((item, i) => (
                  <li key={i} className="flex items-start text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div> 
      </div> */}
    </section>
  );
}
