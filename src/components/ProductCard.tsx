import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  seller: {
    name: string;
    avatar: string;
  };
  likes: number;
  isLiked?: boolean;
}

export const ProductCard = ({ 
  id, 
  image, 
  title, 
  price, 
  seller, 
  likes: initialLikes, 
  isLiked: initialIsLiked = false 
}: ProductCardProps) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const { addItem } = useCart();

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(likes + (isLiked ? -1 : 1));
  };

  return (
    <Card className="group overflow-hidden bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            size="icon" 
            variant="secondary" 
            className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={(e) => {
              e.stopPropagation();
              handleLike();
            }}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-destructive text-destructive' : ''}`} />
          </Button>
          <Button 
            size="icon" 
            variant="secondary" 
            className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <img 
            src={seller.avatar} 
            alt={seller.name}
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-sm text-muted-foreground">{seller.name}</span>
        </div>
        
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{title}</h3>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">${price}</span>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Heart className="h-4 w-4" />
              {likes}
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              3
            </span>
          </div>
        </div>
        
        <Button 
          variant="marketplace" 
          className="w-full mt-3"
          onClick={(e) => {
            e.stopPropagation();
            addItem({ id, image, title, price, seller });
          }}
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};