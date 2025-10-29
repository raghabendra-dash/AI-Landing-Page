import { ArrowRight, Code, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section id="developers" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary via-secondary to-accent opacity-20 rounded-full blur-3xl animate-spin-slow" />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header (outside main card) */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full animate-fade-in">
              <Rocket className="w-4 h-4 text-accent" />
              <span className="text-sm font-mono text-muted-foreground">
                Join the Revolution
              </span>
            </div>
          </div>

          {/* Main CTA Card */}
          <div className="glass-card p-12 md:p-16 rounded-3xl glow-primary text-center space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              Ready to Build on <span className="text-secondary">NexaBlock</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of developers building the future of decentralized
              applications with AI-powered blockchain technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading text-base px-8 py-5 glow-accent group"
              >
                <Code className="mr-2 w-5 h-5" />
                Start Building
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="glass-card border-2 border-primary/50 hover:border-primary text-foreground font-heading text-base px-8 py-5"
              >
                View API Docs
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 text-left">
            {/* Developer Card */}
            <div className="glass-card p-8 rounded-2xl glow-primary hover:scale-105 transition-transform group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary mb-6 group-hover:animate-glow-pulse">
                <Code className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="text-2xl font-heading font-bold mb-4">
                For Developers
              </h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive SDKs, detailed documentation and developer tools
                to help you build, test and deploy smart contracts with ease.
              </p>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Full-featured development toolkit</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>AI-assisted smart contract optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>24/7 developer support community</span>
                </li>
              </ul>
            </div>

            {/* Enterprise Card */}
            <div className="glass-card p-8 rounded-2xl glow-primary hover:scale-105 transition-transform group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center glow-primary mb-6 group-hover:animate-glow-pulse">
                <Rocket className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="text-2xl font-heading font-bold mb-4">
                For Enterprises
              </h3>
              <p className="text-muted-foreground mb-6">
                Enterprise-grade infrastructure with dedicated support, custom integrations and guaranteed SLAs for mission critical
                applications.
              </p>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Private blockchain deployment options</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Custom AI model integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Dedicated technical account manager</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
