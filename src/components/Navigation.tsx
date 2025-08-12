import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-white hover:text-primary/80'
              }`}
            >
              Louay ElGarhy
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 rtl:mr-10 rtl:ml-0 rtl:space-x-reverse">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-200 text-sm font-medium ${
                    isScrolled 
                      ? 'text-muted-foreground hover:text-primary' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {t(`nav.${item.label}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Social Links & Language Switcher */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <a
              href="https://github.com/louayelgarhyy"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-200 ${
                isScrolled 
                  ? 'text-muted-foreground hover:text-primary' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/louayelgarhy"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-200 ${
                isScrolled 
                  ? 'text-muted-foreground hover:text-primary' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:louayelgarhy@gmail.com"
              className={`transition-colors duration-200 ${
                isScrolled 
                  ? 'text-muted-foreground hover:text-primary' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <Mail className="w-5 h-5" />
            </a>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-lg border-t border-border/50">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors rtl:text-right"
                >
                  {t(`nav.${item.label}`)}
                </button>
              ))}
              <div className="flex items-center justify-between px-3 py-2 border-t border-border/50 mt-4">
                <div className="flex space-x-4 rtl:space-x-reverse">
                  <a
                    href="https://github.com/louayelgarhyy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/louayelgarhy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:louayelgarhy@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;