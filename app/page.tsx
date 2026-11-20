import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Single-page home: hero, about, projects, contact, footer.
 *
 * @returns The home page.
 */
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
