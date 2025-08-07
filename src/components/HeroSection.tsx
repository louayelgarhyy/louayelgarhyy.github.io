import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as any,
      },
    },
  };

  const profileVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as any,
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as any,
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as any,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as any,
      },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Picture */}
          <motion.div 
            className="mb-8 flex justify-center"
            variants={profileVariants}
          >
            <motion.div 
              className="relative"
              animate={floatingAnimation}
            >
              <motion.img
                src={profilePicture}
                alt="Louay ElGarhy"
                className="w-32 h-32 rounded-full object-cover shadow-xl sm:w-40 sm:h-40"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute inset-0 rounded-full "
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          <div className="space-y-6">
            <motion.p 
              className="text-lg text-muted-foreground font-medium"
              variants={itemVariants}
            >
              {t('hero.greeting')}
            </motion.p>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              variants={itemVariants}
            >
              {t('hero.name')}
            </motion.h1>
            
            <motion.h2 
              className="text-xl sm:text-2xl text-gradient font-semibold"
              variants={itemVariants}
            >
              {t('hero.title')}
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              {t('hero.description')}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
              variants={itemVariants}
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button 
                  size="lg" 
                  onClick={scrollToProjects}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {t('hero.viewWork')}
                </Button>
              </motion.div>
              
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={scrollToContact}
                  className="border-border bg-background hover:bg-muted font-medium px-8 py-3"
                >
                  {t('hero.downloadResume')}
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center space-x-6 pt-8"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/louayelgarhyy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
                variants={socialVariants}
                whileHover="hover"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/louayelgarhy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
                variants={socialVariants}
                whileHover="hover"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:louay.elgarhy@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
                variants={socialVariants}
                whileHover="hover"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;