import { Header } from "@/components/Header";
import { MenuBar } from "@/components/MenuBar";
import { HeroSection } from "@/components/HeroSection";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductGrid } from "@/components/ProductGrid";
import { SocialFeed } from "@/components/SocialFeed";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MenuBar />
      
      <main>
        <HeroSection />
        
        <section className="container mx-auto px-4 py-8">
          <CategoryFilter />
        </section>
        
        <ProductGrid />
        
        <SocialFeed />
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
