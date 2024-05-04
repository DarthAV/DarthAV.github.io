import { Card, CardHeader, Image, Link } from "@nextui-org/react";
import { SectionHeader } from "../../components/SectionHeader";
import educationData from "../../data/education";

interface EducationCardProps {
  schoolName: string;
  schoolLocation?: string;
  degreeName: string;
  degreeSubject?: string;
  schoolLogoUrl: string;
  linkedInUrl: string;
  startYear: number;
  endYear: number;
}

function EducationCard({
  schoolName,
  schoolLocation,
  degreeName,
  degreeSubject,
  schoolLogoUrl,
  linkedInUrl,
  startYear,
  endYear,
}: EducationCardProps) {
  return (
    <Card isBlurred as={Link} href={linkedInUrl} isExternal isBlock>
      <CardHeader className="flex gap-3">
        <Image
          alt={schoolName + " logo"}
          height={100}
          width={100}
          radius="sm"
          src={schoolLogoUrl}
        />
        <div className="flex flex-col">
          <p className="text-lg">{schoolName}</p>
          <p className="text-md">{degreeName + " " + degreeSubject}</p>
          <p className="text-small text-default-500">
            {startYear + " - " + endYear}
          </p>
        </div>
      </CardHeader>
    </Card>
  );
}

export function Education() {

  return (
    <div className="justify-evenly">
      <SectionHeader title="Education" subtitle="My Academic Background" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {educationData.educationHistory.map((education, index) => (
          <EducationCard
            key={index}
            schoolName={education.school.schoolName}
            schoolLocation={education.school.schoolLocation}
            degreeName={education.degreeName}
            degreeSubject={education.fieldOfStudy}
            schoolLogoUrl={education.school.schoolLogoUrl}
            linkedInUrl={education.school.linkedInUrl}
            startYear={education.startEndDate.start.year}
            endYear={education.startEndDate.end.year}
          />
        ))}
      </div>
    </div>
  );
}
