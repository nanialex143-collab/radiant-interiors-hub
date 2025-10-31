import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectGallery from "@/components/ProjectGallery";
import DesignStyles from "@/components/DesignStyles";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProjectGallery />
      <DesignStyles />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
