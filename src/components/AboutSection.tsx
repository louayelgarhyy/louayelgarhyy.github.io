import { useTranslation } from 'react-i18next';
import { Code, Smartphone, Zap, Users, Award, Globe } from 'lucide-react';

const AboutSection = () => {
  const { t } = useTranslation();

  const stats = [
    { number: '5+', label: 'Years Experience', icon: Award },
    { number: '30+', label: 'Apps Published', icon: Smartphone },
    { number: '100K+', label: 'Downloads', icon: Globe },
    // { number: '99%', label: 'Client Satisfaction', icon: Users },
  ];

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
    // {
    //   icon: Users,
    //   title: t('about.highlights.clients.title'),
    //   description: t('about.highlights.clients.description')
    // }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('about.description')}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-xl shadow-card border border-border hover-lift"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                {t('about.story.title')}
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t('about.story.paragraph1')}</p>
                <p>{t('about.story.paragraph2')}</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-card rounded-2xl shadow-card p-8 border border-border">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Flutter Development</h4>
                      <p className="text-muted-foreground text-sm">Cross-platform expertise</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Mobile Architecture</h4>
                      <p className="text-muted-foreground text-sm">Scalable app solutions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Global Reach</h4>
                      <p className="text-muted-foreground text-sm">Apps used worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-card p-6 border border-border hover-lift group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <highlight.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {highlight.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
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