import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import { SectionHeader } from "../../components/SectionHeader";

const skillsList = [
  "Python",
  "Java",
  "C",
  "C++",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Object-Oriented Programming (OOP)",
  "Artificial Intelligence (AI)",
  "Git",
  "DevOps",
  "Computer Networking",
];
export function Skills() {
  return (
    <div>
      <SectionHeader
        {...{ title: "Skills", subtitle: "My technical proficiency" }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card isBlurred>
          <CardHeader className="uppercase font-bold text-lg">
            Programming Languages
          </CardHeader>
          <CardBody>
            Python, Java, C, C++, JavaScript, TypeScript, HTML, CSS
          </CardBody>
        </Card>
        <Card isBlurred>
          <CardHeader className="uppercase font-bold text-lg">
            Concepts
          </CardHeader>
          <CardBody>
            Object-Oriented Programming (OOP), Artificial Intelligence (AI),
            Git, DevOps, Computer Networking
          </CardBody>
        </Card>
      </div>
      <br />
      <div className="flex flex-wrap gap-2">
        {skillsList.map((skill, index) => (
          <Chip key={index} size="lg" variant="flat">
            {skill}
          </Chip>
        ))}
      </div>
    </div>
  );
}
