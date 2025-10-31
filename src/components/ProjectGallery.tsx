import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    id: "serenity-loft",
    title: "Serenity Loft",
    category: "Scandinavian",
    image: project1,
    description: "A minimalist sanctuary blending natural materials with clean lines for peaceful urban living.",
  },
  {
    id: "modern-elegance",
    title: "Modern Elegance",
    category: "Contemporary",
    image: project2,
    description: "Sophisticated kitchen design featuring premium materials and timeless aesthetics.",
  },
  {
    id: "bohemian-retreat",
    title: "Bohemian Retreat",
    category: "Eclectic",
    image: project3,
    description: "Warm, inviting space celebrating natural textures and earthy tones.",
  },
  {
    id: "zen-sanctuary",
    title: "Zen Sanctuary",
    category: "Minimalist",
    image: project4,
    description: "Spa-inspired bathroom design creating a tranquil escape within the home.",
  },
];

const ProjectGallery = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of thoughtfully designed interiors that transform houses
            into homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
