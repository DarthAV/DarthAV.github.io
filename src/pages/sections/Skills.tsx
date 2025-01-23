import { Card, CardBody, CardHeader, Chip, Tooltip } from "@heroui/react";
import { SectionHeader } from "../../components/SectionHeader";
import { conceptsList, toolsList } from "../../data/skills";

export function Skills() {
  return (
    <div>
      <SectionHeader title="Skills" subtitle="My Technical Proficiency" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card isBlurred>
          <CardHeader className="uppercase font-bold text-lg">
            Programming Languages / Tools
          </CardHeader>
          <CardBody>
            <div className="flex flex-wrap gap-2 ">
              {toolsList.map((skill, index) => (
                <Tooltip showArrow={true} content={skill} delay={1000}>
                  <img height={48} width={48} alt={skill}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/" +
                      skill.trim().toLowerCase() + "/" + skill.trim().toLowerCase() + "-original.svg"} />
                </Tooltip>
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
