import { useTranslation } from 'react-i18next';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = t('testimonials.items', { returnObjects: true }) as Array<{
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar: string;
  }>;

  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
              {t('testimonials.title')}
            </h2>
            <p className="text-xl text-muted-foreground font-open-sans max-w-3xl mx-auto leading-relaxed">
              {t('testimonials.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl shadow-card p-8 border border-border hover:shadow-elegant transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2 rtl:-right-2 rtl:left-auto" />
                  <p className="text-foreground font-open-sans leading-relaxed italic pl-6 rtl:pr-6 rtl:pl-0">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-poppins font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground font-open-sans text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-card rounded-2xl shadow-card p-8 border border-border">
              <div className="flex items-center justify-center gap-8 flex-wrap">
                {/* <div className="text-center">
                  <div className="text-3xl font-poppins font-bold text-primary mb-1">98%</div>
                  <div className="text-muted-foreground font-open-sans text-sm">{t('testimonials.stats.satisfaction')}</div>
                </div> */}
                <div className="text-center">
                  <div className="text-3xl font-poppins font-bold text-primary mb-1">30+</div>
                  <div className="text-muted-foreground font-open-sans text-sm">{t('testimonials.stats.projects')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-poppins font-bold text-primary mb-1">20+</div>
                  <div className="text-muted-foreground font-open-sans text-sm">{t('testimonials.stats.clients')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-poppins font-bold text-primary mb-1">4.9</div>
                  <div className="text-muted-foreground font-open-sans text-sm">{t('testimonials.stats.rating')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;