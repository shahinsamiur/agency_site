import Hero from "./components/hero";
import Projects from "./components/projects";
import Journey from "./components/journey";
import Achievements from "./components/achievements";
import ServiceText from "./components/serviceText";
import Service from "./components/service";
import Contact from "./components/contact";
export default function page() {
  return (
    <div className="w-full relative">
      <Hero />
      <Projects />
      <Journey />
      <Achievements />
      <Service />
      <ServiceText />
      <Contact />
    </div>
  );
}
