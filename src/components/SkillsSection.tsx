import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from 'react-i18next';

const SkillsSection = () => {
  const { t } = useTranslation();
  
  const skillCategories = [
    {
      key: "mobile",
      title: "Mobile Development",
      skills: ["Flutter", "Dart", "iOS Development", "Android Development", "Cross-platform"],
      icon: "📱"
    },
    {
      key: "frontend",
      title: "Frontend & UI",
      skills: ["Material Design", "Cupertino Design", "Custom Animations", "Responsive Design", "State Management"],
      icon: "🎨"
    },
    {
      key: "backend",
      title: "Backend & APIs",
      skills: ["Firebase", "REST APIs", "GraphQL", "SQLite", "Cloud Functions"],
      icon: "⚡"
    },
    {
      key: "tools",
      title: "Tools & Others",
      skills: ["Git", "VS Code", "Android Studio", "Xcode", "CI/CD", "App Store Publishing"],
      icon: "🛠️"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="bg-card-gradient border-border/50 shadow-elegant hover:shadow-glow-primary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-card-foreground">{t(`skills.categories.${category.key}`) || category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;