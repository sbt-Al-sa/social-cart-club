import { useState } from "react";
import { Menu, X, Home, ShoppingBag, Heart, User, Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

export const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", icon: Home, href: "/" },
    { label: "Categories", icon: ShoppingBag, href: "/categories" },
    { label: "Wishlist", icon: Heart, href: "/wishlist" },
    { label: "Profile", icon: User, href: "/profile" },
  ];

  return (
    <>
      {/* Desktop Menu Bar */}
      <div className="hidden md:block border-b border-border">
        <div className="container mx-auto px-4">
          <Menubar className="h-12 border-0 bg-transparent">
            <MenubarMenu>
              <MenubarTrigger className="font-medium">Categories</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Electronics</MenubarItem>
                <MenubarItem>Fashion</MenubarItem>
                <MenubarItem>Home & Garden</MenubarItem>
                <MenubarItem>Sports</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>View All Categories</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            
            <MenubarMenu>
              <MenubarTrigger className="font-medium">Trending</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Popular Products</MenubarItem>
                <MenubarItem>Top Sellers</MenubarItem>
                <MenubarItem>New Arrivals</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Featured Brands</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            
            <MenubarMenu>
              <MenubarTrigger className="font-medium">Community</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Social Feed</MenubarItem>
                <MenubarItem>Reviews</MenubarItem>
                <MenubarItem>Influencers</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Join Community</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            
            <MenubarMenu>
              <MenubarTrigger className="font-medium">Deals</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Flash Sales</MenubarItem>
                <MenubarItem>Daily Deals</MenubarItem>
                <MenubarItem>Clearance</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Coupons</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>

      {/* Mobile Menu Bar */}
      <div className="md:hidden border-b border-border">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="flex flex-col space-y-4 mt-6">
                  <div className="pb-4 border-b border-border">
                    <h2 className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent">
                      SocialShop
                    </h2>
                  </div>
                  
                  {menuItems.map((item) => (
                    <Button
                      key={item.label}
                      variant="ghost"
                      className="justify-start gap-3 h-12"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </Button>
                  ))}
                  
                  <div className="pt-4 border-t border-border">
                    <h3 className="font-semibold mb-3">Categories</h3>
                    <div className="space-y-2">
                      {["Electronics", "Fashion", "Home & Garden", "Sports"].map((category) => (
                        <Button
                          key={category}
                          variant="ghost"
                          className="justify-start w-full"
                          onClick={() => setIsOpen(false)}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};