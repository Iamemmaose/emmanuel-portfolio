
export type BlogPost = {
    id: number;
    image: string;
    title: string;
    body: string;
    dateCreated: Date;
};

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        image: "/images/blog/backend-journey.jpg",
        title: "Starting My Backend Development Journey",
        body: `I've spent the past year learning frontend development, building projects, and improving my understanding of how the web works. Now, I'm preparing to begin my backend development journey at TSAcademy. I want to understand what happens behind the scenes when users interact with a website. My goal is to learn how to build APIs, work with databases, handle authentication, and eventually build complete applications from frontend to backend. I'll be documenting the lessons, challenges, mistakes, and projects I encounter along the way.`,
        dateCreated: new Date("2026-10-30"),
    },
    {
        id: 2,
        image: "/images/blog/learning-process.jpg",
        title: "Why I Want to Document My Learning",
        body: `Learning to code isn't always straightforward. Sometimes a concept makes sense while studying but becomes difficult when it's time to apply it in a real project. I want this blog to help me explain what I'm learning in my own words, keep track of my progress, and share solutions to problems I encounter Hopefully, these notes will also help another developer who is going through a similar journey.`,
        dateCreated: new Date("2026-10-30"),
    },
];
