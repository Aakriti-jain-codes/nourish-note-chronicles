import Layout from "@/components/Layout";
import { Heart, BookOpen, Leaf } from "lucide-react";
import { foodImages } from "@/data/images";

const values = [
  { icon: Heart, title: "Evidence-Based", desc: "Every article is reviewed for scientific accuracy and backed by peer-reviewed research." },
  { icon: BookOpen, title: "Accessible", desc: "We break down complex nutrition science into practical, easy-to-follow advice for everyone." },
  { icon: Leaf, title: "Holistic", desc: "We believe nutrition is just one part of wellness — mindset, movement, and rest matter too." },
];

const About = () => {
  return (
    <Layout>
      <section className="container py-16 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">About NourishNote</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're on a mission to make evidence-based nutrition accessible, inspiring, and delicious for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start mb-20">
          <div className="md:col-span-1 flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
              <img src={foodImages[1]} alt="Dr. Sarah Mitchell" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="font-display text-2xl font-bold mb-3">Dr. Sarah Mitchell</h2>
            <p className="font-mono text-xs text-primary mb-4 tracking-wide">FOUNDER & LEAD NUTRITIONIST</p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              With over 15 years of experience in clinical nutrition and a PhD in Nutritional Sciences from Cornell University, Dr. Mitchell founded NourishNote to bridge the gap between academic research and everyday eating.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Her work has been featured in leading health publications, and she's passionate about empowering people to make informed food choices without the overwhelm of conflicting dietary advice.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-foreground mb-3">Why Nutrition Matters</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The food you eat is the foundation of your health, energy, and longevity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-card rounded-lg p-8 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;
