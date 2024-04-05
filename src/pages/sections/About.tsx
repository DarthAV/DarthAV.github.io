import { Button, ButtonGroup } from "@nextui-org/react";
import { SectionHeader } from "../../components/SectionHeader";


export function About() {
  return (
    <div>
      <SectionHeader title="About Me" subtitle="Get to know me" />
      <div>
        <ButtonGroup>
          <Button
            variant="ghost"
            size="sm"
            href="https://github.com/DarthAV"
          >
            GitHub
          </Button>
          <Button
            variant="ghost"
            size="sm"
            href="https://linkedin.com/in/verma-ansh"
          >
            LinkedIn
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
