
import Navbar from "@/app/components/layouts/NavBar";
import Footer from "@/app/components/layouts/Footer";
import BlogList from "@/app/components/blog/bloglist"

export default function BlogPage() {
    return (
        <>
            <Navbar />

            <main className="mx-auto max-w-6xl px-6">
                <section className=" py-20 sm:px-6">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                        My Developer Journal
                    </p>

                    <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        Learning, Building & Sharing My Journey.
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                        A space where I document what I learn, the projects
                        I build, the challenges I overcome, and my journey
                        from frontend development into backend engineering.
                    </p>
                </section>

                <BlogList />
            </main>

            <Footer />
        </>
    );
}
