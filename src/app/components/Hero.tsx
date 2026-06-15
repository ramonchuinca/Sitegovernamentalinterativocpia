import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectFade, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

export function Hero() {

  return (

    <section className="w-full overflow-hidden">

      <Swiper
        effect="fade"
        speed={1000}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, EffectFade, Autoplay]}
        className="w-full h-[70vh] sm:h-[85vh] lg:h-screen"
      >

        {/* SLIDE 1 */}
        <SwiperSlide>

          <div className="relative w-full h-full">

            {/* IMAGEM RESPONSIVA */}
            <picture>

              {/* MOBILE */}
              <source
                media="(max-width: 600px)"
                srcSet="/src/app/components/figma/obras-vert.webp"
              />

              {/* DESKTOP */}
              <source
                media="(min-width: 601px)"
                srcSet="/src/app/components/figma/3 bi copy.webp"
              />

              {/* DEFAULT */}
              <img
                src="/src/app/components/figma/3 bi copy.webp"
                alt="obra 1"
                className="
   absolute
    inset-0
    w-full
    h-full
   
    md:object-cover
    object-center
  "
              />

            </picture>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />

            {/* CONTEÚDO */}
            <div
              className="
                relative
                z-20
                h-full
                flex
                items-center
                justify-end
                px-5
                sm:px-10
                lg:px-20
              "
            >

              <div className="text-white max-w-2xl text-right">

                <h1
                  className="
                    text-3xl
                    sm:text-5xl
                    lg:text-7xl
                    font-bold
                    leading-tight
                    mb-4
                  "
                >
                  Obras em Rondônia
                </h1>

                <p
                  className="
                    text-sm
                    sm:text-lg
                    lg:text-xl
                    text-white/90
                    leading-relaxed
                    max-w-lg
                  "
                >
                  {/* Mais de 87 obras concluídas na cidade. */}
                </p>

              </div>

            </div>

          </div>

        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>

          <div className="relative w-full h-full">

            {/* IMAGEM RESPONSIVA */}
            <picture>

              {/* MOBILE */}
              <source
                media="(max-width: 600px)"
                srcSet="/src/app/components/figma/Mulher_500x400_02.png"
              />

              {/* DESKTOP */}
              <source
                media="(min-width: 601px)"
                srcSet="/src/app/components/figma/base mulher copy.webp"
              />

              {/* DEFAULT */}
              <img
                src="/src/app/components/figma/3 bi copy.webp"
                alt="obra 1"
                className="
    absolute
    inset-0
    w-full
    h-full
   
    md:object-cover
    object-center
  "
              />

            </picture>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />

            {/* CONTEÚDO */}
            <div
              className="
                relative
                z-20
                h-full
                flex
                items-center
                px-5
                sm:px-10
                lg:px-20
              "
            >

              <div className="text-white max-w-2xl">

                <h1
                  className="
                    text-3xl
                    sm:text-5xl
                    lg:text-7xl
                    font-bold
                    leading-tight
                    mb-4
                  "
                >
                  Um gesto muda o fim da história
                </h1>

                <p
                  className="
                    text-sm
                    sm:text-lg
                    lg:text-xl
                    text-white/90
                    leading-relaxed
                    max-w-lg
                  "
                >
                  {/* Mais de R$ 45 milhões em projetos. */}
                </p>

              </div>

            </div>

          </div>

        </SwiperSlide>

      </Swiper>

    </section>

  )
}