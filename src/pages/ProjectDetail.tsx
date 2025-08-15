import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Smartphone, Play, Star, Download, Users } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { getProjectById } from '@/data/projects';
import { usePopup } from "@/components/ui/PopupContext"; // Adjust path if needed


const ProjectDetail = () => {
  const { projectId } = useParams();
  const { t, i18n } = useTranslation();
  const { openPopup } = usePopup();

  const project = getProjectById(projectId || '');

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              {t('projectDetail.backToProjects')}
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Project Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-[1.2] py-4 px-2">
            {t(project.titleKey)}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            {t(project.descriptionKey)}
          </p>

          {/* App Stats */}
          {project.stats && (
            <div className="flex justify-center gap-8 mb-8">
              {project.stats.downloads && (
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Download className="w-4 h-4 text-primary" />
                    <span className="font-bold text-lg">{project.stats.downloads}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{t('projectDetail.stats.downloads')}</span>
                </div>
              )}
              {project.stats.rating && (
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="font-bold text-lg">{project.stats.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{t('projectDetail.stats.rating')}</span>
                </div>
              )}
              {project.stats.reviews && (
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Users className="w-4 h-4 text-accent" />
                    <span className="font-bold text-lg">{project.stats.reviews}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{t('projectDetail.stats.reviews')}</span>
                </div>
              )}
            </div>
          )}

          {/* Store Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {project.appStoreUrl && (
              <Button
                className="gap-2"
                onClick={() => window.open(project.appStoreUrl, '_blank')}
              >
                <i className="ri-apple-fill"></i>
                {t('projectDetail.appStore')}
              </Button>
            )}
            {project.playStoreUrl && (
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => window.open(project.playStoreUrl, '_blank')}
              >
                <i className="ri-google-play-fill "></i>
                {t('projectDetail.googlePlay')}
              </Button>
            )}
            {project.websiteUrl && (
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => window.open(project.websiteUrl, '_blank')}
              >
                <i className="ri-global-line "></i>
                {t('projectDetail.website')}
              </Button>
            )}
          </div>
        </div>

        {/* Screenshots Section */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              {t('projectDetail.screenshots')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <Card
                  key={index}
                  className="bg-card-gradient border-border/50 shadow-elegant hover:shadow-glow-primary transition-all duration-300 animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-2 cursor-pointer"
                    onClick={() =>
                      openPopup(
                        <img
                          src={screenshot}
                          alt={`${t(project.titleKey)} Screenshot ${index + 1}`}
                          className="max-w-full max-h-[80vh] object-contain rounded-lg"

                        />
                      )
                    }
                  >
                    <img
                      src={screenshot}
                      alt={`${t(project.titleKey)} Screenshot ${index + 1}`}
                      className="w-full object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
        {/* {project.screenshots && project.screenshots.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">{t('projectDetail.screenshots')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <Card
                  key={index}
                  className="bg-card-gradient border-border/50 shadow-elegant hover:shadow-glow-primary transition-all duration-300 animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-2">
                    <img
                      src={screenshot}
                      alt={`${t(project.titleKey)} Screenshot ${index + 1}`}
                      className="w-full object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )} */}

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Description */}
          <Card className="bg-card-gradient border-border/50 shadow-elegant animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">{t('projectDetail.overview')}</h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {i18n.language === 'ar' ? t(project.descriptionKey) : (project.longDescription || t(project.descriptionKey))}
              </p>
            </CardContent>
          </Card>

          {/* Features */}
          <Card className="bg-card-gradient border-border/50 shadow-elegant animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">{t('projectDetail.features')}</h3>
              <div className="grid grid-cols-1 gap-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{t(`projectFeatures.${feature}`, { defaultValue: feature })}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technologies */}
        <Card className="mt-12 bg-card-gradient border-border/50 shadow-elegant animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">{t('projectDetail.technologies')}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-secondary/50 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors px-4 py-2 text-sm"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDetail;