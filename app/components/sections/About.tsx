import Image from "next/image"

interface StatItem {
    id: number,
    label: string;
    value: string;
}

const stats: StatItem[] = [
    { id: 1, label: "Years Experience", value: "2+" },
    { id: 2, label: "Projects Completed", value: "10+" },
    { id: 3, label: "Technologies Used", value: "8+" },
];

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-50 text-gray-800">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Column: Image or Visual Placeholder */}
                <div className="flex justify-center">
                    <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:h-80 sm:w-80">
                        <Image
                            src="/images/emmanuel-ose.jpg"
                            alt="Emmanuel Ose"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Right Column: Bio Content */}
                <div className="flex flex-col gap-6">
                    <div className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full w-fit">
                        About Me
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                        Crafting scalable & modern web experiences
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        Hello! I’m Emmanuel Ose, a software developer passionate about building
                        clean, performant, and user-friendly applications. I focus on writing
                        maintainable code with React, Next.js, and TypeScript.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        When I'm not coding, I'm constantly learning new web technologies and
                        improving my craft to deliver the best user experiences possible.
                    </p>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-1 gap-6 border-t border-gray-200 pt-6 sm:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex flex-col">
                                <span className="text-2xl font-bold text-blue-600">{stat.value}</span>
                                <span className="text-xs text-gray-500 font-medium">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}