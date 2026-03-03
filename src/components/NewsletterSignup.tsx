import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for subscribing! Check your inbox soon.");
      setEmail("");
    }
  };

  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold mb-3">
          Get weekly nutrition tips in your inbox
        </h2>
        <p className="text-primary-foreground/70 mb-8">
          Join 12,000+ readers who start their week with evidence-based wellness insights.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/30"
            aria-label="Email address"
          />
          <Button
            type="submit"
            variant="secondary"
            className="rounded-full px-6 font-semibold"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
