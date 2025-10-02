
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users } from "lucide-react";

const testimonials = [
  {
    name: "Sandeep Nailwal, Co-founder @ Polygon",
    avatar: "/Sandeep-Nailwal.jpg",
    text: "This platform has been a game-changer for our content strategy and audience engagement.",
  },
  {
    name: "Ashish Singhal, CEO @ CoinSwitch",
    avatar: "/ashish.jpg",
    text: "A game-changer for our platform. The seamless integration and robust security have significantly enhanced our user experience.",
  },
  {
    name: "Joe Lau, CTO @ Alchemy",
    avatar: "/Joe-Lau_Alchemy.jpg",
    text: "The integration of AI with blockchain is seamless. It has opened up new possibilities for our research in decentralized AI, and the low latency is critical for our models.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-6">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm font-mono text-muted-foreground">Testimonials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-secondary">
            Loved by Innovators
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Hear from the teams building the future on our platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl glow-primary hover:scale-105 transition-transform flex flex-col">
              <p className="text-muted-foreground">"{testimonial.text}"</p>
              <div className="flex items-center gap-4 mt-6">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">{testimonial.name.split(",")[0]}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.name.split(",")[1]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
