import { ArrowRight, Zap, Lock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroRobot from "@/assets/hero-robot.jpg";

const Hero = () => {
  return (
    <section id="features" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16">
      {/* Static Background Layer */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        <img 
          src={heroRobot} 
          alt="AI-Powered Blockchain" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-normal translate-y-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full glow-primary">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-mono text-muted-foreground">AI-Powered Blockchain Infrastructure</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
            The Future of{" "}
            <span className="text-secondary">Intelligent</span>
            <br />
            Blockchain
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            High-performance AI-powered blockchain with lightning-fast transaction finality 
            and exceptional throughput using next-gen Proof of Stake consensus.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="glass-card max-w-sm p-8 rounded-2xl glow-primary hover:scale-105 transition-transform">
              <div className="text-4xl font-bold gradient-text-accent font-mono">50,000+</div>
              <div className="text-sm text-muted-foreground mt-2 font-heading">Transactions Per Second</div>
            </div>
            <div className="glass-card max-w-sm p-8 rounded-2xl glow-primary hover:scale-105 transition-transform">
              <div className="text-4xl font-bold gradient-text-accent font-mono">&lt;400ms</div>
              <div className="text-sm text-muted-foreground mt-2 font-heading">Transaction Finality</div>
            </div>
            <div className="glass-card max-w-sm p-8 rounded-2xl glow-primary hover:scale-105 transition-transform">
              <div className="text-4xl font-bold gradient-text-accent font-mono">99.99%</div>
              <div className="text-sm text-muted-foreground mt-2 font-heading">Network Uptime</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-7 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg px-8 py-6 glow-primary group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="glass-card border-2 border-primary/50 hover:border-primary text-foreground font-heading text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
              <Lock className="w-4 h-4 text-accent" />
              <span className="text-sm">Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm">Lightning Fast</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
              <Globe className="w-4 h-4 text-accent" />
              <span className="text-sm">Global Network</span>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
