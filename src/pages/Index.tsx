import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductGrid } from "@/components/ProductGrid";
import { SocialFeed } from "@/components/SocialFeed";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        
        <section className="container mx-auto px-4 py-8">
          <CategoryFilter />
        </section>
        
        <ProductGrid />
        
        <SocialFeed />
      </main>
    </div>
  );
};

export default Index;
