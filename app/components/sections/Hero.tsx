import Link from "next/link";
import TechStackOrbit from "@/app/components/stack";

const Hero = () => {
    return (
        <section
            id="home"
            className="flex min-h-screen items-center bg-white px-6 py-20"
        >
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:justify-between">
                <div className="w-full lg:flex-1">
                    <p className="mb-4 text-lg font-medium text-blue-600">
                        Hi, I'm Emmanuel Ose
                    </p>

                    <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-black md:text-7xl">
                        Frontend Developer
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                        I have practical experience in building web applications using React, Next.js, Typescript, and Tailwind CSS. I turn figma design and ideas into functional and responsive web applications that are accessible, user-friendly and visually appealing.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href="#projects"
                            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                        >
                            View My Work
                        </Link>

                        <Link
                            href="#contact"
                            className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-black transition hover:bg-gray-100"
                        >
                            Let's Connect
                        </Link>
                    </div>
                    <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-gray-500">
                        <span>React</span>
                        <span>Next.js</span>
                        <span>TypeScript</span>
                        <span>Tailwind CSS</span>
                    </div>
                </div>
                <div className="w-full max-w-[440px] shrink-0 lg:w-[40%]">
                    <TechStackOrbit />
                </div>
            </div>
        </section>
    );
};

export default Hero;