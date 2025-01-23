import { Button, Card, CardHeader, Chip, Image, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, cn, useDisclosure } from "@heroui/react";
import React, { useEffect, useState } from "react";
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
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Card isBlurred onClick={onOpen} className="cursor-pointer h-96 w-72">
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

            <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                            <ModalBody>
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
                                <p>{description}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {skills.map((skill, index) => (
                                        <Chip key={index} size="sm" variant="flat">
                                            {skill}
                                        </Chip>
                                    ))}
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" as={Link} href={githubUrl} isExternal>
                                    View Source
                                </Button>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

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


export function Projects() {
    return (
        <div className="justify-evenly">
            <SectionHeader title="Projects" subtitle="My Personal Projects" />
            <InfiniteMovingCards items={projectsData.projects} direction="left" speed="slow" />
        </div>
    );
}
