import Hero from "../sections/hero";
import Details from "../sections/details";
import Services from "../sections/services";
import Projects from "../sections/projects";
import FollowMe from "../sections/followMe";
import Contact from "../sections/contact";

export default function Home() {
  return (
    // Layout -> header footer
    <div>
      {/* Hero Section */}
      <Hero />
      {/* Skills And Exprience section */}
      <Details />
      {/* My Services */}
      {/* <Services /> */}
      {/* My Projects */}
      <Projects />
      {/* Testimonials */}

      {/* Follow Me */}
      <FollowMe />

      {/* Contact */}
      <Contact />
    </div>
  );
}
