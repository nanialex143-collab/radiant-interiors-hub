import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
            Crafting Timeless
            <br />
            <span className="text-accent">Interior Spaces</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
            Where elegance meets functionality. We design sophisticated interiors that reflect your
            unique story and elevate everyday living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="accent" size="xl" className="group">
              Explore Our Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={20} />
            </Button>
            <Button variant="outline" size="xl">
              Book Consultation
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
