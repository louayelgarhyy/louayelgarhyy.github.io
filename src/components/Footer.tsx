import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/louayelgarhyy',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/louayelgarhy',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:louay.elgarhy@example.com',
      label: 'Email'
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Louay ElGarhy</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Senior Flutter Developer specializing in creating beautiful, high-performance mobile applications for iOS and Android.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors hover-lift"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { label: 'Home', id: 'hero' },
                  { label: 'About', id: 'about' },
                  { label: 'Projects', id: 'projects' },
                  { label: 'Contact', id: 'contact' },
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground text-sm">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>louayelgarhy@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+20 1144373132</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>6th of October, Giza, Egypt</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Louay ElGarhy. All rights reserved. Built with React, TypeScript & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;