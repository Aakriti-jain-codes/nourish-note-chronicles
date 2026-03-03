import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ArticleCard from "@/components/ArticleCard";
import ScrollReveal from "@/components/ScrollReveal";
import { posts, categories } from "@/data/posts";
import { foodImages } from "@/data/images";
import { Leaf } from "lucide-react";

const Blog = () => {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "All";
  const searchQuery = searchParams.get("q") || "";
  const [active, setActive] = useState(initialCat);
  const [localQuery, setLocalQuery] = useState(searchQuery);

  const filtered = posts.filter((p) => {
    const matchesCat = active === "All" || p.category === active;
    const q = localQuery.toLowerCase();
    const matchesSearch = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <Layout>
      <SEO title="Blog" description="Explore nutrition tips, healthy recipes, and wellness articles." path="/blog" />
      <section className="container py-12">
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">Blog</h1>
        <p className="text-muted-foreground mb-8">Explore our latest articles on nutrition and wellness</p>

        <input
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          placeholder="Search articles by keyword..."
          className="w-full max-w-md px-4 py-2.5 mb-6 text-sm rounded-full bg-secondary text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/40"
        />

        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {filtered.length > 0 ? (
              filtered.map((post, i) => (
                <ScrollReveal key={post.id} delay={i * 80}>
                  <ArticleCard post={post} />
                </ScrollReveal>
              ))
            ) : (
              <p className="text-muted-foreground col-span-2 text-center py-12">No articles found.</p>
            )}
          </div>

          <aside className="space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold mb-4">Popular Posts</h3>
              <ul className="space-y-3">
                {posts.slice(0, 3).map((p) => (
                  <li key={p.id}>
                    <a href={`/blog/${p.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors leading-snug block">
                      {p.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="w-5 h-5 text-primary" />
                <h3 className="font-display text-lg font-bold">Nutrient of the Week</h3>
              </div>
              <p className="font-mono text-sm font-bold text-primary mb-1">Vitamin D</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Essential for calcium absorption and immune function. Get it from sunlight, fatty fish, and fortified foods.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-3 overflow-hidden">
                <img src={foodImages[1]} alt="Author" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display font-bold">Dr. Sarah Mitchell</h3>
              <p className="text-xs text-muted-foreground mt-1">Certified Nutritionist & Wellness Writer</p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
