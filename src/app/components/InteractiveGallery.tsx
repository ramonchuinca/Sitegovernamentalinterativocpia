import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

export function InteractiveGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1769147555720-71fc71bfc216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      title: 'Hospital Regional',
      description: 'Novas instalações médicas de ponta'
    },
    {
      url: 'https://images.unsplash.com/photo-1762536859942-8076505f7c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      title: 'Centro Educacional',
      description: 'Infraestrutura moderna para educação'
    },
    {
      url: 'https://images.unsplash.com/photo-1708358131361-93680cf7b4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      title: 'Avenida Principal',
      description: 'Duplicação e modernização viária'
    },
    {
      url: 'https://images.unsplash.com/photo-1774799975917-5a893e0d576a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      title: 'Parque Linear',
      description: '20 hectares de área verde preservada'
    },
    {
      url: 'https://images.unsplash.com/photo-1762356731874-b4042915d34c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      title: 'Obras em Andamento',
      description: 'Progresso constante em toda cidade'
    },
    {
      url: 'https://images.unsplash.com/photo-1510846606678-710c05a5c776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      title: 'Vista Aérea',
      description: 'Transformação visível de cima'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index);
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth / 3;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    scrollToIndex(newIndex);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            <span className="text-sm">Galeria de Imagens</span>
          </div>
          <h2 className="text-3xl sm:text-4xl mb-4">Veja Nossa Cidade Se Transformando</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Registros fotográficos de cada etapa das obras e projetos em andamento
          </p>
        </div>

        <div className="relative mb-8">
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg hover:bg-accent flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg hover:bg-accent flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 snap-x snap-mandatory scroll-smooth hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 snap-start"
              >
                <div
                  className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                        <ZoomIn className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h4 className="mb-1 text-white">{image.title}</h4>
                    <p className="text-sm text-white/80">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>

        <div className="text-center">
          <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-lg">
            Ver Galeria Completa
          </button>
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
            }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
            }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl mb-2">{images[selectedImage].title}</h3>
              <p className="text-white/80">{images[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
