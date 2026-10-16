import FadeInMotion, { StaggerContainer, StaggerItem } from "@/app/components/Motion"
import { services } from "@/app/data/services";

export default function Services() {
    return (
        <section id="services" className="bg-gray-50 py-20 text-gray-800">
            <div className="mx-auto max-w-6xl px-6">

                {/* Section Heading */}
                <FadeInMotion>
                    <div className="max-w-2xl capitalize">
                        <p className="text-sm font-semibold text-blue-600">
                            My Services
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Frontend Development Services I Offer
                        </h2>

                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            I offer a range of services to help you turn your ideas into practical digital solutions.
                        </p>
                    </div>
                </FadeInMotion>

                {/* service Cards */}

                <StaggerContainer>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <StaggerItem key={service.id}>
                                    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
                                        <div className="p-6 md:h-70">
                                            <div className="h-10 w-10 rounded-sm bg-blue-100 p-3   text-blue-600">
                                                {Icon && <Icon className="h-full w-full" aria-hidden="true" />}
                                            </div>
                                            <h3 className="mt-4 text-xl font-bold text-gray-900">
                                                {service.title}
                                            </h3>
                                            <p className="mt-2 text-gray-600">
                                                {service.description}
                                            </p>
                                        </div>
                                    </article>
                                </StaggerItem>
                            )
                        })}
                    </div>
                </StaggerContainer>
            </div>
        </section>
    )
}