import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";
import FeaturedPost from "@/components/FeaturedPost";
import ArticleCard from "@/components/ArticleCard";
import NutrientSpotlight from "@/components/NutrientSpotlight";
import NewsletterSignup from "@/components/NewsletterSignup";
import ScrollReveal from "@/components/ScrollReveal";
import { posts } from "@/data/posts";

const Index = () => {
  const featured = posts[0];
  const latest = posts.slice(1, 4);

  return (
    <Layout>
      <SEO />
      <HeroSection />
      <ScrollReveal>
        <FeaturedPost post={featured} />
      </ScrollReveal>
      <section className="container py-16">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-2">Latest Articles</h2>
          <p className="text-center text-muted-foreground mb-10">Fresh insights for a healthier you</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {latest.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 120}>
              <ArticleCard post={post} />
            </ScrollReveal>
          ))}
        </div>
      </section>
      <ScrollReveal>
        <NutrientSpotlight />
      </ScrollReveal>
      <ScrollReveal>
        <NewsletterSignup />
      </ScrollReveal>
    </Layout>
  );
};

export default Index;
