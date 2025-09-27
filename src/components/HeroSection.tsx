import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-lg text-white">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Trending Now</span>
          </div>
          
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Discover Unique Items from 
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Creative Sellers
            </span>
          </h1>
          
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Join our community marketplace where style meets social. Shop unique items, 
            follow your favorite sellers, and discover trending products.
          </p>
          
          <div className="flex gap-4">
            <Button variant="marketplace" size="lg" className="group">
              Start Shopping
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Become a Seller
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute bottom-32 right-32 w-3 h-3 bg-primary/60 rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-16 w-1 h-1 bg-primary rounded-full animate-pulse delay-500" />
    </section>
  );
};