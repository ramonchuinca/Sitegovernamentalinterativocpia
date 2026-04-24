import { Clock, MapPin, TrendingUp, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export function FeaturedProjects() {
  const projects = [
    {
      title: 'Novo Hospital Regional',
      location: 'Zona Sul',
      image: 'https://images.unsplash.com/photo-1769147555720-71fc71bfc216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      progress: 85,
      investment: 'R$ 12M',
      impact: '200 mil pessoas atendidas por ano',
      status: 'Inauguração prevista para Junho/2026',
      highlight: true
    },
    {
      title: 'Centro Educacional Integrado',
      location: 'Zona Norte',
      image: 'https://images.unsplash.com/photo-1762536859942-8076505f7c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      progress: 60,
      investment: 'R$ 5.8M',
      impact: '1.500 alunos beneficiados',
      status: 'Em construção acelerada'
    },
    {
      title: 'Parque Linear Sustentável',
      location: 'Centro',
      image: 'https://images.unsplash.com/photo-1760963720238-bf7086d039d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      progress: 45,
      investment: 'R$ 3.2M',
      impact: '20 hectares de área verde',
      status: 'Fase de paisagismo'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            <span className="text-sm">Destaques</span>
          </div>
          <h2 className="text-3xl sm:text-4xl mb-4">Projetos que Estão Transformando a Cidade</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça as obras mais importantes que estão acontecendo agora
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl ${
                project.highlight ? 'lg:h-[500px]' : 'lg:h-[400px]'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-0 h-full">
                <div className={`relative h-64 lg:h-full ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute top-6 left-6">
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm">
                      {project.status}
                    </div>
                  </div>
                </div>

                <div className={`bg-gradient-to-br from-muted/30 to-background p-8 lg:p-12 flex flex-col justify-center ${
                  index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl mb-4">{project.title}</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Progresso</p>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                          <span className="text-sm">{project.progress}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Investimento</p>
                        <p className="text-lg">{project.investment}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Impacto</p>
                        <p className="text-sm">{project.impact}</p>
                      </div>
                    </div>
                  </div>

                  <button className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all group">
                    <span>Ver detalhes completos</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
