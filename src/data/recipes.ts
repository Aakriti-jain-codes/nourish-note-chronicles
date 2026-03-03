export interface RecipeNutrition {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
  fiber: string;
  sugar: string;
  sodium: string;
}

export interface Recipe {
  id: string;
  slug: string;
  name: string;
  description: string;
  prepTime: string;
  difficulty: "Easy" | "Medium" | "Hard";
  calories: number;
  servings: number;
  imageIdx: number;
  ingredients: string[];
  steps: string[];
  nutrition: RecipeNutrition;
}

export const recipes: Recipe[] = [
  {
    id: "r1",
    slug: "quinoa-power-bowl",
    name: "Quinoa Power Bowl",
    description:
      "A vibrant, nutrient-packed bowl loaded with quinoa, roasted sweet potato, chickpeas, avocado, and a creamy tahini dressing.",
    prepTime: "30 min",
    difficulty: "Easy",
    calories: 420,
    servings: 2,
    imageIdx: 0,
    ingredients: [
      "1 cup quinoa, rinsed",
      "1 medium sweet potato, cubed",
      "1 can chickpeas, drained and rinsed",
      "1 ripe avocado, sliced",
      "2 cups baby spinach",
      "1/4 cup red cabbage, shredded",
      "2 tbsp tahini",
      "1 tbsp lemon juice",
      "1 tbsp olive oil",
      "Salt, pepper, and cumin to taste",
    ],
    steps: [
      "Cook quinoa according to package directions and set aside to cool slightly.",
      "Preheat oven to 400°F. Toss sweet potato cubes and chickpeas with olive oil, cumin, salt, and pepper. Roast for 25 minutes until golden.",
      "Whisk together tahini, lemon juice, 2 tablespoons water, and a pinch of salt to make the dressing.",
      "Divide quinoa between bowls. Top with roasted sweet potato, chickpeas, avocado, spinach, and red cabbage.",
      "Drizzle with tahini dressing and serve immediately.",
    ],
    nutrition: {
      calories: 420,
      protein: "18g",
      carbs: "52g",
      fat: "16g",
      fiber: "12g",
      sugar: "6g",
      sodium: "380mg",
    },
  },
  {
    id: "r2",
    slug: "green-detox-smoothie",
    name: "Green Detox Smoothie",
    description:
      "A refreshing blend of leafy greens, tropical fruits, and chia seeds that's loaded with vitamins and antioxidants.",
    prepTime: "5 min",
    difficulty: "Easy",
    calories: 180,
    servings: 1,
    imageIdx: 2,
    ingredients: [
      "1 cup fresh spinach",
      "1/2 frozen banana",
      "1/2 cup frozen mango chunks",
      "1 tbsp chia seeds",
      "1 cup unsweetened almond milk",
      "1/2 tsp fresh ginger, grated",
      "Juice of 1/2 lime",
    ],
    steps: [
      "Add almond milk to blender first, followed by spinach.",
      "Blend until spinach is fully broken down.",
      "Add banana, mango, chia seeds, ginger, and lime juice.",
      "Blend on high for 60 seconds until completely smooth.",
      "Pour into a glass and enjoy immediately for maximum nutrient retention.",
    ],
    nutrition: {
      calories: 180,
      protein: "5g",
      carbs: "32g",
      fat: "5g",
      fiber: "8g",
      sugar: "18g",
      sodium: "170mg",
    },
  },
  {
    id: "r3",
    slug: "baked-salmon-roasted-veggies",
    name: "Baked Salmon with Roasted Veggies",
    description:
      "Omega-3 rich salmon paired with colorful roasted vegetables for a balanced, satisfying dinner that's ready in 35 minutes.",
    prepTime: "35 min",
    difficulty: "Medium",
    calories: 550,
    servings: 2,
    imageIdx: 3,
    ingredients: [
      "2 salmon fillets (6 oz each)",
      "1 cup cherry tomatoes",
      "1 bunch asparagus, trimmed",
      "1 yellow bell pepper, sliced",
      "2 tbsp olive oil",
      "2 cloves garlic, minced",
      "1 lemon, sliced",
      "Fresh dill for garnish",
      "Salt and black pepper to taste",
    ],
    steps: [
      "Preheat oven to 425°F. Line a sheet pan with parchment paper.",
      "Arrange vegetables on the pan. Drizzle with 1 tablespoon olive oil, salt, and pepper.",
      "Season salmon fillets with remaining olive oil, garlic, salt, and pepper. Place on the pan with vegetables.",
      "Top salmon with lemon slices. Roast for 15–18 minutes until salmon flakes easily with a fork.",
      "Garnish with fresh dill and serve with a squeeze of lemon.",
    ],
    nutrition: {
      calories: 550,
      protein: "42g",
      carbs: "18g",
      fat: "34g",
      fiber: "5g",
      sugar: "8g",
      sodium: "420mg",
    },
  },
  {
    id: "r4",
    slug: "overnight-oats-berries",
    name: "Overnight Oats with Berries",
    description:
      "Creamy, no-cook overnight oats topped with fresh berries and a drizzle of honey — the perfect grab-and-go breakfast.",
    prepTime: "10 min",
    difficulty: "Easy",
    calories: 310,
    servings: 1,
    imageIdx: 1,
    ingredients: [
      "1/2 cup rolled oats",
      "1/2 cup milk of choice",
      "1/4 cup Greek yogurt",
      "1 tbsp chia seeds",
      "1 tbsp honey or maple syrup",
      "1/2 cup mixed berries (blueberries, raspberries, strawberries)",
      "1 tbsp almond butter",
      "Pinch of cinnamon",
    ],
    steps: [
      "In a mason jar or container, combine oats, milk, yogurt, chia seeds, honey, and cinnamon.",
      "Stir well, making sure oats are fully submerged in liquid.",
      "Cover and refrigerate for at least 4 hours or overnight.",
      "In the morning, stir oats and top with fresh berries and a dollop of almond butter.",
      "Enjoy cold or microwave for 1–2 minutes if you prefer warm oats.",
    ],
    nutrition: {
      calories: 310,
      protein: "12g",
      carbs: "48g",
      fat: "9g",
      fiber: "8g",
      sugar: "16g",
      sodium: "95mg",
    },
  },
];
