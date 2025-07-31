import { useTranslation } from 'react-i18next';
import { Smartphone, Code, Palette, Rocket, Settings, Users } from 'lucide-react';
import { Button } from './ui/button';

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Smartphone,
      title: t('services.items.mobile.title'),
      description: t('services.items.mobile.description'),
      features: t('services.items.mobile.features', { returnObjects: true }) as string[]
    },
    {
      icon: Code,
      title: t('services.items.web.title'),
      description: t('services.items.web.description'),
      features: t('services.items.web.features', { returnObjects: true }) as string[]
    },
    {
      icon: Palette,
      title: t('services.items.ui.title'),
      description: t('services.items.ui.description'),
      features: t('services.items.ui.features', { returnObjects: true }) as string[]
    },
    {
      icon: Rocket,
      title: t('services.items.deployment.title'),
      description: t('services.items.deployment.description'),
      features: t('services.items.deployment.features', { returnObjects: true }) as string[]
    },
    {
      icon: Settings,
      title: t('services.items.maintenance.title'),
      description: t('services.items.maintenance.description'),
      features: t('services.items.maintenance.features', { returnObjects: true }) as string[]
    },
    {
      icon: Users,
      title: t('services.items.consulting.title'),
      description: t('services.items.consulting.description'),
      features: t('services.items.consulting.features', { returnObjects: true }) as string[]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
              {t('services.title')}
            </h2>
            <p className="text-xl text-muted-foreground font-open-sans max-w-3xl mx-auto leading-relaxed">
              {t('services.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl shadow-card p-8 border border-border hover:shadow-elegant transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-poppins font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground font-open-sans mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground font-open-sans">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-card rounded-2xl shadow-card p-8 border border-border">
              <h3 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                {t('services.cta.title')}
              </h3>
              <p className="text-muted-foreground font-open-sans mb-6 max-w-2xl mx-auto leading-relaxed">
                {t('services.cta.description')}
              </p>
              <Button size="lg" className="font-open-sans font-medium">
                {t('services.cta.button')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;