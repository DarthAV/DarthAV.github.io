import { Card, CardBody } from "@nextui-org/react";
import { SectionHeader } from "../../components/SectionHeader";

export function Skills() {
  return (
    <div>
      <SectionHeader {...{ title: "Skills", subtitle: "My technical proficiency" }} />
      <Card>
        <p>
          <b>Programming Languages:</b> Python, Java, C, C++, JavaScript, TypeScript, HTML, CSS, SQL, PHP, Bash
        </p>
      </Card>
    </div>
  )
}
