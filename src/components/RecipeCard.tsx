import { Link } from "react-router-dom";
import { Clock, Flame } from "lucide-react";
import { foodImages } from "@/data/images";
import type { Recipe } from "@/data/recipes";

const difficultyColors: Record<string, string> = {
  Easy: "bg-secondary text-secondary-foreground",
  Medium: "bg-accent text-accent-foreground",
  Hard: "bg-destructive/10 text-destructive",
};

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <Link
      to={`/recipes/${recipe.slug}`}
      className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={foodImages[recipe.imageIdx]}
          alt={recipe.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
          {recipe.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{recipe.description}</p>
        <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {recipe.prepTime}
          </span>
          <span className="flex items-center gap-1">
            <Flame className="w-3.5 h-3.5" />
            {recipe.calories} cal
          </span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${difficultyColors[recipe.difficulty]}`}>
            {recipe.difficulty}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
