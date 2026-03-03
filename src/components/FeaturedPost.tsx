import { Link } from "react-router-dom";
import { foodImages } from "@/data/images";
import type { Post } from "@/data/posts";

const FeaturedPost = ({ post }: { post: Post }) => {
  return (
    <section className="container py-16">
      <Link
        to={`/blog/${post.slug}`}
        className="group block bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
            <img
              src={foodImages[post.imageIdx]}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="inline-block self-start px-3 py-1 text-xs font-mono font-bold tracking-wide bg-accent text-accent-foreground rounded-full mb-4">
              {post.category}
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-card-foreground leading-tight group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-display font-bold text-xs text-secondary-foreground">
                {post.author.name.charAt(0)}
              </div>
              <span>{post.author.name}</span>
              <span>·</span>
              <span>{post.date}</span>
            </div>
            <p className="mt-6 text-sm font-semibold text-primary group-hover:underline">
              Read More →
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default FeaturedPost;
