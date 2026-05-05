import { TrendingUp, CheckCircle, Clock, DollarSign } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export function Stats() {
  const stats = [
    {
      icon: Clock,
      label: 'Milhões',
      value: '12',
      subtitle: 'Hospital de Retaguarda',
      color: 'from-[#F9EC08] to-yellow-400'
    },
    {
      icon: CheckCircle,
      label: 'Obras Concluídas',
      value: '87',
      subtitle: 'Desde 2024',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      label: 'Progresso Médio',
      value: '68%',
      subtitle: 'Das obras atuais',
      color: 'from-[#29367A] to-blue-400'
    },
    {
      icon: DollarSign,
      label: 'Investimento',
      value: 'R$ 45M',
      subtitle: 'Em desenvolvimento',
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: Clock,
      label: 'Em Andamento',
      value: '24',
      subtitle: 'Projetos ativos',
      color: 'from-[#F9EC08] to-yellow-400'
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617]" />

      {/* efeito blur */}
      <div className="absolute w-[400px] h-[400px] bg-yellow-400/20 blur-3xl rounded-full top-10 left-10" />
      <div className="absolute w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full bottom-10 right-10" />

      <div className="relative max-w-6xl mx-auto">

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={30}

          // 🔥 AUTOPLAY
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}

          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: true,
          }}

          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <SwiperSlide key={index} className="!w-[260px]">
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 text-center transition-all duration-500 hover:scale-105">

                  {/* ÍCONE */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="text-3xl font-bold mb-1">
                    {stat.value}
                  </div>

                  <div className="text-sm mb-1">
                    {stat.label}
                  </div>

                  <p className="text-xs text-gray-600">
                    {stat.subtitle}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </section>
  );
}