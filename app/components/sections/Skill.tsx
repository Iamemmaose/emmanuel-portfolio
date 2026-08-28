import type { IconType } from "react-icons";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiVercel, SiRedux, SiJest, SiPostgresql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

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
    title: "Core Frontend",
    description: "Building responsive, type-safe, and interactive web applications.",
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
    title: "State & Architecture",
    description: "Managing global application state and backend integrations.",
    skills: [
      { name: "Redux / Zustand", icon: SiRedux },
      { name: "Node.js", icon: FaNodeJs },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    id: 3,
    title: "Tools & Testing",
    description: "Ensuring code quality, version control, and seamless deployment.",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Jest", icon: SiJest },
      { name: "Vercel", icon: SiVercel },
      { name: "VS Code", icon: VscVscode },
    ],
  },
];

const Skill = () => {
  return (
    <section id="skills" className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-6xl ">
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-blue-600">
            My Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Technologies I use to build modern web experiences
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            My current frontend development skills and the tools I use to build,
            manage, and deploy web applications.
          </p>
        </div>

        {/* Skill categories */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <article
              key={category.id}
              className="rounded-xl border border-gray-200 bg-white p-6"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {category.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {category.description}
              </p>

              {/* Individual skills */}
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
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
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;