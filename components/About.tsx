export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          About
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              Full-Stack Development Expertise
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              Tyler Schwenk Technical LLC provides comprehensive software development services 
              across web, mobile, and embedded platforms. With deep expertise in modern frameworks 
              and technologies, I deliver production-ready solutions that solve real-world problems.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              My work focuses on the intersection of software engineering and environmental 
              conservation, building intelligent systems that help researchers and organizations 
              make data-driven decisions for wildlife protection.
            </p>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8">
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Technical Skills
            </h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Full-Stack Web:</strong> GCP, AWS, React </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Mobile Development:</strong> iOS and Android applications</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Machine Learning:</strong> Audio spectrogram transformers, TensorFlow</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Embedded Systems:</strong> Edge computing, real-time processing</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Bioacoustics:</strong> Audio analysis & augmentation, Scientific reporting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
