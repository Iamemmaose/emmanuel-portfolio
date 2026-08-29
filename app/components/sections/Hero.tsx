import Link from "next/link";

const Hero = () => {
    return (
        <section
            id="home"
            className="flex bg-white min-h-screen items-center px-6 py-20 "
        >
            <div className="mx-auto w-full max-w-6xl">
                <p className="mb-4 text-lg font-medium text-blue-600">
                    Hi, I'm Emmanuel Ose
                </p>

                <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl text-black">
                    Frontend Developer
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                    I help startups, founders, and growing businesses turn ideas and business challenges into practical digital solutions. I build responsive websites and modern web applications focused on real user needs and business goals.
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
                        className="rounded-lg text-black border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
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
        </section>
    );
};

export default Hero;