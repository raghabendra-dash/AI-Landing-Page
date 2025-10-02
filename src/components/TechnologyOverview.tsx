import { Network, Shield, Cpu, Zap, Activity } from "lucide-react";

const TechnologyOverview = () => {
  const features = [
    {
      icon: Shield,
      title: "Proof of Stake Consensus",
      description: "Advanced PoS mechanism ensuring network security with minimal energy consumption. Validators stake tokens to participate in block production, making attacks economically unfeasible."
    },
    {
      icon: Zap,
      title: "High-Speed Transactions",
      description: "Process over 50,000 transactions per second with sub-400ms finality. Our optimized architecture ensures lightning-fast confirmation times for real-world applications."
    },
    {
      icon: Network,
      title: "AI-Optimized Architecture",
      description: "Intelligent network routing and transaction prioritization powered by machine learning algorithms. Automatically adapts to network conditions for optimal performance."
    },
    {
      icon: Cpu,
      title: "Smart Contract Platform",
      description: "Deploy sophisticated smart contracts with built-in AI capabilities. Execute complex logic with deterministic outcomes and automatic optimization."
    }
  ];

  return (
    <section id="technology" className="py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
        <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-6">
            <Cpu className="w-4 h-4 text-accent" />
            <span className="text-sm font-mono text-muted-foreground">Technology</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
            Built for <span className="text-secondary">Performance</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A revolutionary blockchain architecture that combines AI intelligence with 
            cutting-edge consensus mechanisms for unparalleled speed and security.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl glow-primary hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center transition-all">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specs */}
        <div className="mt-20 p-10 rounded-3xl max-w-4xl mx-auto">
          <h3 className="text-3xl font-heading font-bold mb-12 text-center">
            Technical Specifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="glass-card p-6 rounded-2xl glow-primary hover:scale-105 transition-transform text-center">
              <div className="text-3xl font-bold gradient-text-accent font-mono mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">TPS Capacity</div>
            </div>
            <div className="glass-card p-6 rounded-2xl glow-primary hover:scale-105 transition-transform text-center">
              <div className="text-3xl font-bold gradient-text-accent font-mono mb-2">&lt;400ms</div>
              <div className="text-sm text-muted-foreground">Finality Time</div>
            </div>
            <div className="glass-card p-6 rounded-2xl glow-primary hover:scale-105 transition-transform text-center">
              <div className="text-3xl font-bold gradient-text-accent font-mono mb-2">$0.0001</div>
              <div className="text-sm text-muted-foreground">Avg Fee</div>
            </div>
            <div className="glass-card p-6 rounded-2xl glow-primary hover:scale-105 transition-transform text-center">
              <div className="text-3xl font-bold gradient-text-accent font-mono mb-2">99.99%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyOverview;
