
"use client";

import Image from "next/image";
import { useState } from "react";
import { StaggerItem } from "../Motion";

type BlogCardProps = {
    image: string;
    title: string;
    body: string;
    dateCreated: Date;
};

export default function BlogCard({
    image,
    title,
    body,
    dateCreated,
}: BlogCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <StaggerItem>
                <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                    <div className="relative h-52 w-full">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>

                    <div className="p-5">
                        <p className="mb-2 text-sm text-gray-500">
                            {dateCreated.toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                        </p>

                        <h2 className="mb-3 text-xl font-semibold text-gray-900">
                            {title}
                        </h2>

                        <p className="line-clamp-3 text-gray-600">
                            {body}
                        </p>

                        <button
                            type="button"
                            onClick={() => setIsOpen(true)}
                            className="mt-4 font-medium text-black underline underline-offset-4 hover:text-gray-600"
                        >
                            Read More
                        </button>
                    </div>
                </article>
            </StaggerItem>

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <section
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="blog-modal-title"
                        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            aria-label="Close article"
                            onClick={() => setIsOpen(false)}
                            className="absolute right-4 top-4 text-2xl text-gray-600 hover:text-black"
                        >
                            &times;
                        </button>

                        <div className="relative mb-5 mt-8 h-64 w-full">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="rounded-lg object-cover"
                                sizes="(max-width: 768px) 100vw, 672px"
                            />
                        </div>

                        <p className="mb-2 text-sm text-gray-500">
                            {dateCreated.toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                        </p>

                        <h2
                            id="blog-modal-title"
                            className="mb-4 text-2xl font-bold text-gray-900"
                        >
                            {title}
                        </h2>

                        <p className="whitespace-pre-wrap leading-7 text-gray-700">
                            {body}
                        </p>
                    </section>
                </div>
            )}
        </>
    );
}
