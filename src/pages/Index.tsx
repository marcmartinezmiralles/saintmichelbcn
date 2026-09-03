import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Galeries } from "@/components/sections/Galeries";
import { Closet } from "@/components/sections/Closet";
import { Drop } from "@/components/sections/Drop";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Galeries />
      <Closet />
      <Drop />
      <Footer />
    </main>
  );
};

export default Index;
