import { Footer, Header } from "../components/HeaderFooter";
import ScrollTop from "../components/ScrollTop";
import { About } from "./sections/About";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Intro } from "./sections/Intro";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Visited } from "./sections/Visited";

export function Home() {
  // const navSections = ["Home", "Education", "Experience", "Skills"];
  const navSections: string[] = [];
  return (
    <div className="flex flex-col items-center justify-center dark:bg-neutral-900">
      <Header navSections={navSections} />
      <div className="p-10 max-w-5xl">
        <Intro />
        {/* <About /> */}
        <Education />
        <Experience />
        <Skills />
        <Projects />
        {/* <Visited /> */}
      </div>
      <ScrollTop />
      <Footer navSections={navSections} />
    </div>
  );
}
