import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export function Hero() {
  return (
    <section className="min-h-[600px] sm:min-h-[700px]">
      <Swiper
        effect="fade"
        speed={1000}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, EffectFade, Autoplay]}
        className="h-full"
      >

        {/* SLIDE 1 */}
        <SwiperSlide>
          <div className="relative h-screen">
            <img
              src="/src/app/components/figma/3 bi copy.webp"
              alt="obra 1"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* 🔥 overlay corrigido */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 pointer-events-none" />

            <div className="relative h-full flex items-center px-6 max-w-5xl">
              <div className="text-white max-w-xl animate-fadeIn">
                <h1 className="text-4xl sm:text-6xl mb-4 font-bold">
                  Construindo o Futuro
                </h1>
                <p className="text-lg">
                  Mais de 87 obras concluídas na cidade.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div className="relative h-screen">
            <img
              src="/src/app/components/figma/base mulher copy.webp"
              alt="obra 2"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* 🔥 overlay corrigido */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 pointer-events-none" />

            <div className="relative h-full flex items-center px-6 max-w-5xl">
              <div className="text-white max-w-xl animate-fadeIn">
                <h1 className="text-4xl sm:text-6xl mb-4 font-bold">
                  Investindo em Qualidade de Vida
                </h1>
                <p className="text-lg">
                  Mais de R$ 45 milhões em projetos.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
}