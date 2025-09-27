import { ProductCard } from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

// Mock data for demonstration
const products = [
  {
    id: "1",
    image: product1,
    title: "Vintage Denim Jacket - Premium Quality",
    price: 89,
    seller: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    likes: 24,
    isLiked: false
  },
  {
    id: "2", 
    image: product2,
    title: "Minimalist White Sneakers",
    price: 120,
    seller: {
      name: "Alex Kim",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    likes: 18,
    isLiked: true
  },
  {
    id: "3",
    image: product3,
    title: "Designer Black Handbag with Gold Hardware",
    price: 245,
    seller: {
      name: "Emma Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    likes: 31,
    isLiked: false
  },
  {
    id: "4",
    image: product4,
    title: "Classic Leather Watch - Limited Edition",
    price: 180,
    seller: {
      name: "Marcus Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    likes: 42,
    isLiked: true
  },
  {
    id: "5",
    image: product1,
    title: "Retro Denim Collection",
    price: 95,
    seller: {
      name: "Sophie Williams",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    },
    likes: 16,
    isLiked: false
  },
  {
    id: "6",
    image: product2,
    title: "Urban Street Sneakers",
    price: 140,
    seller: {
      name: "David Park",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    likes: 29,
    isLiked: false
  }
];

export const ProductGrid = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Trending Products</h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span>Live updates</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};