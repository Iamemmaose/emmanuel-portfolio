import Navbar from "./components/layouts/NavBar"
import Projects from "./components/sections/Projects";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Projects />
      </main>
    </>
  );
}