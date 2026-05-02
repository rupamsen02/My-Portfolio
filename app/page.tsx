import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import About from "./section/About";
import Contact from "./section/Contact";
import Experience from "./section/Experience";
import Hero from "./section/Hero";
import Projects from "./section/Projects";
import Testimonial from "./section/Testimonial";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Testimonial />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
