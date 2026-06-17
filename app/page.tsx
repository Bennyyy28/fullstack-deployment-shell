import Contact from "@/components/contact";
import Deployment from "@/components/deployment";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <TechStack />
      <Contact />
      <Deployment />
      <Footer />
    </main>
  );
}
