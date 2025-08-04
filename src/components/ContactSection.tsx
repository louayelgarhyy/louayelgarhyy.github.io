import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card-gradient border-border/50 shadow-elegant hover:shadow-glow-primary transition-all duration-300 animate-fade-in">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">{t('contact.email')}</h3>
                <p className="text-muted-foreground text-sm">louayelgarhy@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient border-border/50 shadow-elegant hover:shadow-glow-primary transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">{t('contact.phone')}</h3>
                <p className="text-muted-foreground text-sm">+20 1144373132</p>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient border-border/50 shadow-elegant hover:shadow-glow-primary transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">{t('contact.location')}</h3>
                <p className="text-muted-foreground text-sm">6th of October, Giza, Egypt</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card-gradient border-border/50 shadow-elegant animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">{t('contact.cta.title')}</h3>
                  <p className="text-muted-foreground mb-6">
                    {t('contact.cta.description')}
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      Flutter & Native Mobile Development
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent rounded-full"></span>
                      UI/UX Design & Prototyping
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      App Store Deployment & Maintenance
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button className="w-full gap-2 shadow-glow-primary hover:shadow-glow-accent transition-all duration-300">
                    <Mail className="w-4 h-4" />
                    {t('contact.cta.sendMessage')}
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Download className="w-4 h-4" />
                    {t('contact.cta.downloadResume')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;