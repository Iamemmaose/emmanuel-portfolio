import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/Projects";
import FadeInMotion from "@/app/components/Motion"

const Projects = () => {
    return (
        <section id="projects" className="bg-gray-50 py-20 text-gray-800">
            <div className="mx-auto max-w-6xl px-6">

                {/* Section Heading */}
                <FadeInMotion>
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold text-blue-600">
                            Featured Work
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Projects I’ve Built
                        </h2>

                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            A selection of projects where I’ve turned ideas and
                            requirements into responsive, functional, and user-focused
                            digital experiences.
                        </p>
                    </div>
                </FadeInMotion>

                {/* Project Cards */}
                    <div className="mt-12 grid gap-8 md:grid-cols-2">
                        {projects.map((project) => (
                                <article key={project.id} className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">

                                    {/* Project Image */}
                                    <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                                        <Image
                                            src={project.image}
                                            alt={`${project.title} project screenshot`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition duration-300 hover:scale-105"
                                        />
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {project.title}
                                        </h3>

                                        <p className="mt-3 leading-7 text-gray-600">
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {project.technologies.map((technology) => (
                                                <span
                                                    key={technology}
                                                    className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                                                >
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Project Link */}
                                        <div className="mt-6">
                                            {project.liveUrl && (
                                                <Link
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                                                >
                                                    View Live Project
                                                </Link>
                                            )}
                                        </div>
                                    </div>

                                </article>
                        ))}
                    </div>

                {/* GitHub */}
                <div className="mt-12 text-center">
                    <Link
                        href="https://github.com/Iamemmaose"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                    >
                        See More Projects on GitHub
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;

