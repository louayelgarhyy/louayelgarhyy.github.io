import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Smartphone, Code, Palette, Rocket, Settings, Users } from 'lucide-react';

const getServices = (t: any) => [
  {
    icon: Smartphone,
    title: t('services.items.mobile.title'),
    price: 9.99,
    label: `${t('services.items.mobile.title')} - $9.99`,
  },
  {
    icon: Code,
    title: t('services.items.web.title'),
    price: 29.99,
    label: `${t('services.items.web.title')} - $29.99`,
  },
  {
    icon: Palette,
    title: t('services.items.ui.title'),
    price: 19.99,
    label: `${t('services.items.ui.title')} - $19.99`,
  },
  {
    icon: Rocket,
    title: t('services.items.deployment.title'),
    price: 14.99,
    label: `${t('services.items.deployment.title')} - $14.99`,
  },
  {
    icon: Settings,
    title: t('services.items.maintenance.title'),
    price: 24.99,
    label: `${t('services.items.maintenance.title')} - $24.99`,
  },
  {
    icon: Users,
    title: t('services.items.consulting.title'),
    price: 39.99,
    label: `${t('services.items.consulting.title')} - $39.99`,
  },
];

const PricingSection = ({ onServiceClick }: { onServiceClick: (serviceLabel: string) => void }) => {
  const { t } = useTranslation();
  const services = getServices(t);

  return (
    <section className="py-20 bg-background" id="pricing">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('pricing.title') || 'Pricing & Packages'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('pricing.description') || 'Choose the perfect service for your needs. Transparent pricing, no hidden fees!'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="bg-card rounded-2xl shadow-card p-8 border border-border hover:shadow-elegant transition-all duration-300 group hover:-translate-y-2 cursor-pointer"
              onClick={() => onServiceClick(service.label)}
              tabIndex={0}
              role="button"
              aria-label={`Select ${service.title}`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-3xl font-bold text-accent mb-4">${service.price.toFixed(2)}</p>
              <p className="text-muted-foreground text-sm mb-2">{service.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;