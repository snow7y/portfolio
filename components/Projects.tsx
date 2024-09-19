// Projects.tsx
import React, {useCallback} from "react";
import {AnimatedSection} from "@/components/AnimatedSection";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  url: string;
}

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({projects}) => {
  const autoplayOptions = {
    delay: 5000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: "trimSnaps",
      slidesToScroll: 1,
    },
    [Autoplay(autoplayOptions)]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <AnimatedSection id="projects">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-16 text-center">
        Projects
      </h2>
      <div className="overflow-hidden relative">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {projects.map((project, index) => (
              <div
                className="embla__slide flex-[0_0_90%] md:flex-[0_0_60%] lg:flex-[0_0_40%] min-w-0 px-4"
                key={index}
              >
                <Card className="w-full bg-gray-800 border-gray-700 h-full">
                  <CardHeader>
                    <Link href={project.url}>                    
                    <CardTitle className="text-2xl text-blue-400">
                      {project.title}
                    </CardTitle>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 text-lg">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
          <Button
            onClick={scrollPrev}
            size="icon"
            className="rounded-full pointer-events-auto"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={scrollNext}
            size="icon"
            className="rounded-full pointer-events-auto"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};
