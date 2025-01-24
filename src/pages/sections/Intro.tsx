import { Image } from "@heroui/react";
import Profile1 from "../../assets/img/medium/profile1.jpg";

export function Intro() {
  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-2">
      <div>
        <p className="text-6xl font-bold
          bg-gradient-to-br from-orange-400 from-10% via-red-400 via-40% to-blue-500 
          bg-clip-text text-transparent">
          Hi, I'm Ansh Verma
        </p>
        <p className="text-2xl text-default-800">
          Computer Science Student
        </p>
        <p className="text-md font-bold text-default-500">
          University of Illinois Urbana-Champaign
        </p>
      </div>
      <Image
        alt="Ansh Verma"
        width={250}
        height={250}
        radius="full"
        isBlurred
        src={Profile1}
      />
    </div>
  );
}
