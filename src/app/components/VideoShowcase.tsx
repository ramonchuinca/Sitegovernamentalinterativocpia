import { Play, Volume2 } from 'lucide-react';
import { useState } from 'react';

export function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            <span className="text-sm">Vídeo Exclusivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl mb-4">Veja a Transformação Acontecendo</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Acompanhe o progresso das obras em vídeo e conheça os bastidores dos projetos que estão mudando nossa cidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group bg-black">
            {!isPlaying ? (
              <div className="relative w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1762356731874-b4042915d34c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                  alt="Preview do vídeo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <Play className="w-10 h-10 text-primary ml-1" />
                  </div>
                </button>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm mb-1">Hospital Regional - Timelapse</p>
                  <p className="text-xs text-white/80">6 meses de obras em 2 minutos</p>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Vídeo das Obras"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="flex gap-4">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 relative">
                  <img
                    src="https://images.unsplash.com/photo-1541888804692-532ae8a87985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300"
                    alt="Centro Educacional"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 group-hover:text-primary transition-colors">
                    Centro Educacional Integrado
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Veja como está ficando o novo complexo educacional
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Volume2 className="w-3 h-3" />
                    <span>3:45 min</span>
                    <span>•</span>
                    <span>há 2 dias</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="flex gap-4">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 relative">
                  <img
                    src="https://images.unsplash.com/photo-1685953055318-0080d30a4f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300"
                    alt="Duplicação da Avenida"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 group-hover:text-primary transition-colors">
                    Duplicação da Avenida Principal
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Progresso acelerado nas obras de mobilidade
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Volume2 className="w-3 h-3" />
                    <span>5:12 min</span>
                    <span>•</span>
                    <span>há 5 dias</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="flex gap-4">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 relative">
                  <img
                    src="https://images.unsplash.com/photo-1663113569396-eea56c1a313d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300"
                    alt="Parque Linear"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 group-hover:text-primary transition-colors">
                    Parque Linear Sustentável
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Do zero até a inauguração em imagens aéreas
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Volume2 className="w-3 h-3" />
                    <span>4:20 min</span>
                    <span>•</span>
                    <span>há 1 semana</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
