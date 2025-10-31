import designerPortrait from "@/assets/designer-portrait.jpg";
import { Award, Users, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <img
              src={designerPortrait}
              alt="Sarah Chen, Lead Designer"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>

          <div className="animate-fade-in-up space-y-6">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
              Design Philosophy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Elara Studio, we believe that great design transcends trends. Our approach is rooted
              in creating spaces that are not only beautiful but deeply personal and functional.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 15 years of experience, we've helped hundreds of clients transform their
              homes into sanctuaries that reflect their unique stories and enhance their daily lives.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-accent" size={24} />
                </div>
                <div className="text-3xl font-serif font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-accent" size={24} />
                </div>
                <div className="text-3xl font-serif font-bold text-foreground">200+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="text-accent" size={24} />
                </div>
                <div className="text-3xl font-serif font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Design Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
