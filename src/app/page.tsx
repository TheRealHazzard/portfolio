import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Plates from "@/components/Plates";
import Stage from "@/components/Stage";
import Backstage from "@/components/Backstage";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Plates />
        <Stage />
        <Backstage />
        <Contact />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
