export interface Author {
  name: string;
  role: string;
}

export interface NutritionInfo {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
  fiber: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
  pullQuote?: string;
  nutrition?: NutritionInfo;
  date: string;
  readTime: number;
  author: Author;
  imageIdx: number;
}

export const posts: Post[] = [
  {
    id: "1",
    slug: "10-foods-high-in-protein",
    title: "10 Foods That Are Surprisingly High in Protein",
    category: "Nutrition Facts",
    excerpt:
      "Discover unexpected protein-rich foods that can help you meet your daily intake goals without relying solely on meat.",
    content: [
      "When most people think of protein, they immediately picture chicken breasts, steak, or protein shakes. But the world of high-protein foods extends far beyond the usual suspects. From ancient grains to humble legumes, there are dozens of foods that pack a serious protein punch while delivering a wealth of other nutrients.",
      "Lentils, for example, contain about 18 grams of protein per cooked cup — nearly as much as three eggs. They're also loaded with iron, folate, and fiber, making them one of the most nutrient-dense foods on the planet. Similarly, hemp seeds deliver 10 grams of protein per three tablespoons, along with a perfect ratio of omega-3 to omega-6 fatty acids.",
      "Greek yogurt is another powerhouse, offering up to 20 grams of protein per serving. But the real surprise might be green peas — a single cup contains 8 grams of protein along with vitamins A, K, and C. Even nutritional yeast, a favorite among plant-based eaters, provides 8 grams per two tablespoons with a complete amino acid profile.",
      "The key takeaway? Diversifying your protein sources isn't just possible — it's beneficial. Each food brings its own unique combination of vitamins, minerals, and phytonutrients that contribute to overall health. By expanding your protein horizons, you're not just meeting a macro goal; you're building a more resilient, well-nourished body.",
    ],
    pullQuote:
      "Diversifying your protein sources isn't just possible — it's beneficial for building a more resilient, well-nourished body.",
    nutrition: { calories: 295, protein: "18g", carbs: "40g", fat: "6g", fiber: "15g" },
    date: "Feb 28, 2026",
    readTime: 6,
    author: { name: "Dr. Sarah Mitchell", role: "Nutritionist" },
    imageIdx: 0,
  },
  {
    id: "2",
    slug: "truth-about-carbohydrates",
    title: "The Truth About Carbohydrates: Friend or Foe?",
    category: "Healthy Habits",
    excerpt:
      "Carbs have been demonized for decades. Let's separate fact from fiction and understand what role they truly play in a healthy diet.",
    content: [
      "Carbohydrates have become one of the most controversial topics in modern nutrition. Low-carb diets dominate headlines, and many people have come to view carbs as the enemy. But the science tells a more nuanced story — one where the type, quality, and context of carbohydrate consumption matter far more than the quantity alone.",
      "Complex carbohydrates found in whole grains, vegetables, and legumes are fundamentally different from the refined sugars in processed foods. They provide sustained energy, feed beneficial gut bacteria, and come packaged with essential vitamins and minerals. A sweet potato, for instance, delivers complex carbs alongside beta-carotene, vitamin C, and potassium.",
      "The problem isn't carbohydrates themselves — it's the ultra-processed versions that have been stripped of fiber and nutrients. When you eat a whole grain, your body digests it slowly, maintaining stable blood sugar levels. When you eat refined white flour, the rapid spike and crash can lead to cravings, energy dips, and over time, metabolic issues.",
      "The bottom line: carbohydrates are not your enemy. Choosing whole, minimally processed sources of carbs is one of the simplest and most impactful dietary changes you can make. Your brain alone requires about 130 grams of glucose daily to function optimally.",
    ],
    pullQuote:
      "The problem isn't carbohydrates themselves — it's the ultra-processed versions stripped of fiber and nutrients.",
    date: "Feb 25, 2026",
    readTime: 7,
    author: { name: "Dr. Sarah Mitchell", role: "Nutritionist" },
    imageIdx: 1,
  },
  {
    id: "3",
    slug: "quick-20-minute-meals",
    title: "Quick 20-Minute Meals That Are Actually Nutritious",
    category: "Recipes",
    excerpt:
      "Short on time doesn't mean short on nutrition. These fast, delicious meals prove you can eat well even on your busiest days.",
    content: [
      "The number one barrier to healthy eating isn't knowledge — it's time. After a long day, the last thing most people want to do is spend an hour in the kitchen. That's exactly why fast, nutritious meals are so important. They bridge the gap between intention and action.",
      "A stir-fry with pre-cut vegetables, tofu, and a simple sauce of soy, ginger, and garlic can be ready in 12 minutes. Sheet pan salmon with cherry tomatoes and asparagus needs just 5 minutes of prep before going into the oven. Even a loaded grain bowl with canned beans, quick-pickled onions, and a tahini drizzle takes under 15 minutes.",
      "The secret is strategic pantry stocking. Keep canned beans, frozen vegetables, whole grains, and versatile sauces on hand. With these staples, you're never more than 20 minutes away from a balanced, satisfying meal. Pre-washed greens, rotisserie chicken, and pre-cooked grains are also excellent shortcuts that don't sacrifice nutrition.",
      "Remember: a quick meal made at home will almost always be more nutritious than takeout. Even simple combinations — eggs on toast with avocado, a quesadilla with black beans and peppers — deliver solid nutrition when made with whole ingredients.",
    ],
    pullQuote:
      "With strategic pantry stocking, you're never more than 20 minutes away from a balanced, satisfying meal.",
    date: "Feb 20, 2026",
    readTime: 5,
    author: { name: "Chef Marco Rivera", role: "Recipe Developer" },
    imageIdx: 2,
  },
  {
    id: "4",
    slug: "fiber-and-gut-health",
    title: "How Fiber Affects Your Gut Health",
    category: "Nutrition Facts",
    excerpt:
      "Fiber does far more than keep you regular. Discover how this underrated nutrient shapes your gut microbiome and overall health.",
    content: [
      "Dietary fiber is often reduced to a simple digestive aid, but its role in human health is far more profound. Fiber serves as the primary fuel for the trillions of beneficial bacteria living in your gut — collectively known as the gut microbiome. These microorganisms influence everything from immune function to mental health.",
      "There are two main types of fiber: soluble and insoluble. Soluble fiber, found in oats, beans, and apples, dissolves in water to form a gel-like substance that slows digestion and helps regulate blood sugar. Insoluble fiber, found in whole wheat, nuts, and vegetables, adds bulk to stool and promotes regular bowel movements.",
      "When gut bacteria ferment soluble fiber, they produce short-chain fatty acids (SCFAs) like butyrate, propionate, and acetate. These SCFAs have anti-inflammatory properties, strengthen the intestinal barrier, and may even play a role in preventing colorectal cancer. Research suggests that people who eat more fiber have more diverse gut microbiomes — a marker of good health.",
      "Most adults need 25-35 grams of fiber daily, yet the average intake is only about 15 grams. Increasing fiber gradually, along with adequate water intake, can transform your digestive health. Focus on a variety of sources: vegetables, fruits, legumes, whole grains, nuts, and seeds.",
    ],
    pullQuote:
      "Fiber serves as the primary fuel for trillions of beneficial bacteria shaping your immune function and mental health.",
    nutrition: { calories: 0, protein: "0g", carbs: "25g", fat: "0g", fiber: "25g" },
    date: "Feb 15, 2026",
    readTime: 8,
    author: { name: "Dr. Sarah Mitchell", role: "Nutritionist" },
    imageIdx: 3,
  },
  {
    id: "5",
    slug: "beginners-guide-meal-prepping",
    title: "A Beginner's Guide to Meal Prepping",
    category: "Healthy Habits",
    excerpt:
      "Meal prepping doesn't have to be overwhelming. Start with these simple strategies to save time, money, and eat healthier all week.",
    content: [
      "Meal prepping is one of the most effective strategies for maintaining a healthy diet consistently. By dedicating a few hours each week to preparing meals in advance, you eliminate the daily decision fatigue that often leads to unhealthy choices. It's not about cooking elaborate meals — it's about smart preparation.",
      "Start small: prep just your lunches for the workweek. Cook a big batch of grains (rice, quinoa, or farro), roast a sheet pan of mixed vegetables, and prepare a protein source like grilled chicken, baked tofu, or seasoned beans. Store them in separate containers and mix-and-match throughout the week for variety.",
      "Invest in quality glass containers with secure lids — they're microwave-safe, don't stain, and last for years. Label everything with the date. Most prepped meals stay fresh for 3-4 days in the refrigerator. For longer storage, many meals freeze beautifully and can be thawed overnight.",
      "The financial benefits are significant too. Studies show that meal preppers spend 20-30% less on food than those who eat out regularly. You'll also reduce food waste by planning exactly what you need. Start this Sunday, and by Wednesday you'll wonder why you didn't begin sooner.",
    ],
    pullQuote:
      "Meal prepping isn't about cooking elaborate meals — it's about smart preparation that eliminates daily decision fatigue.",
    date: "Feb 10, 2026",
    readTime: 6,
    author: { name: "Chef Marco Rivera", role: "Recipe Developer" },
    imageIdx: 0,
  },
  {
    id: "6",
    slug: "omega-3-fatty-acids-explained",
    title: "Omega-3 Fatty Acids: Why Your Brain Needs Them",
    category: "Nutrition Facts",
    excerpt:
      "Omega-3s are essential fats your body can't produce on its own. Learn why they matter and how to get enough from food.",
    content: [
      "Omega-3 fatty acids are among the most studied nutrients in modern science, and for good reason. These essential fats play a critical role in brain function, heart health, and inflammation regulation. Yet most people don't consume nearly enough of them.",
      "There are three main types of omega-3s: ALA (found in flaxseeds, chia seeds, and walnuts), EPA, and DHA (found primarily in fatty fish like salmon, mackerel, and sardines). While ALA is important, EPA and DHA are the forms your body uses most efficiently — particularly for brain and cardiovascular health.",
      "DHA alone makes up about 40% of the polyunsaturated fatty acids in your brain. Studies have linked adequate omega-3 intake to reduced risk of depression, improved cognitive function in aging adults, and lower levels of chronic inflammation throughout the body.",
      "If you don't eat fish regularly, consider algae-based omega-3 supplements — they provide DHA and EPA without the environmental concerns of fish oil. Aim for at least two servings of fatty fish per week, or 250-500 mg combined EPA and DHA daily from supplements.",
    ],
    pullQuote:
      "DHA makes up about 40% of the polyunsaturated fatty acids in your brain — omega-3s are truly brain food.",
    nutrition: { calories: 208, protein: "20g", carbs: "0g", fat: "13g", fiber: "0g" },
    date: "Feb 8, 2026",
    readTime: 7,
    author: { name: "Dr. Sarah Mitchell", role: "Nutritionist" },
    imageIdx: 3,
  },
  {
    id: "7",
    slug: "anti-inflammatory-foods",
    title: "Top 12 Anti-Inflammatory Foods to Add to Your Diet",
    category: "Nutrition Facts",
    excerpt:
      "Chronic inflammation is linked to nearly every major disease. These powerful foods can help keep it in check naturally.",
    content: [
      "Inflammation is the body's natural response to injury and infection — but when it becomes chronic, it can contribute to heart disease, diabetes, cancer, and autoimmune conditions. The good news? Your diet is one of the most powerful tools you have to fight chronic inflammation.",
      "Berries top the list. Blueberries, strawberries, and raspberries contain anthocyanins — powerful antioxidants that reduce inflammatory markers. Fatty fish like salmon and sardines provide EPA and DHA, which directly counter pro-inflammatory molecules. Turmeric, with its active compound curcumin, has been shown in hundreds of studies to rival some anti-inflammatory drugs.",
      "Leafy greens like spinach and kale are rich in vitamin K and polyphenols. Extra virgin olive oil contains oleocanthal, a compound with effects similar to ibuprofen. Even dark chocolate (70%+ cacao) provides flavonoids that reduce inflammation and improve vascular function.",
      "Building an anti-inflammatory plate is simple: fill half with colorful vegetables, add a quality protein source, include healthy fats from olive oil or avocado, and season generously with herbs and spices like ginger, rosemary, and cinnamon.",
    ],
    pullQuote:
      "Your diet is one of the most powerful tools you have to fight chronic inflammation naturally.",
    date: "Feb 5, 2026",
    readTime: 6,
    author: { name: "Dr. Sarah Mitchell", role: "Nutritionist" },
    imageIdx: 1,
  },
  {
    id: "8",
    slug: "healthy-breakfast-ideas",
    title: "7 Healthy Breakfast Ideas That Actually Keep You Full",
    category: "Recipes",
    excerpt:
      "Stop reaching for sugary cereals. These satisfying breakfast options combine protein, fiber, and healthy fats to power your morning.",
    content: [
      "Breakfast sets the nutritional tone for your entire day. Yet many common breakfast choices — sugary cereals, pastries, flavored yogurts — spike blood sugar and leave you crashing by mid-morning. The key to a breakfast that truly sustains you is balancing protein, fiber, and healthy fats.",
      "Overnight oats with chia seeds, almond butter, and berries check every box: complex carbs from oats, omega-3s from chia, protein and fat from almond butter, and antioxidants from berries. They take 5 minutes to prepare the night before and require zero morning effort.",
      "Savory options work beautifully too. A vegetable frittata made with eggs, spinach, tomatoes, and feta provides 25+ grams of protein. Avocado toast on whole grain bread with a poached egg and everything bagel seasoning is simple, satisfying, and packed with nutrients.",
      "For the smoothie lovers: blend frozen cauliflower (you won't taste it), banana, protein powder, spinach, and a tablespoon of flax seeds. It's creamy, sweet, and delivers vegetables before 8 AM. The fiber and protein combination keeps hunger at bay for 4-5 hours.",
    ],
    pullQuote:
      "The key to a breakfast that truly sustains you is balancing protein, fiber, and healthy fats in every meal.",
    date: "Feb 2, 2026",
    readTime: 5,
    author: { name: "Chef Marco Rivera", role: "Recipe Developer" },
    imageIdx: 2,
  },
  {
    id: "9",
    slug: "hydration-and-performance",
    title: "How Hydration Affects Your Energy and Focus",
    category: "Healthy Habits",
    excerpt:
      "Even mild dehydration can impair concentration and energy levels. Here's the science behind staying properly hydrated.",
    content: [
      "Water is arguably the most important nutrient, yet it's the one most often overlooked. Your body is roughly 60% water, and even a 1-2% decrease in hydration can measurably impair cognitive function, mood, and physical performance.",
      "Research from the University of Connecticut found that mild dehydration — the kind you might not even notice — caused headaches, fatigue, difficulty concentrating, and increased anxiety in both men and women. These effects occurred at hydration levels that were well within the range of everyday activity.",
      "The old rule of 'eight glasses a day' is a decent starting point but overly simplistic. Your needs depend on body weight, activity level, climate, and diet. A better guideline: drink half your body weight in ounces (e.g., 160 lbs = 80 oz/day), and adjust upward for exercise and heat.",
      "Water-rich foods count too. Cucumbers, watermelon, oranges, and soups all contribute to your daily fluid intake. Herbal teas are another excellent option. The best hydration indicator? Your urine — aim for pale straw color throughout the day.",
    ],
    pullQuote:
      "Even a 1-2% decrease in hydration can measurably impair your cognitive function, mood, and physical performance.",
    date: "Jan 28, 2026",
    readTime: 5,
    author: { name: "Dr. Sarah Mitchell", role: "Nutritionist" },
    imageIdx: 0,
  },
  {
    id: "10",
    slug: "superfoods-myth-or-reality",
    title: "Superfoods: Marketing Myth or Nutritional Reality?",
    category: "Nutrition Facts",
    excerpt:
      "The term 'superfood' is everywhere, but is there real science behind it? We break down the truth about these hyped-up ingredients.",
    content: [
      "Walk through any grocery store and you'll see the label everywhere: superfood. Acai bowls, spirulina powder, goji berries, matcha — these foods have been elevated to almost mythical status. But the term 'superfood' has no official scientific or regulatory definition. It's primarily a marketing tool.",
      "That said, the foods commonly labeled as superfoods do tend to be genuinely nutritious. Blueberries are rich in anthocyanins and vitamin C. Quinoa provides all nine essential amino acids. Kale delivers impressive amounts of vitamins K, A, and C per calorie. The issue isn't that these foods aren't healthy — it's that the label implies they're uniquely powerful.",
      "The danger of superfood thinking is that it can overshadow the bigger picture. No single food can compensate for an otherwise poor diet. A handful of goji berries won't undo a week of processed meals. Nutrition is about patterns, not magic bullets.",
      "The real 'superfoods' are the boring ones: beans, oats, broccoli, eggs, sweet potatoes, sardines. They're affordable, widely available, and backed by decades of research. Focus on building a diverse diet from whole foods rather than chasing the latest superfood trend.",
    ],
    pullQuote:
      "No single food can compensate for an otherwise poor diet — nutrition is about patterns, not magic bullets.",
    date: "Jan 22, 2026",
    readTime: 6,
    author: { name: "Dr. Sarah Mitchell", role: "Nutritionist" },
    imageIdx: 1,
  },
];

export const categories = ["All", "Recipes", "Nutrition Facts", "Healthy Habits"];
