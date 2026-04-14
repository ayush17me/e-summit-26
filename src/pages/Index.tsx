import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import BentoGrid from "@/components/sections/BentoGrid";
import Speakers from "@/components/sections/Speakers";
import Sponsors from "@/components/sections/Sponsors";
import Gallery from "@/components/sections/Gallery";
import IntroSequence from "@/components/IntroSequence";

const Index = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("esummit_intro_played")) {
      setShowIntro(true);
    } else {
      setIsReady(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setIsReady(true);
  };

  return (
    <>
      {/* {showIntro && <IntroSequence onComplete={handleIntroComplete} />} */}

      {/* We always render Layout so it's ready behind the video fade out, 
          but we ensure smooth transition by relying on framer-motion in IntroSequence */}
      <motion.div
      >
        <Layout>
          <Hero />
          <About />
          <BentoGrid />
          <Speakers />
          <Sponsors />
          {/* <Gallery /> */}
        </Layout>
      </motion.div>
    </>
  );
};

export default Index;
