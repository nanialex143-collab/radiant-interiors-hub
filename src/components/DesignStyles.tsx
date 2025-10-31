import { Palmtree, Home, Sparkles, Grid3x3 } from "lucide-react";

const styles = [
  {
    icon: Grid3x3,
    title: "Modern",
    description: "Clean lines, neutral palettes, and functional beauty define contemporary living.",
  },
  {
    icon: Home,
    title: "Scandinavian",
    description: "Light, airy spaces with natural materials creating cozy, minimalist havens.",
  },
  {
    icon: Palmtree,
    title: "Bohemian",
    description: "Eclectic mix of textures, patterns, and global influences for free-spirited souls.",
  },
  {
    icon: Sparkles,
    title: "Minimalist",
    description: "Less is more – sophisticated simplicity emphasizing space and intentionality.",
  },
];

const DesignStyles = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
            Design Styles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From modern minimalism to eclectic bohemian, we craft spaces that reflect your personal aesthetic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {styles.map((style, index) => {
            const Icon = style.icon;
            return (
              <div
                key={style.title}
                className="bg-card p-8 rounded-lg hover:shadow-lg transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {style.title}
                </h3>
                <p className="text-muted-foreground">{style.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DesignStyles;
