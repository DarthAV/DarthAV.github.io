import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { SectionHeader } from "../../components/SectionHeader";

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
    <Card isBlurred>
      <CardHeader className="flex gap-3">
        <Image
          alt={schoolName + " logo"}
          height={80}
          width={80}
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
      {/* <CardBody>
        <Button>View on LinkedIn</Button>
      </CardBody> */}
    </Card>
  );
}

export function Education() {
  const educationData = {
    educationsCount: 2,
    educationHistory: [
      {
        school: {
          schoolName: "University of Illinois Urbana-Champaign",
          schoolLocation: "Champaign, Illinois, United States",
          schoolLogoUrl:
            "https://styles.redditmedia.com/t5_2k2eoh/styles/communityIcon_bc8xe371fbt41.jpg",
          linkedInUrl:
            "https://www.linkedin.com/organization/university-of-illinois-urbana-champaign",
        },
        degreeName: "Bachelor of Science - BS",
        startEndDate: {
          start: {
            year: 2022,
          },
          end: {
            year: 2026,
          },
        },
        fieldOfStudy: "Computer Science",
      },
      {
        school: {
          schoolName: "Interlake Senior High School",
          schoolLogoUrl:
            "https://media-exp1.licdn.com/dms/image/C4E0BAQG7FBbC4jRRIQ/company-logo_200_200/0/1539309296578?e=2159024400&v=beta&t=OlSQFNqdYtKRuWFINpiICNp7jxQro_uq8ya9hhRmqCE",
          linkedInUrl:
            "https://www.linkedin.com/organization/interlake-senior-high-school",
        },
        degreeName: "High School Diploma",
        startEndDate: {
          start: {
            year: 2018,
          },
          end: {
            year: 2022,
          },
        },
        fieldOfStudy: "",
      },
    ],
  };

  return (
    <div className="justify-evenly">
      <SectionHeader
        {...{ title: "Education", subtitle: "My academic background" }}
      />
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
