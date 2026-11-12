
import { StaggerContainer } from "../Motion";
import BlogCard from "./blogcard";
import { blogPosts } from "../../data/blog";

export default function BlogList() {
    return (
        <StaggerContainer>
            <section className="mx-auto w-full max-w-6xl  py-12 sm:px-6 ">
                <div className="mb-8">
                    <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500">
                        My Journal
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Latest Articles
                    </h2>

                    <p className="mt-3 max-w-2xl text-gray-600">
                        Thoughts, lessons, and experiences from my journey
                        as a developer.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <BlogCard
                            key={post.id}
                            image={post.image}
                            title={post.title}
                            body={post.body}
                            dateCreated={post.dateCreated}
                        />
                    ))}
                </div>
            </section>
        </StaggerContainer>
    );
}
