import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export function News() {
  const news = [
    {
      id: 1,
      title: 'Prefeito anuncia ampliação do Hospital Regional com investimento de R$ 12 milhões',
      excerpt: 'Nova ala terá 50 leitos e equipamentos de última geração para atendimento da população.',
      image: 'https://images.unsplash.com/photo-1771340591377-4a23dc88d917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      date: '15 Abr 2026',
      category: 'Saúde',
      readTime: '3 min'
    },
    {
      id: 2,
      title: 'Obra de duplicação da Avenida Principal atinge 60% de conclusão',
      excerpt: 'Projeto que vai melhorar o trânsito e reduzir congestionamentos está dentro do prazo previsto.',
      image: 'https://images.unsplash.com/photo-1663058480199-acbc638bf21a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      date: '12 Abr 2026',
      category: 'Mobilidade',
      readTime: '4 min'
    },
    {
      id: 3,
      title: 'Centro Educacional Integrado receberá 1.500 alunos a partir de agosto',
      excerpt: 'Novo complexo educacional contará com laboratórios modernos e espaços de convivência.',
      image: 'https://images.unsplash.com/photo-1632862378069-4ad0348cea4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      date: '10 Abr 2026',
      category: 'Educação',
      readTime: '5 min'
    },
    {
      id: 4,
      title: 'Inaugurado Parque Linear com área verde de 20 hectares',
      excerpt: 'Espaço de lazer e preservação ambiental já está disponível para a população.',
      image: 'https://images.unsplash.com/photo-1774799975917-5a893e0d576a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      date: '08 Abr 2026',
      category: 'Meio Ambiente',
      readTime: '2 min'
    }
  ];

  const featured = news[0];
  const regularNews = news.slice(1);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
              <span className="text-sm">Notícias</span>
            </div>
            <h2 className="text-3xl sm:text-4xl mb-2">Últimas Atualizações</h2>
            <p className="text-muted-foreground text-lg">
              Fique por dentro de tudo que está acontecendo
            </p>
          </div>
          <button className="hidden sm:flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors">
            <Newspaper className="w-4 h-4" />
            <span>Ver Todas</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="lg:col-span-1 group cursor-pointer">
            <div className="relative h-[400px] rounded-2xl overflow-hidden mb-4">
              <ImageWithFallback
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-primary text-white rounded-full text-sm">
                  {featured.category}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-3 mb-3 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{featured.date}</span>
                  </div>
                  <span>•</span>
                  <span>{featured.readTime} de leitura</span>
                </div>
                <h3 className="text-2xl mb-2 text-white">{featured.title}</h3>
                <p className="text-white/90 mb-4">{featured.excerpt}</p>
                <button className="inline-flex items-center gap-2 text-white hover:gap-3 transition-all">
                  <span>Ler matéria completa</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {regularNews.map((item) => (
              <div key={item.id} className="group cursor-pointer bg-muted/30 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex-1 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                    <h4 className="mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-primary text-sm">
                      <span>Ler mais</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center sm:hidden">
          <button className="w-full px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors flex items-center justify-center gap-2">
            <Newspaper className="w-4 h-4" />
            <span>Ver Todas as Notícias</span>
          </button>
        </div>
      </div>
    </section>
  );
}
