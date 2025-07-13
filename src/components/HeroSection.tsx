import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const HeroSection = () => {
  const { t } = useTranslation();
  
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-lg animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 border border-primary/30 rounded-lg animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="absolute top-6 right-6">
          <LanguageSwitcher />
        </div>
        
        <div className="animate-fade-in">
          <p className="text-lg text-muted-foreground mb-4">{t('hero.greeting')}</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('hero.name')}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
            {t('hero.title')}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
          
          {/* Social links */}
          <div className="flex justify-center gap-4 mb-8">
            {/* <Button variant="outline" size="sm" className="gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button> */}
            <Button variant="outline" size="sm" className="gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Mail className="w-4 h-4" />
              Contact
            </Button>
          </div>

          <Button onClick={scrollToProjects} className="gap-2 shadow-glow-primary hover:shadow-glow-accent transition-all duration-300">
            {t('hero.viewWork')}
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;