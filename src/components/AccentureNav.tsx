import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Search, Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoWhite from "@/assets/logo-white.png";
import { useLanguage } from "@/contexts/LanguageContext";
import SearchDialog from "./SearchDialog";

const AccentureNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { name: t('nav.startProject'), hasDropdown: false, path: '/start-project' },
    { name: t('nav.services'), hasDropdown: false, path: '/services' },
    { name: t('nav.insights'), hasDropdown: false, path: '/insights' },
    { name: t('nav.about'), hasDropdown: false, path: '/about' },
    { name: t('nav.careers'), hasDropdown: false, path: '/careers' },
    { name: t('nav.contact'), hasDropdown: false, path: '/contact' },
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
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-1 text-sm transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary font-semibold'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
                {item.hasDropdown && <ChevronDown size={16} />}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
                  <Globe size={20} />
                  <span className="hidden md:inline">{language === 'nl' ? 'NL' : 'EN'} | {t('nav.country')}</span>
                  <ChevronDown size={16} className="hidden md:inline" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background border-border">
                <DropdownMenuItem 
                  onClick={() => setLanguage('nl')}
                  className={`cursor-pointer ${language === 'nl' ? 'bg-accent' : ''}`}
                >
                  Nederlands (NL)
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage('en')}
                  className={`cursor-pointer ${language === 'en' ? 'bg-accent' : ''}`}
                >
                  English (EN)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary font-semibold'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </nav>
  );
};

export default AccentureNav;
