import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
import profilePicture from '@/assets/profile-picture.jpg';

const HeroSection = () => {
  const { t } = useTranslation();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profilePicture}
                alt="Louay ElGarhy"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground font-medium">
              {t('hero.greeting')}
            </p>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t('hero.name')}
            </h1>
            
            <h2 className="text-xl sm:text-2xl text-gradient font-semibold">
              {t('hero.title')}
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                onClick={scrollToProjects}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 hover-lift"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t('hero.viewWork')}
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToContact}
                className="border-border bg-background hover:bg-muted font-medium px-8 py-3 hover-lift"
              >
                {t('hero.downloadResume')}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8">
              <a
                href="https://github.com/louayelgharhy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover-lift"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/louay-el-gharhy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover-lift"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:louay.elgharhy@example.com"
                className="text-muted-foreground hover:text-primary transition-colors hover-lift"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown 
          className="w-6 h-6 text-muted-foreground cursor-pointer hover:text-primary transition-colors"
          onClick={scrollToProjects}
        />
      </div>
    </section>
  );
};

export default HeroSection;