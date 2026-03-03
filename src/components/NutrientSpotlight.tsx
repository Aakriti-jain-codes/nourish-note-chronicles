import { Zap, Wheat, Apple, Fish, Cherry } from "lucide-react";

const nutrients = [
  {
    icon: Zap,
    title: "Protein",
    desc: "Essential for muscle repair, immune function, and sustained energy throughout the day.",
  },
  {
    icon: Wheat,
    title: "Fiber",
    desc: "Feeds beneficial gut bacteria, supports digestion, and helps maintain healthy blood sugar.",
  },
  {
    icon: Apple,
    title: "Vitamins",
    desc: "Micronutrients that regulate hundreds of metabolic processes and protect cellular health.",
  },
  {
    icon: Fish,
    title: "Omega-3",
    desc: "Anti-inflammatory fatty acids crucial for brain health, heart function, and joint mobility.",
  },
  {
    icon: Cherry,
    title: "Antioxidants",
    desc: "Combat oxidative stress, slow aging, and reduce risk of chronic diseases.",
  },
];

const NutrientSpotlight = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container">
        <h2 className="font-display text-3xl font-bold text-foreground text-center mb-2">
          Nutrition Spotlight
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Key nutrients your body needs every day
        </p>
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {nutrients.map((n) => (
            <div
              key={n.title}
              className="min-w-[220px] snap-start bg-card rounded-lg p-6 shadow-sm flex-shrink-0"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4">
                <n.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-base font-bold text-card-foreground mb-1">
                {n.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {n.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NutrientSpotlight;
