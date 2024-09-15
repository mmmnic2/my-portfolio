import About from "@/components/about/About";
import Footer from "@/components/common/footer/Footer";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/projects/Projects";
import { Skills } from "@/components/skill/Skills";

export default function Home() {
  return (
    <>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}
