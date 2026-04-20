import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Roots } from "@/components/sections/Roots";
import { Leaf } from "@/components/sections/Leaf";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <Roots />
      <Leaf />
      <Footer />
    </main>
  );
};

export default Index;
