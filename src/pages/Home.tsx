import { Footer, Header } from "../components/HeaderFooter";
import { About } from "./sections/About";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Intro } from "./sections/Intro";
import { Skills } from "./sections/Skills";




export function Home() {
  const navSections = ["Home", "About", "Experience", "Education", "Skills", "Projects", "Contact", "Resume", "Blog", "Testimonials", "FAQ"];
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Header navSections={navSections} />
      <Intro />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Footer navSections={navSections} />
    </div>
  );
}
