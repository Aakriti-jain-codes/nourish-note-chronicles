import Layout from "@/components/Layout";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";

const Recipes = () => {
  return (
    <Layout>
      <section className="container py-12">
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">Recipes</h1>
        <p className="text-muted-foreground mb-10">Simple, nutritious meals you'll actually want to make</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Recipes;
