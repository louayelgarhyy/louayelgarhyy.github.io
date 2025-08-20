import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, Smartphone, Zap, Users, Award, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';
type CountUpProps = {
  to: number;
  suffix?: string;
  prefix?: string;
};

const CountUp = ({ to, suffix = '', prefix = '' }: CountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const isLarge = to > 99;
    const baseDuration = isLarge ? 2.5 : to <= 10 ? 2 : 2.5;
    const incrementTime = 16; // ~60fps
    const totalIncrements = baseDuration * 1000 / incrementTime;
    const increment = to / totalIncrements;

    let current = 0;

    const counter = setInterval(() => {
      current += increment;
      if (current >= to) {
        clearInterval(counter);
        setCount(to);
      } else {
        setCount(Math.ceil(current));
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, [to]);

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
};
const AboutSection = () => {
  const { t } = useTranslation();

  const stats = [
    { number: 4, prefix: '+', suffix: '', label: t('about.highlights.years_epxerience'), icon: Award },
    { number: 30, prefix: '+', suffix: '', label: t('about.highlights.app_published'), icon: Smartphone },
    { number: 100, prefix: '+', suffix: 'K', label: t('about.highlights.downloads'), icon: Globe },
    { number: 27, prefix: '+', suffix: '', label: t('about.highlights.clients.title'), icon: Users },

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
    {
      icon: Users,
      title: t('about.highlights.clients.title'),
      description: t('about.highlights.clients.description')
    }
  ];

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
    visible: { opacity: 1, y: 0 },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const highlightVariants = {
    hover: { scale: 1.05 },
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
              variants={itemVariants}
            >
              {t('about.title')}
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              {t('about.description')}
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-card rounded-xl shadow-card border border-border hover-lift"
                variants={statVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                </motion.div>
                <motion.div
                  className="text-2xl font-bold text-foreground mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                  <CountUp prefix={stat.prefix} to={stat.number} suffix={stat.suffix} />
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Story */}
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center mb-16"
            variants={containerVariants}
          >
            <motion.div
              className="space-y-6"
              variants={itemVariants}
            >
              <motion.h3
                className="text-2xl font-semibold text-foreground"
                variants={itemVariants}
              >
                {t('about.story.title')}
              </motion.h3>
              <motion.div
                className="space-y-4 text-muted-foreground leading-relaxed"
                variants={itemVariants}
              >
                <motion.p variants={itemVariants}>{t('about.story.paragraph1')}</motion.p>
                <motion.p variants={itemVariants}>{t('about.story.paragraph2')}</motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              variants={cardVariants}
            >
              <motion.div
                className="bg-card rounded-2xl shadow-card p-8 border border-border"
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="space-y-6">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4"
                      variants={highlightVariants}
                      whileHover="hover"
                    >
                      <motion.div
                        className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(59, 130, 246, 0.2)"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <highlight.icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-foreground">{highlight.title}</h4>
                        <p className="text-muted-foreground text-sm">{highlight.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Additional Highlights */}
          {/* <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="p-6 bg-card rounded-xl shadow-card border border-border"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <highlight.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;