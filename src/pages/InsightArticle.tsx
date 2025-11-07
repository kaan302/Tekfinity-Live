import { useParams, useNavigate } from "react-router-dom";
import AccentureNav from "@/components/AccentureNav";
import AccentureFooter from "@/components/AccentureFooter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

const InsightArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const articles: Record<string, {
    title: string;
    category: string;
    date: string;
    readTime: string;
    content: string[];
  }> = {
    "ai-transformation": {
      title: t('articles.ai.title'),
      category: t('cards.report'),
      date: "15 november 2024",
      readTime: "8 min",
      content: t('articles.ai.content').split('|')
    },
    "cloud-migration": {
      title: t('articles.cloud.title'),
      category: t('cards.case'),
      date: "8 november 2024",
      readTime: "12 min",
      content: t('articles.cloud.content').split('|')
    },
    "digital-strategy": {
      title: t('articles.digital.title'),
      category: t('cards.report'),
      date: "1 november 2024",
      readTime: "10 min",
      content: t('articles.digital.content').split('|')
    },
    "future-software": {
      title: t('articles.future.title'),
      category: t('cards.case'),
      date: "25 oktober 2024",
      readTime: "15 min",
      content: t('articles.future.content').split('|')
    }
  };

  const article = id ? articles[id] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <AccentureNav />
        <div className="container-custom py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('articles.notFound')}</h1>
          <button
            onClick={() => navigate('/insights')}
            className="text-primary hover:underline"
          >
            {t('articles.backToInsights')}
          </button>
        </div>
        <AccentureFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <AccentureNav />
      
      <article className="pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          <button
            onClick={() => navigate('/insights')}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t('articles.back')}
          </button>

          <div className="mb-8">
            <span className="text-sm text-primary font-semibold">{article.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">{article.title}</h1>
            
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-foreground/80 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      <AccentureFooter />
    </div>
  );
};

export default InsightArticle;
