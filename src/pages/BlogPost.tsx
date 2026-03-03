import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ArticleCard from "@/components/ArticleCard";
import NutritionFactsBox from "@/components/NutritionFactsBox";
import ScrollReveal from "@/components/ScrollReveal";
import { posts } from "@/data/posts";
import { foodImages } from "@/data/images";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const related = posts.filter((p) => p.id !== post?.id).slice(0, 3);

  if (!post) {
    return (
      <Layout>
        <SEO title="Post Not Found" path={`/blog/${slug}`} />
        <div className="container py-24 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} />
      <div className="relative h-[50vh] min-h-[400px] flex items-end">
        <img src={foodImages[post.imageIdx]} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        <div className="relative container pb-12 text-primary-foreground">
          <span className="inline-block px-3 py-1 text-xs font-mono font-bold bg-accent text-accent-foreground rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-2xl">{post.title}</h1>
        </div>
      </div>

      <article className="container max-w-3xl py-12">
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-10 pb-8 border-b">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-display font-bold text-secondary-foreground">
            {post.author.name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-foreground">{post.author.name}</p>
            <p>{post.author.role}</p>
          </div>
          <span className="ml-auto">{post.date} · {post.readTime} min read</span>
        </div>

        <div className="prose-lg space-y-6">
          {post.content.map((p, i) => (
            <ScrollReveal key={i}>
              <p className="text-foreground/85 leading-relaxed">{p}</p>
              {i === 1 && post.pullQuote && (
                <blockquote className="my-8 pl-6 border-l-4 border-primary italic text-xl font-display text-foreground/70 leading-relaxed">
                  "{post.pullQuote}"
                </blockquote>
              )}
            </ScrollReveal>
          ))}
        </div>

        {post.nutrition && (
          <ScrollReveal>
            <div className="mt-12 pt-8 border-t">
              <h2 className="font-display text-2xl font-bold mb-6">Nutrition Breakdown</h2>
              <NutritionFactsBox data={post.nutrition} />
            </div>
          </ScrollReveal>
        )}
      </article>

      <section className="container py-12 border-t">
        <h2 className="font-display text-2xl font-bold mb-8">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 100}>
              <ArticleCard post={p} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
