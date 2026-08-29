import type { IconType } from "react-icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import FadeInMotion from "@/app/components/Motion";
import { StaggerContainer, StaggerItem } from "@/app/components/Motion";

interface Skill {
  name: string;
  icon: IconType;
}

interface SkillCategory {
  id: number;
  title: string;
  description: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and interactive web applications.",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    id: 2,
    title: "Development Tools",
    description:
      "Tools I use to build, manage, collaborate on, and deploy projects.",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "VS Code", icon: VscVscode },
    ],
  },
];

const Skill = () => {
  return (
    <section id="skills" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <FadeInMotion>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-600">
              My Skills
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tools I use to build digital solutions
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              My frontend development skills and the tools I use to turn ideas
              into responsive, functional, and maintainable web applications.
            </p>
          </div>
        </FadeInMotion>

        {/* Skill Categories */}
        <StaggerContainer>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {skillCategories.map((category) => (
              <StaggerItem key={category.id}>
                <article className="rounded-xl border border-gray-200 bg-white p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {category.description}
                  </p>


                  {/* Skills */}
                  <StaggerContainer>
                    < div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3" >
                      {
                        category.skills.map((skill) => {
                          const Icon = skill.icon;

                          return (
                            <StaggerItem key={skill.name}>
                              <div
                                className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:-translate-y-1 hover:shadow-md"
                              >
                                <Icon
                                  className="text-3xl text-gray-800"
                                  aria-hidden="true"
                                />

                                <span className="mt-3 text-sm font-medium text-gray-700">
                                  {skill.name}
                                </span>
                              </div>
                            </StaggerItem>
                          );
                        })
                      }
                    </div>
                  </StaggerContainer>
                </article>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div >
    </section >
  );
};

export default Skill;

