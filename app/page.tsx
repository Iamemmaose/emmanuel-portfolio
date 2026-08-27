import Navbar from "./components/layouts/NavBar"
import Projects from "./components/sections/Projects";
import Hero from "./components/sections/Hero"
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
      </main>
    </>
  );
}