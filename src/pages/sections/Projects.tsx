import { Card, CardHeader, Chip, Image } from "@heroui/react";
import { SectionHeader } from "../../components/SectionHeader";
import projectsData from "../../data/projects";

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
        <Card isBlurred className="cursor-pointer h-80 w-72">
            <CardHeader className="flex flex-col items-center">
                {image && (
                    <Image
                        alt={title + " image"}
                        height={150}
                        width={275}
                        radius="sm"
                        src={image}
                        className="mb-4"
                    />
                )}
                <div className="flex flex-col items-center">
                    <p className="text-lg text-center line-clamp-2 h-14">{title}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {skills.map((skill, index) => (
                            <Chip key={index} size="sm" variant="flat">
                                {skill}
                            </Chip>
                        ))}
                    </div>
                </div>
            </CardHeader>
        </Card >
    );
}

const ScrollableCards = ({ items }: { items: ProjectCardProps[] }) => {
    return (
        <div className="flex overflow-x-auto space-x-4 p-4">
            {items.map((item, idx) => (
                <div key={idx} className="flex-shrink-0">
                    <ProjectCard
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        skills={item.skills}
                        githubUrl={item.githubUrl}
                    />
                </div>
            ))}
        </div>
    );
}

/*
const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        title: string;
        description: string;
        image: string;
        skills: string[];
        githubUrl: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <ProjectCard
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        skills={item.skills}
                        githubUrl={item.githubUrl}
                    />
                ))}
            </ul>
        </div>
    );
};
*/

export function Projects() {
    return (
        <div className="justify-evenly">
            <SectionHeader title="Projects" subtitle="My Personal Projects" />
            {/* <InfiniteMovingCards items={projectsData.projects} direction="left" speed="slow" /> */}
            <ScrollableCards items={projectsData.projects} />
        </div>
    );
}
