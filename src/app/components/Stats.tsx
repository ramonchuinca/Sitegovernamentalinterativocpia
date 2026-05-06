import { Hospital, Plane, Route, Building2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { useEffect, useRef, useState, useMemo } from 'react';

import 'swiper/css';

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const particles = useMemo(
    () =>
      Array.from({ length: 20 }).map(() => ({
        left: Math.random() * 100,
        duration: 5 + Math.random() * 10,
      })),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Hospital,
      title: 'R$ 12 milhões',
      description: 'Hospital de Retaguarda',
      color: 'from-[#F9EC08] to-yello-700'
    },
    {
      icon: Plane,
      title: 'R$ 30 milhões',
      description: 'Aeroporto de Cacoal',
      color: 'from-[#38A240] to-green-700'
    },
    {
      icon: Route,
      title: 'R$ 310 milhões',
      description: 'Estrada RO-370',
      color: 'from-[#29367A] to-blue-600'
    },
    {
      icon: Route,
      title: 'R$ 8 milhões',
      description: 'Ponte RO-459',
      color: 'from-[#D0D0D0] to-gray-500'
    },
    {
      icon: Building2,
      title: 'R$ 3 milhões',
      description: 'Praça do Abobrão',
      color: 'from-[#38A240] to-green-500'
    },
  ];

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">

      {/* 🌌 partículas */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`
          }}
        />
      ))}

      {/* 🔥 background azul */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1a3d] via-[#29367A] to-[#1e2a5a]" />

      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-10 left-10" />
      <div className="absolute w-[400px] h-[400px] bg-blue-400/20 blur-[120px] rounded-full bottom-10 right-10" />

      <div className="relative max-w-7xl mx-auto z-10">

        <div className="mask-fade">

          <Swiper
            slidesPerView={'auto'}
            spaceBetween={40}
            loop={true}
            freeMode={true}
            speed={9000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            modules={[Autoplay, FreeMode]}
          >
            {[...stats, ...stats].map((stat, index) => {
              const Icon = stat.icon;

              return (
                <SwiperSlide key={index} className="!w-[350px]">

                  <TiltCard visible={visible}>
                    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center shadow-2xl cursor-pointer transition-all duration-300 hover:shadow-blue-500/40 hover:-translate-y-2">

                      {/* Ícone */}
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} mx-auto mb-4 flex items-center justify-center`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Valor */}
                      <div className="text-2xl font-bold text-white mb-2">
                        {stat.title}
                      </div>

                      {/* Descrição */}
                      <p className="text-sm text-white/70">
                        {stat.description}
                      </p>

                    </div>
                  </TiltCard>

                </SwiperSlide>
              );
            })}
          </Swiper>

        </div>
      </div>
    </section>
  );
}

function TiltCard({ children, visible }: any) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: any) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y / rect.height - 0.5) * 15;
    const rotateY = (x / rect.width - 0.5) * 15;

    ref.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`transition-all duration-500 will-change-transform ${
        visible ? 'animate-cinematic' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
}