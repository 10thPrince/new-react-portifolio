import cv from "../assets/Ntwari_Prince_Hugue_CV.pdf";
import { Briefcase, Code, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About
          <span className="text-primary"> Me</span>
        </h2>
      </div>
      {/* grid div */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* passionate wed-dev */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">
            Passionate Web Developer & Tech Creator
          </h3>
          <p className="text-muted-foreground">
            I’m a passionate software developer who enjoys turning ideas into
            clean, functional, and user-friendly applications. From backend
            logic to front-end design, I love building digital solutions that
            make an impact.
          </p>
          <p className="text-muted-foreground">
            I’m always learning and exploring new technologies to improve my
            craft. For me, coding isn’t just about writing code — it’s about
            creating experiences that solve problems and bring value to people.
          </p>
          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              {" "}
              Get In Touch
            </a>
            <a
              href={cv}
              download="Prince_Resume.pdf"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-foreground transition-colors duration-300"
            >
              {" "}
              Download CV
            </a>
          </div>
        </div>

        {/* skills */}
        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="text-primary h-6 w-6" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Web Development</h4>
                <p className="text-muted-foreground">
                  Creating responsive websites and web applications with modern
                  frameworks.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="text-primary h-6 w-6" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                <p className="text-muted-foreground">
                  Designing intuitive user interface and 
                  seamless user experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="text-primary h-6 w-6" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Project Management</h4>
                <p className="text-muted-foreground">
                  Leading projects from conception to completion 
                  with agile methodologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
