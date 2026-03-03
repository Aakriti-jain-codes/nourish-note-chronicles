import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import FeaturedPost from "@/components/FeaturedPost";
import ArticleCard from "@/components/ArticleCard";
import NutrientSpotlight from "@/components/NutrientSpotlight";
import NewsletterSignup from "@/components/NewsletterSignup";
import { posts } from "@/data/posts";

const Index = () => {
  const featured = posts[0];
  const latest = posts.slice(1, 4);

  return (
    <Layout>
      <HeroSection />
      <FeaturedPost post={featured} />
      <section className="container py-16">
        <h2 className="font-display text-3xl font-bold text-foreground text-center mb-2">Latest Articles</h2>
        <p className="text-center text-muted-foreground mb-10">Fresh insights for a healthier you</p>
        <div className="grid md:grid-cols-3 gap-6">
          {latest.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      </section>
      <NutrientSpotlight />
      <NewsletterSignup />
    </Layout>
  );
};

export default Index;
