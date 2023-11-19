import { Image } from "@nextui-org/react";

export function Intro() {
  return (
    <div className="flex flex-wrap justify-between">
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
        width={150}
        height={150}
        radius="sm"
        isBlurred
        // src="src\assets\img\medium\profile1.jpg"
        src="https://styles.redditmedia.com/t5_2k2eoh/styles/communityIcon_bc8xe371fbt41.jpg"
      />
    </div>
  );
}
