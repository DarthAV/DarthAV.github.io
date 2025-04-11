import { Button, Card, CardHeader, Image, Link } from "@heroui/react";
import { SectionHeader } from "../../components/SectionHeader";
import positions from "../../data/experience";

interface ExperienceCardProps {
  positionTitle: string;
  companyName: string;
  companyLocation?: string;
  companyLogoUrl: string;
  linkedInUrl: string | undefined;
  startEndDate: {
    start: {
      month: number;
      year: number;
    };
    end: {
      month?: number;
      year?: number;
    };
  };
}

function ExperienceCard({
  positionTitle,
  companyName,
  companyLocation,
  companyLogoUrl,
  linkedInUrl,
  startEndDate,
}: ExperienceCardProps) {
  return (
    <Card isBlurred>
      <CardHeader className="flex gap-3">
        <Image
          alt={companyName + " logo"}
          className="w-20 h-20 min-w-[5rem] object-contain"
          radius="sm"
          src={companyLogoUrl}
        />
        <div className="flex flex-col">
          <p className="text-lg">{positionTitle}</p>
          <p className="text-md">{companyName}</p>
          <p className="text-small text-default-500">
            {companyLocation +
              " (" +
              startEndDate.start.month +
              "/" +
              startEndDate.start.year +
              " - " +
              (startEndDate.end.month ? startEndDate.end.month + "/" : "") +
              startEndDate.end.year +
              ")"
            }
          </p>
        </div>
        {/* <Image
          alt={companyName + " logo"}
          height={80}
          width={80}
          radius="sm"
          src={companyLogoUrl}
          className="ml-auto order-3"
        /> */}
        {/* {linkedInUrl && (
          <Button as={Link} href={linkedInUrl}>
            View on LinkedIn
          </Button>
        )} */}
      </CardHeader>
    </Card>
  );
}


export function Experience() {
  const linkedInProfile = "https://www.linkedin.com/in/verma-ansh/";
  return (
    <div>
      <SectionHeader title="Experience" subtitle="My Work Experience" />
      <div className="grid gap-4">
        {positions.positionHistory.map((experience, index) => (
          <ExperienceCard
            key={index}
            positionTitle={experience.title}
            companyName={experience.companyName}
            companyLocation={experience.companyLocation}
            companyLogoUrl={experience.companyLogo}
            linkedInUrl={experience.linkedInUrl}
            startEndDate={experience.startEndDate}
          />
        ))}
        <div className="flex flex-col items-center justify-center">
          <Button variant="flat" as={Link} isExternal href={linkedInProfile} className="w-fit">
            See More on LinkedIn
          </Button>
        </div>
      </div>
    </div>
  );
}
