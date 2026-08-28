import Navbar from "@/app/components/layouts/NavBar"
import Hero from "@/app/components/sections/Hero"
import About from "@/app/components/sections/About";
import Skill from "@/app/components/sections/Skill";
import Projects from "@/app/components/sections/Projects";
import Experience from "@/app/components/sections/Experience"
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skill />
        <Projects />
        <Experience />
      </main>
    </>
  );
}