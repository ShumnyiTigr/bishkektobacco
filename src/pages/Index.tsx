import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Roots } from "@/components/sections/Roots";
import { Leaf } from "@/components/sections/Leaf";
import { Preparation } from "@/components/sections/Preparation";
import { Portfolio } from "@/components/sections/Portfolio";
import { Formats } from "@/components/sections/Formats";
import { Standards } from "@/components/sections/Standards";
import { Founders } from "@/components/sections/Founders";
import { Opening } from "@/components/sections/Opening";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <Roots />
      <Leaf />
      <Preparation />
      <Portfolio />
      <Formats />
      <Standards />
      <Founders />
      <Opening />
      <Footer />
    </main>
  );
};

export default Index;
