import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image 
          src="/logos/el-cap.jpeg"
          alt="El Capitan background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
          Tyler Schwenk Technical LLC
        </h1>
        
        <p className="text-xl sm:text-2xl text-slate-100 mb-8 max-w-3xl mx-auto drop-shadow-md">
          Full-Stack Software Development
        </p>
        
        <p className="text-lg sm:text-xl text-slate-200 mb-52 max-w-2xl mx-auto drop-shadow-md">
          Specializing in bioacoustics, machine learning, and conservation technology
        </p>
        
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <a 
            href="#projects" 
            className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View Projects
          </a> */}
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white drop-shadow-md" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
