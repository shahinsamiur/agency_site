import Hero from "./components/hero";
import Projects from "./components/projects";
import Journey from "./components/journey";
import Achievements from "./components/achievements";
export default function page() {
  return (
    <div className="w-full relative">
      {/* <div className="container mx-auto"> */}
      <Hero />
      <Projects />
      <Journey />
      <Achievements />
      {/* </div> */}
    </div>
  );
}
