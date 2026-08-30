import Header from "~/components/Header";
import Hero from "~/components/Hero";
import Projects from "~/components/Projects";
import Services from "~/components/Services";
import About from "~/components/About";
import SocialProof from "~/components/SocialProof";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";
import CaseStudyModal from "~/components/CaseStudyModal";
import ToastContainer from "~/components/ToastContainer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Services />
        <About />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
      <CaseStudyModal />
      <ToastContainer />
    </>
  );
}
