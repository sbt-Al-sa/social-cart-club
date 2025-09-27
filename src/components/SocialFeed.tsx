import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, UserPlus } from "lucide-react";
import { useState } from "react";

interface FeedItem {
  id: string;
  type: "like" | "follow" | "purchase";
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  product?: {
    name: string;
    image: string;
    price: number;
  };
  timestamp: string;
}

const feedData: FeedItem[] = [
  {
    id: "1",
    type: "like",
    user: {
      name: "Jessica Lee",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face"
    },
    action: "liked",
    product: {
      name: "Vintage Denim Jacket",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=200&fit=crop",
      price: 89
    },
    timestamp: "2 minutes ago"
  },
  {
    id: "2", 
    type: "follow",
    user: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
    },
    action: "started following Sarah Chen",
    timestamp: "5 minutes ago"
  },
  {
    id: "3",
    type: "purchase",
    user: {
      name: "Lisa Park",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
    },
    action: "purchased",
    product: {
      name: "Designer Black Handbag", 
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200&h=200&fit=crop",
      price: 245
    },
    timestamp: "10 minutes ago"
  }
];

export const SocialFeed = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Social Activity</h2>
          <div className="space-y-4">
            {feedData.map((item) => (
              <Card key={item.id} className="p-4 hover:shadow-hover transition-shadow">
                <div className="flex items-start gap-3">
                  <img 
                    src={item.user.avatar} 
                    alt={item.user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{item.user.name}</span>
                      <span className="text-muted-foreground">{item.action}</span>
                      {item.type === "follow" && (
                        <UserPlus className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    
                    {item.product && (
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg mb-3">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name}
                          className="w-12 h-12 rounded object-cover"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.product.name}</p>
                          <p className="text-primary font-semibold">${item.product.price}</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{item.timestamp}</span>
                      <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Heart className="h-4 w-4 mr-1" />
                          Like
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Comment
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Share2 className="h-4 w-4 mr-1" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Trending Sellers</h3>
          <div className="space-y-3">
            {[
              { name: "Sarah Chen", followers: "2.3k", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" },
              { name: "Alex Kim", followers: "1.8k", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
              { name: "Emma Rodriguez", followers: "3.1k", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" }
            ].map((seller) => (
              <Card key={seller.name} className="p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={seller.avatar} 
                      alt={seller.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{seller.name}</p>
                      <p className="text-sm text-muted-foreground">{seller.followers} followers</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Follow
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};