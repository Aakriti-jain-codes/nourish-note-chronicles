import { Link } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-2xl font-bold">
              NourishNote 🌿
            </Link>
            <p className="mt-3 text-primary-foreground/70 text-sm max-w-sm leading-relaxed">
              Your trusted source for evidence-based nutrition insights, wholesome recipes, and
              healthy living tips. Eat well, live better.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 tracking-wide uppercase opacity-70">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/recipes" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Recipes</Link></li>
              <li><Link to="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Blog</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 tracking-wide uppercase opacity-70">
              Categories
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog?category=Nutrition+Facts" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Nutrition Facts</Link></li>
              <li><Link to="/blog?category=Healthy+Habits" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Healthy Habits</Link></li>
              <li><Link to="/recipes" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Recipes</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/60">
            © 2026 NourishNote. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Pinterest" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
