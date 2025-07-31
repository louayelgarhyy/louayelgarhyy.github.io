import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Code, Smartphone, Palette, Zap } from 'lucide-react';

const SkillsSection = () => {
  const { t } = useTranslation();
  
  const skillCategories = [
    {
      key: "mobile",
      title: "Mobile Development",
      skills: ["Flutter", "Dart", "iOS Development", "Android Development", "Cross-platform"],
      icon: Smartphone,
      color: "bg-primary/10 text-primary"
    },
    {
      key: "frontend",
      title: "Frontend & UI",
      skills: ["Figma","Adobe XD","Material Design", "Cupertino Design", "Custom Animations", "Responsive Design","HTML", "CSS", "JavaScript"],
      icon: Palette,
      color: "bg-accent/10 text-accent"
    },
    {
      key: "backend",
      title: "Backend & APIs",
      skills: ["Laravel","PHP","Firebase","SQL","PhpMyAdmin","Postman", "REST APIs", "GraphQL", "SQLite", "Cloud Functions"],
      icon: Zap,
      color: "bg-secondary/10 text-secondary"
    },
    {
      key: "tools",
      title: "Tools & Others",
      skills: ["Git", "VS Code", "Android Studio", "Xcode", "CI/CD", "App Store Publishing"],
      icon: Code,
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
              {t('skills.title')}
            </h2>
            <p className="text-xl text-muted-foreground font-open-sans max-w-3xl mx-auto leading-relaxed">
              {t('skills.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="bg-card rounded-2xl shadow-card p-8 border border-border hover:shadow-elegant transition-all duration-300 animate-fade-in group hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-foreground">{t(`skills.categories.${category.key}`) || category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-open-sans"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;