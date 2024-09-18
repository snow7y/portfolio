'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useAnimation, Variants, useInView } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, Menu, X, ChevronLeft, ChevronRight, Twitter } from "lucide-react"
import Link from "next/link"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.5,
      ease: "easeOut"
    } 
  }
}

const projects = [
  { title: "E-commerce Platform", description: "A full-stack e-commerce solution built with React and Node.js" },
  { title: "Weather App", description: "A responsive weather application using OpenWeatherMap API" },
  { title: "Task Manager", description: "A productivity app built with React and Firebase" },
  { title: "Portfolio Website", description: "A personal portfolio website showcasing projects and skills" },
  { title: "Blog Platform", description: "A full-featured blog platform with user authentication and comments" }
]

const languages = [
  { name: "JavaScript", value: 30, color: "#F7DF1E" },
  { name: "Python", value: 25, color: "#3776AB" },
  { name: "Java", value: 20, color: "#007396" },
  { name: "C++", value: 15, color: "#00599C" },
  { name: "TypeScript", value: 10, color: "#3178C6" }
]

const frameworks = [
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "Express", color: "#000000" },
  { name: "Django", color: "#092E20" },
  { name: "Flutter", color: "#02569B" },
  { name: "Vue.js", color: "#4FC08D" },
  { name: "Angular", color: "#DD0031" },
  { name: "Spring Boot", color: "#6DB33F" },
  { name: "Flask", color: "#000000" },
  { name: "Ruby on Rails", color: "#CC0000" }
]

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({children, id}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, {once: false});

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.section
      id={id}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp}
      className="py-16 md:py-32 lg:py-48"
    >
      {children}
    </motion.section>
  );
};

export function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const autoplayOptions = {
    delay: 5000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
  }, [Autoplay(autoplayOptions)])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link className="flex items-center space-x-2" href="/">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/icon.png?height=32&width=32" alt="snow7y" />
                <AvatarFallback>SY</AvatarFallback>
              </Avatar>
              <span className="font-bold sm:inline-block">snow7y</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link
                className="transition-colors hover:text-gray-300 text-gray-400"
                href="#projects"
              >
                Projects
              </Link>
              <Link
                className="transition-colors hover:text-gray-300 text-gray-400"
                href="#skills"
              >
                Skills
              </Link>
              <Link
                className="transition-colors hover:text-gray-300 text-gray-400"
                href="#about"
              >
                About
              </Link>
              <Link
                className="transition-colors hover:text-gray-300 text-gray-400"
                href="#contact"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/snow7y"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block"
            >
              <Github className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
            </Link>
            <Link
              href="https://twitter.com/snow7y"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block"
            >
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
            </Link>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:text-accent-foreground h-10 py-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </button>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 md:hidden">
          <div className="flex flex-col h-full">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between border-b border-gray-800">
              <div className="flex items-center space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    src="/icon.png?height=32&width=32"
                    alt="snow7y"
                  />
                  <AvatarFallback>SY</AvatarFallback>
                </Avatar>
                <span className="font-bold text-md">snow7y</span>
              </div>
              <button onClick={toggleMenu}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close Menu</span>
              </button>
            </div>
            <nav className="flex flex-col space-y-4 p-4">
              <Link
                className="text-lg font-medium hover:text-gray-300"
                href="#projects"
                onClick={toggleMenu}
              >
                Projects
              </Link>
              <Link
                className="text-lg font-medium hover:text-gray-300"
                href="#skills"
                onClick={toggleMenu}
              >
                Skills
              </Link>
              <Link
                className="text-lg font-medium hover:text-gray-300"
                href="#about"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                className="text-lg font-medium hover:text-gray-300"
                href="#contact"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </nav>
            <div className="flex space-x-4 p-4 mt-auto">
              <Link
                href="https://github.com/snow7y"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://twitter.com/snow7y"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      )}
      <main className="container mx-auto px-4">
        <AnimatedSection id="hero">
          <div className="flex flex-col items-center space-y-8 text-center">
            <Avatar className="w-32 h-32">
              <AvatarImage
                src="/icon.png?height=128&width=128"
                alt="snow7y"
              />
              <AvatarFallback>SY</AvatarFallback>
            </Avatar>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                snow7y
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 text-xl md:text-2xl">
                Aspiring Software Developer |{" "}
                <span className="text-blue-400">Computer Science Student</span>
              </p>
            </div>
            <div className="space-x-4">
              <Link href="#contact">
                <Button size="lg">Get in Touch</Button>
              </Link>
              <Link href="#projects">
                <Button variant="secondary" size="lg">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>

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
                        <CardTitle className="text-2xl text-blue-400">
                          {project.title}
                        </CardTitle>
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

        <AnimatedSection id="skills">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-16 text-center">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">
                Programming Languages
              </h3>
              <div className="w-full h-[300px] md:h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={languages}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius="80%"
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, percent}) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {languages.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">
                Frameworks & Technologies
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {frameworks.map((framework, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-lg py-2 px-4"
                    style={{backgroundColor: framework.color, color: "#ffffff"}}
                  >
                    {framework.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="about">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-16 text-center">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-xl text-gray-300">
              I'm a{" "}
              <span className="text-blue-400">
                passionate Computer Science student
              </span>{" "}
              with a keen interest in web development and software engineering.
              Currently pursuing my degree at XY University, I'm constantly
              learning and applying new technologies to solve real-world
              problems.
            </p>
            <p className="text-xl text-gray-300">
              When I'm not coding, you can find me{" "}
              <span className="text-blue-400">
                contributing to open-source projects
              </span>
              , attending tech meetups, or exploring the latest in AI and
              machine learning.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-16 text-center">
            Get in Touch
          </h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-6">
              <Input
                placeholder="Name"
                className="bg-gray-800 border-gray-700 text-white text-lg p-6"
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-gray-800 border-gray-700 text-white text-lg p-6"
              />
              <Textarea
                placeholder="Message"
                className="bg-gray-800 border-gray-700 text-white text-lg p-6"
                rows={6}
              />
              <Button type="submit" className="w-full text-lg py-6">
                Send Message
              </Button>
            </form>
          </div>
        </AnimatedSection>
      </main>

      <footer className="border-t border-gray-800 mt-32 py-12">
        <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
            © 2023 snow7y. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link
              href="https://github.com/snow7y"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
            </Link>
            <Link
              href="https://twitter.com/snow7y"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
            </Link>
            <Link href="mailto:snow7y@example.com">
              <Mail className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}