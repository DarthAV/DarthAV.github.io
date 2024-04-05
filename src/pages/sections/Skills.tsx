import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import { SectionHeader } from "../../components/SectionHeader";
import { conceptsList, languagesList } from "../../data/skills";

export function Skills() {
  return (
    <div>
      <SectionHeader title="Skills" subtitle="My Technical Proficiency" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card isBlurred>
          <CardHeader className="uppercase font-bold text-lg">
            Programming Languages
          </CardHeader>
          <CardBody>
            <div className="flex flex-wrap gap-2 ">
              {languagesList.map((skill, index) => (
                <Chip key={index} size="lg" variant="flat">
                  {skill}
                </Chip>
              ))}
            </div>
          </CardBody>
        </Card>
        <Card isBlurred>
          <CardHeader className="uppercase font-bold text-lg">
            Concepts
          </CardHeader>
          <CardBody>
            <div className="flex flex-wrap gap-2">
              {conceptsList.map((skill, index) => (
                <Chip key={index} size="lg" variant="flat">
                  {skill}
                </Chip>
              ))}
            </div>
          </CardBody>
        </Card>
      </div >
    </div >
  );
}
