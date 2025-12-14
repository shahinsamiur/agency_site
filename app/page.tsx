import Hero from "./components/hero";
import Projects from "./components/projects";
export default function page() {
  return (
    <div className="w-full relative">
      {/* <div className="container mx-auto"> */}
      <Hero />
      <Projects />
      {/* </div> */}
    </div>
  );
}
