import { ServiceProps } from "@/app/types/service";
import { FaCode, FaCogs, FaPaintBrush, FaPlug } from "react-icons/fa";

export const services: ServiceProps[] = [
    { id: 1, icon: FaCode, title: "Web Application Development", description: "Modern, responsive and accessible web apps app using React, Next.js and TypeScript." },
    { id: 2, icon: FaPaintBrush, title: "UI/UX Implementation", description: "Turn Figma designs into pixel perfect user-friendly interfaces with Tailwind Css and modern tools." },
    { id: 3, icon: FaPlug, title: "API Integration", description: "Connect and manage REST APIs for dynamic and data-driven applications." },
    { id: 4, icon: FaCogs, title: "Business Process Automation", description: "Build simple tools and web apps to automate repititive business process and save time." },
]