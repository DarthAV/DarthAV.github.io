import { Header, Footer } from "../components/HeaderFooter";



export function Home() {
  const navSections = ["Home", "About", "Experience", "Education", "Skills"];
  return (
    <div>
      <Header navSections={navSections} />
      <div>
        <p className="text-4xl font-bold">
          Hi, I'm Ansh Verma
        </p>
        <h3> Computer Science Student</h3>
        <p className="text-xl font-bold">
          University of Illinois Urbana-Champaign
        </p>
      </div>
      <br />
      <Footer navSections={navSections} />
    </div>
  );
}
