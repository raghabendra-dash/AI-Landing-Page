import { useEffect, useState } from "react";
import { Activity, TrendingUp, Blocks, Users } from "lucide-react";

const InteractiveDashboard = () => {
  const [tps, setTps] = useState(42387);
  const [finality, setFinality] = useState(387);
  const [blocks, setBlocks] = useState(8924651);
  const [validators, setValidators] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      setTps(prev => Math.floor(42000 + Math.random() * 8000));
      setFinality(prev => Math.floor(350 + Math.random() * 100));
      setBlocks(prev => prev + Math.floor(Math.random() * 3));
      setValidators(prev => Math.floor(1200 + Math.random() * 100));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: Activity,
      label: "Transactions Per Second",
      value: tps.toLocaleString(),
      suffix: "TPS",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      label: "Transaction Finality",
      value: finality,
      suffix: "ms",
      color: "text-primary"
    },
    {
      icon: Blocks,
      label: "Total Blocks",
      value: blocks.toLocaleString(),
      suffix: "",
      color: "text-secondary"
    },
    {
      icon: Users,
      label: "Active Validators",
      value: validators.toLocaleString(),
      suffix: "",
      color: "text-accent"
    }
  ];

  return (
    <section id="network" className="pb-20 relative overflow-hidden">
      

      <div className="container mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-6">
            <Activity className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">Live Network Stats</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Network <span className="text-secondary">Performance</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-time blockchain metrics showcasing the power and efficiency of our AI-optimized infrastructure.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl glow-primary hover:scale-105 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary group-hover:animate-glow-pulse`}>
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl font-bold font-mono ${stat.color}`}>
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="text-sm text-muted-foreground font-mono">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Activity Graph Placeholder */}
        <div className="mt-20 glass-card p-12 rounded-3xl glow-primary max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-heading font-bold">
              Network Activity
            </h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground">TPS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">Blocks</span>
              </div>
            </div>
          </div>
          
          {/* Simplified Activity Visualization */}
          <div className="relative h-64 flex items-end gap-2">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t opacity-70 hover:opacity-100 transition-opacity"
                style={{
                  height: `${30 + Math.random() * 70}%`,
                  animationDelay: `${i * 0.05}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDashboard;