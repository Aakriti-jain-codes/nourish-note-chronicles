import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import NutritionFactsBox from "@/components/NutritionFactsBox";
import { recipes } from "@/data/recipes";
import { foodImages } from "@/data/images";
import { Clock, Flame, Users } from "lucide-react";

const RecipeDetail = () => {
  const { slug } = useParams();
  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Recipe Not Found</h1>
          <Link to="/recipes" className="text-primary hover:underline">← Back to Recipes</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-12">
        <Link to="/recipes" className="text-sm text-primary hover:underline mb-6 inline-block">← All Recipes</Link>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-lg overflow-hidden aspect-[4/3]">
            <img src={foodImages[recipe.imageIdx]} alt={recipe.name} className="w-full h-full object-cover" />
          </div>

          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">{recipe.name}</h1>
            <p className="text-muted-foreground leading-relaxed mb-6">{recipe.description}</p>

            <div className="flex gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{recipe.prepTime}</span>
              <span className="flex items-center gap-1.5"><Flame className="w-4 h-4" />{recipe.calories} cal</span>
              <span className="flex items-center gap-1.5"><Users className="w-4 h-4" />{recipe.servings} servings</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-accent text-accent-foreground">{recipe.difficulty}</span>
            </div>

            <h2 className="font-display text-xl font-bold mb-4">Ingredients</h2>
            <ul className="space-y-2 mb-8">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/85">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {ing}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-12">
          <div className="lg:col-span-2">
            <h2 className="font-display text-xl font-bold mb-6">Instructions</h2>
            <ol className="space-y-6">
              {recipe.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-mono font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-foreground/85 leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold mb-6">Nutrition Info</h2>
            <NutritionFactsBox data={recipe.nutrition} servings={recipe.servings} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RecipeDetail;
