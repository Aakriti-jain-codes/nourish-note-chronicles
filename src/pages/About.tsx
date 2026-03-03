import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { Heart, BookOpen, Leaf, Award, Users, TrendingUp } from "lucide-react";
import { foodImages } from "@/data/images";

const values = [
  { icon: Heart, title: "Evidence-Based", desc: "Every article is reviewed for scientific accuracy and backed by peer-reviewed research." },
  { icon: BookOpen, title: "Accessible", desc: "We break down complex nutrition science into practical, easy-to-follow advice for everyone." },
  { icon: Leaf, title: "Holistic", desc: "We believe nutrition is just one part of wellness — mindset, movement, and rest matter too." },
];

const stats = [
  { icon: Users, value: "120K+", label: "Monthly Readers" },
  { icon: Award, value: "200+", label: "Articles Published" },
  { icon: TrendingUp, value: "15+", label: "Years Experience" },
];

const timeline = [
  { year: "2010", title: "The Seed", desc: "Dr. Mitchell begins blogging about nutrition myths while completing her PhD at Cornell." },
  { year: "2015", title: "NourishNote Launches", desc: "What started as a side project becomes a full platform dedicated to evidence-based nutrition." },
  { year: "2019", title: "Growing Community", desc: "Reached 50,000 monthly readers and launched the first recipe collection." },
  { year: "2023", title: "Expanding Horizons", desc: "Added a team of registered dietitians and launched the newsletter." },
  { year: "2025", title: "Today", desc: "Over 120K monthly readers and 200+ articles helping people eat smarter every day." },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About NourishNote — Our Mission & Story"
        description="Learn about NourishNote's mission to make evidence-based nutrition accessible, inspiring, and delicious for everyone."
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
        <div className="container max-w-5xl text-center relative z-10">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest text-primary mb-4 uppercase">Our Story</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Making Nutrition<br />
              <span className="text-primary">Simple & Science-Backed</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're on a mission to cut through the noise of fad diets and conflicting advice — delivering trustworthy, actionable nutrition guidance for real life.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="container max-w-4xl -mt-10 relative z-20">
        <ScrollReveal>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card rounded-xl p-6 shadow-md text-center">
                <s.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-display text-2xl md:text-3xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Founder */}
      <section className="container max-w-4xl py-20">
        <ScrollReveal>
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 flex justify-center">
              <div className="w-56 h-56 rounded-2xl overflow-hidden shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src={foodImages[1]} alt="Dr. Sarah Mitchell" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-3">
              <p className="font-mono text-xs text-primary mb-2 tracking-widest uppercase">Meet the Founder</p>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Dr. Sarah Mitchell</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                With over 15 years in clinical nutrition and a PhD from Cornell University, Dr. Mitchell founded NourishNote to bridge the gap between academic research and everyday eating.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Her work has been featured in leading health publications, and she's passionate about empowering people to make informed food choices without the overwhelm of conflicting dietary advice.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Timeline */}
      <section className="bg-secondary/50 py-20">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-mono text-xs text-primary mb-2 tracking-widest uppercase">Our Journey</p>
              <h2 className="font-display text-3xl font-bold text-foreground">How We Got Here</h2>
            </div>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year}>
                <div className={`relative flex items-start mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-1.5" />
                  <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                    <span className="font-mono text-xs text-primary font-bold">{item.year}</span>
                    <h3 className="font-display text-lg font-bold text-foreground mt-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container max-w-4xl py-20">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-mono text-xs text-primary mb-2 tracking-widest uppercase">What We Stand For</p>
            <h2 className="font-display text-3xl font-bold text-foreground">Our Values</h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <ScrollReveal key={v.title}>
              <div className="bg-card rounded-xl p-8 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;
