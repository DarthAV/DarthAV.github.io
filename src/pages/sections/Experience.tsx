import { Card, CardHeader, Image } from "@nextui-org/react";
import { SectionHeader } from "../../components/SectionHeader";

interface ExperienceCardProps {
  positionTitle: string;
  companyName: string;
  companyLocation?: string;
  companyLogoUrl: string;
  linkedInUrl: string;
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
          height={80}
          width={80}
          radius="sm"
          src={companyLogoUrl}
        />
        <div className="flex flex-col">
          <p className="text-lg">{positionTitle}</p>
          <p className="text-md">{companyName + " - " + companyLocation}</p>
          <p className="text-small text-default-500">
            {startEndDate.start.month +
              "/" +
              startEndDate.start.year +
              " - " +
              (startEndDate.end.month ? startEndDate.end.month + "/" : "") +
              startEndDate.end.year}
          </p>
        </div>
      </CardHeader>
      {/* <CardBody>
        <Button>View on LinkedIn</Button>
      </CardBody> */}
    </Card>
  );
}

export function Experience() {
  const positions = {
    positionsCount: 6,
    positionHistory: [
      {
        title: "Software Engineering Intern",
        startEndDate: {
          start: {
            month: 5,
            year: 2024,
          },
          end: {
            month: 8,
            year: 2024,
          },
        },
        description: "12 week SWE internship",
        companyName: "Microsoft",
        companyLocation: "Redmond, Washington, United States",
        companyLogo:
          "https://th.bing.com/th/id/OIP.cAP3FEUuux9mbY9a03xTyAHaHa?rs=1&pid=ImgDetMain",
        linkedInUrl: "https://www.linkedin.com/organization/microsoft",
      },
      {
        title: "Explore Intern",
        startEndDate: {
          start: {
            month: 5,
            year: 2023,
          },
          end: {
            month: 8,
            year: 2023,
          },
        },
        description:
          "12 week PM + SWE internship on the Microsoft OneDrive Photos team.",
        companyName: "Microsoft",
        companyLocation: "Redmond, Washington, United States",
        companyLogo:
          "https://th.bing.com/th/id/OIP.cAP3FEUuux9mbY9a03xTyAHaHa?rs=1&pid=ImgDetMain",
        linkedInUrl: "https://www.linkedin.com/organization/microsoft",
      },
      {
        title: "Course Assistant - Intro to CS II (CS 128)",
        startEndDate: {
          start: {
            month: 12,
            year: 2022,
          },
          end: {
            month: 5,
            year: 2023,
          },
        },
        description:
          "•\tConducted office hours to help students understand course material and troubleshoot technical issues \n•\tUtilized knowledge of computer science principles and C++ to provide effective assistance to students \n•\tCommunicated with Professor Michael Nowak and other course assistants to ensure consistent instruction and support for students",
        companyName: "University of Illinois Urbana-Champaign",
        companyLocation: "Champaign, Illinois, United States",
        companyLogo:
          "https://styles.redditmedia.com/t5_2k2eoh/styles/communityIcon_bc8xe371fbt41.jpg",
        linkedInUrl:
          "https://www.linkedin.com/organization/university-of-illinois-urbana-champaign",
      },
      {
        title: "Discovery Intern",
        startEndDate: {
          start: {
            month: 7,
            year: 2022,
          },
          end: {
            month: 8,
            year: 2022,
          },
        },
        description:
          "•\tDrove requirements and implementation of a collaborative capstone project under the guidance of Microsoft engineers within the Windows Cybersecurity group\n•\tDesigned a data pipeline architecture to aggregate cybersecurity threats communicated on social media and visualize them in a consolidated dashboard for security engineers \n•\tApplied agile project management in Azure DevOps, UI/UX design in Figma, pipeline modeling in Visio, and some basic programming in Python",
        companyName: "Microsoft",
        companyLocation: "Redmond, Washington, United States",
        companyLogo:
          "https://th.bing.com/th/id/OIP.cAP3FEUuux9mbY9a03xTyAHaHa?rs=1&pid=ImgDetMain",
        linkedInUrl: "https://www.linkedin.com/organization/microsoft",
      },
    ],
  };
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
      </div>
    </div>
  );
}
