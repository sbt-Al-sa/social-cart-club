import { Button } from "@/components/ui/button";
import { useState } from "react";

const categories = [
  "All",
  "Fashion",
  "Electronics", 
  "Home & Garden",
  "Beauty",
  "Sports",
  "Books",
  "Accessories"
];

export const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "secondary"}
          size="sm"
          onClick={() => setActiveCategory(category)}
          className="whitespace-nowrap flex-shrink-0"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};