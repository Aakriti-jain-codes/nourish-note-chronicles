interface NutritionData {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
  fiber: string;
  sugar?: string;
  sodium?: string;
}

const NutritionFactsBox = ({ data, servings = 1 }: { data: NutritionData; servings?: number }) => {
  return (
    <div className="border-2 border-foreground rounded-lg p-5 max-w-xs font-mono text-sm">
      <h3 className="font-display text-2xl font-black border-b-[8px] border-foreground pb-1 mb-1">
        Nutrition Facts
      </h3>
      <p className="text-xs border-b border-foreground pb-2 mb-2">
        Servings: {servings}
      </p>
      <div className="border-b-[4px] border-foreground pb-1 mb-1">
        <div className="flex justify-between font-bold text-base">
          <span>Calories</span>
          <span>{data.calories}</span>
        </div>
      </div>
      <p className="text-right text-xs font-bold mb-1">% Daily Value*</p>
      <NutritionRow label="Total Fat" value={data.fat} bold />
      <NutritionRow label="Total Carbohydrate" value={data.carbs} bold />
      <NutritionRow label="Dietary Fiber" value={data.fiber} sub />
      {data.sugar && <NutritionRow label="Total Sugars" value={data.sugar} sub />}
      <NutritionRow label="Protein" value={data.protein} bold />
      {data.sodium && <NutritionRow label="Sodium" value={data.sodium} bold />}
      <p className="text-[10px] text-muted-foreground mt-3 leading-tight">
        * Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or
        lower depending on your calorie needs.
      </p>
    </div>
  );
};

const NutritionRow = ({
  label,
  value,
  bold,
  sub,
}: {
  label: string;
  value: string;
  bold?: boolean;
  sub?: boolean;
}) => (
  <div
    className={`flex justify-between border-b border-foreground/20 py-1 ${
      sub ? "pl-6 text-xs" : ""
    } ${bold ? "font-bold" : ""}`}
  >
    <span>{label}</span>
    <span>{value}</span>
  </div>
);

export default NutritionFactsBox;
