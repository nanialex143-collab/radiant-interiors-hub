import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jessica Martinez",
    location: "Manhattan, NY",
    text: "Elara Studio transformed our loft into a warm, sophisticated space that feels like us. Their attention to detail is unmatched.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    location: "Brooklyn, NY",
    text: "Working with Sarah was an absolute pleasure. She understood our vision and brought it to life beyond our expectations.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    location: "San Francisco, CA",
    text: "The team's creativity and professionalism made our home renovation seamless. Every corner feels thoughtfully designed.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
            Client Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what our clients say about their experience working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card p-8 rounded-lg shadow-md hover:shadow-xl transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-terracotta fill-terracotta" size={18} />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
