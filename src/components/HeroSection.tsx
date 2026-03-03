import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, hsl(148 45% 94%) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, hsl(150 33% 90%) 0%, transparent 40%),
              radial-gradient(ellipse at 60% 80%, hsl(45 60% 95%) 0%, transparent 40%),
              hsl(50 20% 97%)
            `,
          }}
        />
      </div>

      <div className="container text-center max-w-3xl mx-auto">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6 animate-fade-in">
          Nourish Your Body & Mind
        </p>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
          Eat Well.{" "}
          <span className="italic text-primary">Live Better.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Evidence-based nutrition insights, wholesome recipes, and practical tips for building
          lasting healthy habits.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="rounded-full px-8 text-sm font-semibold tracking-wide">
            <Link to="/recipes">Explore Recipes</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
