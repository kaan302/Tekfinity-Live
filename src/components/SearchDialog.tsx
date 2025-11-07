import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface SearchResult {
  title: string;
  description: string;
  path: string;
  category: string;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const { t } = useLanguage();
  const navigate = useNavigate();

  const searchableContent: SearchResult[] = [
    {
      title: t('services.hero.title'),
      description: t('services.hero.subtitle'),
      path: '/services',
      category: t('nav.services'),
    },
    {
      title: t('servicesShowcase.mobile'),
      description: t('servicesShowcase.mobileDesc'),
      path: '/services',
      category: t('nav.services'),
    },
    {
      title: t('servicesShowcase.web'),
      description: t('servicesShowcase.webDesc'),
      path: '/services',
      category: t('nav.services'),
    },
    {
      title: t('servicesShowcase.cloud'),
      description: t('servicesShowcase.cloudDesc'),
      path: '/services',
      category: t('nav.services'),
    },
    {
      title: t('servicesShowcase.ai'),
      description: t('servicesShowcase.aiDesc'),
      path: '/services',
      category: t('nav.services'),
    },
    {
      title: t('insights.hero.title'),
      description: t('insights.hero.subtitle'),
      path: '/insights',
      category: t('nav.insights'),
    },
    {
      title: t('cards.card1.title'),
      description: t('cards.card1.desc'),
      path: '/insights',
      category: t('nav.insights'),
    },
    {
      title: t('cards.card2.title'),
      description: t('cards.card2.desc'),
      path: '/insights',
      category: t('nav.insights'),
    },
    {
      title: t('about.hero.title'),
      description: t('about.hero.subtitle'),
      path: '/about',
      category: t('nav.about'),
    },
    {
      title: t('about.values.mission.title'),
      description: t('about.values.mission.desc'),
      path: '/about',
      category: t('nav.about'),
    },
    {
      title: t('careers.hero.title'),
      description: t('careers.hero.subtitle'),
      path: '/careers',
      category: t('nav.careers'),
    },
    {
      title: t('careers.job1.title'),
      description: t('careers.job1.department'),
      path: '/careers',
      category: t('nav.careers'),
    },
  ];

  const results = useMemo(() => {
    if (!query.trim()) return [];
    
    const lowerQuery = query.toLowerCase();
    return searchableContent.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery)
    );
  }, [query, searchableContent]);

  const handleResultClick = (path: string) => {
    navigate(path);
    onOpenChange(false);
    setQuery("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl bg-background border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            {t('search.title')}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder={t('search.placeholder')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 pr-10 bg-card border-border"
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="max-h-96 overflow-y-auto space-y-2">
            {query.trim() === "" ? (
              <p className="text-center text-muted-foreground py-8">
                {t('search.empty')}
              </p>
            ) : results.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                {t('search.noResults')}
              </p>
            ) : (
              results.map((result, index) => (
                <button
                  key={index}
                  onClick={() => handleResultClick(result.path)}
                  className="w-full text-left p-4 rounded-lg bg-card hover:bg-accent/50 border border-border transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-sm text-primary font-semibold mb-1">
                        {result.category}
                      </div>
                      <h3 className="font-semibold mb-1">{result.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {result.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
