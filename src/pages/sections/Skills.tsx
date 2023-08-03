import { Card, CardBody } from "@nextui-org/react";
import { SectionHeader } from "../../components/SectionHeader";

export function Skills() {
  return (
    <div>
      <SectionHeader
        {...{ title: "Skills", subtitle: "My technical proficiency" }}
      />
      <Card>
        <CardBody>
          <b>Programming Languages:</b> Python, Java, C, C++, JavaScript,
          TypeScript, HTML, CSS
        </CardBody>
      </Card>
    </div>
  );
}
