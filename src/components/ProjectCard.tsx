import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const ProjectCard = ({ id, title, category, image, description }: ProjectCardProps) => {
  return (
    <Link
      to={`/project/${id}`}
      className="group relative overflow-hidden rounded-lg bg-card hover:shadow-xl transition-smooth"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-slow"
        />
      </div>
      <div className="p-6">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">{category}</span>
        <h3 className="text-2xl font-serif font-semibold mt-2 mb-3 text-foreground group-hover:text-accent transition-smooth">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center text-accent font-medium group-hover:gap-2 transition-smooth">
          View Project
          <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-smooth" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
