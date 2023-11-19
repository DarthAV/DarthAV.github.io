import { Footer, Header } from "../components/HeaderFooter";
import { About } from "./sections/About";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Intro } from "./sections/Intro";
import { Skills } from "./sections/Skills";

export function Home() {
  const navSections = [
    "Home",
    "About",
    "Experience",
    "Education",
    "Skills",
    "Projects",
    "Contact",
    "Resume",
  ];
  return (
    <div className="flex flex-col items-center justify-center bg-neutral-900">
      <Header navSections={navSections} />
      <div className="p-10 max-w-4xl">
        <Intro />
        <About />
        <Education />
        <Experience />
        <Skills />
      </div>
      <Footer navSections={navSections} />
    </div>
  );
}
