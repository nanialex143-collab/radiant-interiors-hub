import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import project1 from "@/assets/project-1.jpg";

const ProjectDetail = () => {
  const { id } = useParams();

  // In a real app, this would fetch project data based on id
  const project = {
    title: "Serenity Loft",
    category: "Scandinavian",
    location: "Brooklyn, New York",
    year: "2024",
    area: "1,200 sq ft",
    description:
      "A minimalist sanctuary in the heart of Brooklyn, designed for a young professional seeking tranquility in urban living. The space celebrates natural light, clean lines, and carefully curated materials that create a sense of calm and clarity.",
    challenge:
      "The client wanted to maximize the small footprint while maintaining an airy, spacious feel. The existing layout felt cramped and disconnected from natural light sources.",
    solution:
      "We opened up the floor plan, created strategic sightlines, and used a neutral palette with natural wood accents to enhance the sense of space. Custom built-ins maximize storage without sacrificing the minimalist aesthetic.",
    materials: [
      "White oak flooring",
      "Natural linen textiles",
      "Marble countertops",
      "Custom millwork in walnut",
      "Handcrafted ceramics",
    ],
    images: [project1, project1, project1],
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2" size={20} />
              Back to Projects
            </Button>
          </Link>

          <div className="animate-fade-in">
            <div className="mb-8">
              <span className="text-sm uppercase tracking-wider text-muted-foreground">
                {project.category}
              </span>
              <h1 className="text-5xl font-serif font-bold text-foreground mt-2 mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-muted-foreground">
                <div>
                  <span className="font-semibold text-foreground">Location:</span> {project.location}
                </div>
                <div>
                  <span className="font-semibold text-foreground">Year:</span> {project.year}
                </div>
                <div>
                  <span className="font-semibold text-foreground">Area:</span> {project.area}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-[600px] object-cover rounded-lg shadow-xl"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
                    Project Overview
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">
                    The Challenge
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">
                    Our Solution
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <div>
                <div className="bg-secondary/50 p-8 rounded-lg sticky top-28">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                    Materials & Finishes
                  </h3>
                  <ul className="space-y-2">
                    {project.materials.map((material) => (
                      <li
                        key={material}
                        className="text-muted-foreground flex items-start before:content-['•'] before:mr-3 before:text-accent"
                      >
                        {material}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {project.images.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} detail ${index + 1}`}
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              ))}
            </div>

            <div className="text-center py-16 bg-secondary/30 rounded-lg">
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
                Ready to Transform Your Space?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's create something beautiful together. Schedule a consultation to discuss your
                project.
              </p>
              <Button variant="accent" size="lg">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
