import Navbar from "./components/layouts/NavBar"
import Projects from "./components/sections/Projects";
import Hero from "./components/sections/Hero"
import About from "./components/sections/About";
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
}