import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import CaseStudies from "@/components/CaseStudies";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl">
      <Sidebar />
      <main className="px-6 lg:ml-[42%] lg:max-w-140 lg:px-0 lg:pl-16">
        <About />
        <Experience />
        <CaseStudies />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
