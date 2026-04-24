import { useState } from 'react';
import { MoveHorizontal } from 'lucide-react';

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            <span className="text-sm">Antes e Depois</span>
          </div>
          <h2 className="text-3xl sm:text-4xl mb-4">A Transformação é Real</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Arraste o controle para comparar como era e como ficou
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1674810457485-1f2adeca2400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Antes"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-lg text-white">
                <span className="text-sm">ANTES</span>
              </div>
            </div>

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1762356731874-b4042915d34c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Depois"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 right-6 px-4 py-2 bg-primary/90 backdrop-blur-sm rounded-lg text-white">
                <span className="text-sm">DEPOIS</span>
              </div>
            </div>

            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
                <MoveHorizontal className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-2xl mb-2">Praça da Matriz - Revitalização Completa</h3>
            <p className="text-muted-foreground">
              De área degradada a novo ponto de encontro da comunidade
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
