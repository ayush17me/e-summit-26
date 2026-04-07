import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import BentoGrid from "@/components/sections/BentoGrid";
import Speakers from "@/components/sections/Speakers";
import Sponsors from "@/components/sections/Sponsors";
import Gallery from "@/components/sections/Gallery";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <BentoGrid />
      <Speakers />
      <Sponsors />
      <Gallery />
    </Layout>
  );
};

export default Index;
