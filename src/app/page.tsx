import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Route from "@/components/Route";
import Plates from "@/components/Plates";
import Stage from "@/components/Stage";
import More from "@/components/More";
import Palette from "@/components/Palette";
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
        <Route />
        <Plates />
        <Stage />
        <More />
        <Backstage />
        <Contact />
      </main>
      <Footer />
      <Motion />
      <Palette />
    </>
  );
}
