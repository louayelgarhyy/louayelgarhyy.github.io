import { useTranslation } from 'react-i18next';
import { Code, Smartphone, Zap, Users } from 'lucide-react';

const AboutSection = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: Code,
      title: t('about.highlights.experience.title'),
      description: t('about.highlights.experience.description')
    },
    {
      icon: Smartphone,
      title: t('about.highlights.mobile.title'),
      description: t('about.highlights.mobile.description')
    },
    {
      icon: Zap,
      title: t('about.highlights.performance.title'),
      description: t('about.highlights.performance.description')
    },
    {
      icon: Users,
      title: t('about.highlights.clients.title'),
      description: t('about.highlights.clients.description')
    }
  ];

  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
              {t('about.title')}
            </h2>
            <p className="text-xl text-muted-foreground font-open-sans max-w-3xl mx-auto leading-relaxed">
              {t('about.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                {t('about.story.title')}
              </h3>
              <p className="text-muted-foreground font-open-sans leading-relaxed">
                {t('about.story.paragraph1')}
              </p>
              <p className="text-muted-foreground font-open-sans leading-relaxed">
                {t('about.story.paragraph2')}
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-card rounded-2xl shadow-card p-8 border border-border">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-foreground">5+ Years Experience</h4>
                      <p className="text-muted-foreground font-open-sans text-sm">Flutter Development</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-foreground">20+ Apps Published</h4>
                      <p className="text-muted-foreground font-open-sans text-sm">iOS & Android</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-card p-6 border border-border hover:shadow-elegant transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <highlight.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h4 className="font-poppins font-semibold text-foreground mb-2">
                  {highlight.title}
                </h4>
                <p className="text-muted-foreground font-open-sans text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;