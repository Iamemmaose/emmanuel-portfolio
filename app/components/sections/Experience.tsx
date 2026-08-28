import React from "react";
import { experiences } from "@/app/data/experience";

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-white py-20 text-gray-800">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <div className="text-sm font-semibold text-blue-600">
            Career Journey
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Professional Experience
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            A timeline of my practical work delivering fintech solutions, client projects, and mentoring the next generation of frontend developers.
          </p>
        </div>

        {/* Experience List */}
        <div className="mt-12 flex flex-col gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition hover:shadow-md sm:p-8"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                  <p className="text-base font-semibold text-blue-600">{exp.company}</p>
                </div>
                <span className="self-start rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow-sm border border-gray-200 sm:self-auto">
                  {exp.period}
                </span>
              </div>

              {/* Responsibilities */}
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-white border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-700 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;