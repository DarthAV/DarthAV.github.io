import { Header, Footer } from "../components/HeaderFooter";
import { Text } from "@nextui-org/react";



export function Home() {
  return (
    <div>
      <Header />
      <div >
        <Text h1
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}>
          Hi, I'm Ansh Verma
        </Text >
        <h3> Computer Science Student</h3>
        <p>
          <strong>University of Illinois Urbana-Champaign</strong>
        </p>
      </div>
      <Footer />
    </div>
  );
}
