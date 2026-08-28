import { Experience } from "@/app/types/experience";

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Frontend Developer & Coding Instructor",
    company: "AJWORLDTECH",
    period: "july 2025 – Present",
    description: [
      "Engineered modern, responsive web applications using React.js, Next.js, TypeScript, and REST APIs.",
      "Designed reusable UI component architecture that increased development speed and cross-project consistency.",
      "Mentored 50+ aspiring software engineers in modern JavaScript frameworks, state management, and web design best practices.",
      "Gathered functional requirements directly from stakeholders and translated business needs into scalable technical solutions."
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "JavaScript", "REST APIs", "Tailwind CSS", "Git"]
  },
  {
    id: 2,
    role: "Frontend Developer Intern",
    company: "SPay Business Solutions",
    period: "April 2026 – Jun 2026",
    description: [
      "Developed responsive fintech dashboard modules using React.js and TypeScript, reducing component build times by ~30%.",
      "Integrated secure REST APIs, authentication flows, and form validation for seamless financial data communication.",
      "Optimized web performance and image loading times, reducing page render latency by 25% across mobile and desktop devices.",
      "Translated Figma designs into pixel-perfect, accessible UI components in close collaboration with UI/UX designers."
    ],
    technologies: ["React.js", "TypeScript", "JavaScript", "HTML5/CSS3", "REST APIs", "Git"]
  }
];