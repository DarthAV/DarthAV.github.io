import { Card, CardHeader, Image, Link, Chip } from "@nextui-org/react";
import projectsData from "../../data/projects";
import { SectionHeader } from "../../components/SectionHeader";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  skills: string[];
  githubUrl: string;
}

function ProjectCard({
  title,
  description,
  image,
  skills,
  githubUrl,
}: ProjectCardProps) {
  return (
    <Card isBlurred as={Link} href={githubUrl} isExternal isBlock className="h-96 w-72">
      <CardHeader className="flex flex-col items-center">
        {image && (
          <Image
            alt={title + " image"}
            height={150}
            width={150}
            radius="sm"
            src={image}
            className="mb-4"
          />
        )}
        <div className="flex flex-col items-center">
          <p className="text-lg">{title}</p>
          <p className="text-md">{description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill, index) => (
              <Chip key={index} size="sm" variant="flat">
                {skill}
              </Chip>
            ))}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

export function Projects() {
  return (
    <div className="justify-evenly">
      <SectionHeader title="Projects" subtitle="My Personal Projects" />
      <div className="flex overflow-scroll overflow-x-auto space-x-4">
        {projectsData.projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            skills={project.skills}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </div>
  );
}
