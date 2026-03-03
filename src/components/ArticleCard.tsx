import { Link } from "react-router-dom";
import { foodImages } from "@/data/images";
import type { Post } from "@/data/posts";

const ArticleCard = ({ post }: { post: Post }) => {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={foodImages[post.imageIdx]}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-wide bg-accent text-accent-foreground rounded-full mb-3">
          {post.category}
        </span>
        <h3 className="font-display text-lg font-bold text-card-foreground leading-snug group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center font-display font-bold text-[10px] text-secondary-foreground">
            {post.author.name.charAt(0)}
          </div>
          <span>{post.author.name}</span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime} min read</span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
