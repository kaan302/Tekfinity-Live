import { useState } from "react";
import { ChevronDown, Search, Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/logo-white.png";

const AccentureNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "What we do", hasDropdown: true },
    { name: "What we think", hasDropdown: false },
    { name: "Who we are", hasDropdown: true },
    { name: "Careers", hasDropdown: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logoWhite} alt="TEKFINITY" className="h-6" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                className="flex items-center gap-1 text-sm text-foreground hover:text-primary transition-colors"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown size={16} />}
              </button>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <button className="text-foreground hover:text-primary transition-colors">
              <Search size={20} />
            </button>
            <button className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
              <Globe size={20} />
              <span className="hidden md:inline">Netherlands</span>
              <ChevronDown size={16} className="hidden md:inline" />
            </button>
            <button
              className="lg:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="block py-2 text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default AccentureNav;
