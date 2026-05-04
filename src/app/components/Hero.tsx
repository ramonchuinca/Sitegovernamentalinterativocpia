import { ArrowRight, Play } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export function Hero() {
  return (
    <section className="relative h-[600px] sm:h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="/src/app/components/figma/3 bi copy.webp"
          alt="Construção moderna da cidade"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl text-white">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-sm">✨ Transformando nossa cidade juntos</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
            Construindo o Futuro da Nossa Cidade
          </h1>

          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
            Mais de <strong>87 obras concluídas</strong> e <strong>24 projetos em andamento</strong>.
            Investindo <strong>R$ 45 milhões</strong> em infraestrutura, saúde, educação e qualidade de vida para todos.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-all shadow-lg flex items-center gap-2 group">
              <span>Conheça as Obras</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all flex items-center gap-2">
              <Play className="w-5 h-5" />
              <span>Ver Vídeo</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
