import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { ArrowDown, Download, MessageCircle } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const HeroSection = () => {
  const { t } = useTranslation();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-hero-gradient flex flex-col relative">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-poppins font-bold text-white">
            Louay ElGarhy
          </div>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="container mx-auto max-w-6xl text-center text-white">
          <div className="animate-fade-in">
            <p className="text-xl font-open-sans mb-4 opacity-90">{t('hero.greeting')}</p>
            <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6 leading-tight">
              {t('hero.name')}
            </h1>
            <h2 className="text-2xl md:text-3xl font-poppins font-semibold mb-8 text-primary-glow">
              {t('hero.title')}
            </h2>
            <p className="text-lg md:text-xl font-open-sans mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                onClick={scrollToProjects}
                className="bg-white text-secondary hover:bg-gray-100 font-open-sans font-semibold text-lg px-8 py-3 shadow-elegant"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('hero.viewWork')}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToContact}
                className="border-white bg-white/10 text-white hover:bg-white hover:text-secondary font-open-sans font-semibold text-lg px-8 py-3 backdrop-blur-sm"
              >
                <Download className="w-5 h-5 mr-2" />
                {t('hero.downloadResume')}
              </Button>
            </div>
          </div>
          
          <div className="animate-float">
            <ArrowDown 
              className="w-8 h-8 mx-auto text-white opacity-70 cursor-pointer hover:opacity-100 transition-opacity"
              onClick={scrollToProjects}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;