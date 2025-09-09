import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <section id="home" className="min-h-screen flex flex-col justify-center items-center">
        <Hero />
      </section>
      {/* <section id="home" className="min-h-screen flex flex-col justify-center items-center">
        <Projects />
      </section>
      <section id="about" className="min-h-screen flex flex-col justify-center items-center">
        <About />
      </section>
      <section id="contact" className="min-h-screen flex flex-col justify-center items-center">
        <Contact />
      </section> */}
    </main>
  );
}
