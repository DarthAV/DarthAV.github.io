import { Footer, Header } from "../components/HeaderFooter";
import ScrollTop from "../components/ScrollTop";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { About } from "./sections/About";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Intro } from "./sections/Intro";
import { Skills } from "./sections/Skills";
import { Visited } from "./sections/Visited";
/* eslint-enable @typescript-eslint/no-unused-vars */

export function Home() {
  const navSections = ["Home", "Education", "Experience", "Skills"];
  // const navSections: string[] = [];
  return (
    <div id="Home" className="flex flex-col items-center justify-center dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900">
      <Header navSections={navSections} />
      <div className="px-10 pb-10 pt-28 max-w-5xl">
        <Intro />
        {/* <About /> */}
        <section id="Education" className="scroll-mt-20">
          <Education />
        </section>
        <section id="Experience" className="scroll-mt-20">
          <Experience />
        </section>
        <section id="Skills" className="scroll-mt-20">
          <Skills />
        </section>
        {/* <Visited /> */}
      </div>
      <ScrollTop />
      <Footer navSections={navSections} />
    </div>
  );
}
