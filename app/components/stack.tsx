
"use client";

import {
  FaReact,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    Icon: FaReact,
    color: "#61DAFB",
    position: "left-1/2 top-0 -translate-x-1/2",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    color: "#3178C6",
    position: "right-[8%] top-[12%]",
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
    color: "#38BDF8",
    position: "right-[8%] bottom-[12%]",
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    color: "#F7DF1E",
    position: "left-1/2 bottom-0 -translate-x-1/2",
  },
  {
    name: "GitHub",
    Icon: FaGithub,
    color: "#FFFFFF",
    position: "left-[8%] bottom-[12%]",
  },
  {
    name: "Next.js",
    Icon: SiNextdotjs,
    color: "#FFFFFF",
    position: "left-[18%] top-[4%]",
  },
];

export default function TechStackOrbit() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[440px] items-center justify-center">
      
      <div className="absolute inset-[8%] rounded-full border border-blue-500/30" />

      <div className="absolute inset-[22%] rounded-full border border-blue-400/15" />


      <div className="absolute inset-[8%] animate-[spin_28s_linear_infinite] motion-reduce:animate-none">
        {technologies.map(({ name, Icon, color, position }) => (
          <div
            key={name}
            className={`absolute ${position}`}
          >
            <div className="animate-[spin_28s_linear_infinite_reverse] motion-reduce:animate-none">
              <div className="group flex h-[60px] w-[60px] flex-col items-center justify-center rounded-2xl border border-blue-400/40 bg-slate-900/95 shadow-[0_0_22px_rgba(37,99,235,0.2)] transition duration-300 hover:scale-110 hover:border-blue-400 sm:h-[72px] sm:w-[72px]">
                <Icon
                  aria-hidden="true"
                  style={{ color }}
                  className="text-2xl sm:text-3xl"
                />

                <span className="mt-1 max-w-full px-1 text-center text-[8px] font-medium text-white sm:text-[10px]">
                  {name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 flex h-[44%] w-[44%] flex-col items-center justify-center rounded-full border border-blue-400/70 bg-slate-950 text-center shadow-[0_0_45px_rgba(37,99,235,0.3)]">
        <div className="absolute inset-2 rounded-full border border-blue-400/15" />

        <div className="relative px-2">
          <p className="text-sm font-bold text-white sm:text-lg">
            My <span className="text-sky-400">Tech</span> Stack
          </p>

          <p className="mt-2 text-[10px] leading-relaxed text-slate-400 sm:text-xs">
            Tools for building
            <br />
            modern web experiences
          </p>

          <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-blue-500" />
        </div>
      </div>
    </div>
  );
}
