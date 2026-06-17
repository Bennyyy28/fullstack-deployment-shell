import About from "@/components/about";
import Contact from "@/components/contact";
import FeaturedProjects from "@/components/featured-projects";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import TechStack from "@/components/tech-stack";
import Timeline from "@/components/timeline";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <TechStack />
      <About />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
}
