import { Image } from "@nextui-org/react";
import Profile1 from "../../assets/img/medium/profile1.jpg";

export function Intro() {
  return (
    <div className="flex flex-wrap justify-between items-center">
      <div>
        <p className="text-4xl font-bold from-blue-400 to-purple-500 bg-gradient-to-tr bg-clip-text text-transparent">
          Hi, I'm Ansh Verma
        </p>
        <h3> Computer Science Student</h3>
        <p className="text-xl font-bold">
          University of Illinois Urbana-Champaign
        </p>
      </div>
      <Image
        alt="Ansh Verma"
        width={250}
        height={250}
        radius="sm"
        isBlurred
        src={Profile1}
      />
    </div>
  );
}
