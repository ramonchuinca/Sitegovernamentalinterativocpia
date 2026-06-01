import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import {
  useEffect,
  useRef,
  useState,
} from 'react';

export function News() {

  const [current, setCurrent] =
    useState(0);

  const intervalRef =
    useRef<ReturnType<typeof setInterval> | null>(
      null
    );

  const newsImages = [

    {
      id: 1,

      desktop:
        '/src/app/components/figma/senhor-1.jpg',

      mobile:
        '/src/app/components/figma/senhor-2.jpg',
    },

    {
      id: 2,

      desktop:
        '/src/app/components/figma/hospital-horizontal.jpg',

      mobile:
        '/src/app/components/figma/hospital-vertical.jpg',
    },

    {
      id: 3,

      desktop:
        '/src/app/components/figma/avenida-horizontal.jpg',

      mobile:
        '/src/app/components/figma/avenida-vertical.jpg',
    },

    {
      id: 4,

      desktop:
        '/src/app/components/figma/escola-horizontal.jpg',

      mobile:
        '/src/app/components/figma/escola-vertical.jpg',
    },

    {
      id: 5,

      desktop:
        '/src/app/components/figma/parque-horizontal.jpg',

      mobile:
        '/src/app/components/figma/parque-vertical.jpg',
    },

    {
      id: 6,

      desktop:
        '/src/app/components/figma/seguranca-horizontal.jpg',

      mobile:
        '/src/app/components/figma/seguranca-vertical.jpg',
    },

    {
      id: 7,

      desktop:
        '/src/app/components/figma/emprego-horizontal.jpg',

      mobile:
        '/src/app/components/figma/emprego-vertical.jpg',
    },

    {
      id: 8,

      desktop:
        '/src/app/components/figma/infra-horizontal.jpg',

      mobile:
        '/src/app/components/figma/infra-vertical.jpg',
    },

    {
      id: 9,

      desktop:
        '/src/app/components/figma/cafe-horizontal.jpg',

      mobile:
        '/src/app/components/figma/cafe-vertical.jpg',
    },

    {
      id: 10,

      desktop:
        '/src/app/components/figma/ambiental-horizontal.jpg',

      mobile:
        '/src/app/components/figma/ambiental-vertical.jpg',
    },
  ];

  // AUTO PLAY

  useEffect(() => {

    intervalRef.current =
      setInterval(() => {

        setCurrent((prev) =>
          prev === newsImages.length - 1
            ? 0
            : prev + 1
        );

      }, 5000);

    return () => {

      if (intervalRef.current) {

        clearInterval(intervalRef.current);
      }
    };

  }, []);

  // BOTÕES

  const nextSlide = () => {

    setCurrent((prev) =>
      prev === newsImages.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevSlide = () => {

    setCurrent((prev) =>
      prev === 0
        ? newsImages.length - 1
        : prev - 1
    );
  };

  return (

    <section
      className="
        relative
        py-24
        bg-[#020817]
        overflow-hidden
      "
    >

      {/* BG EFFECT */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.15),transparent_45%)]
        "
      />

      <div
        className="
          max-w-[1700px]
          mx-auto
          px-4
          relative
          z-10
        "
      >

        {/* HEADER */}

        <div
          className="
            text-center
            mb-14
          "
        >

          <span
            className="
              inline-flex
              items-center
              px-5
              py-2
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-400/20
              text-cyan-300
              uppercase
              tracking-[0.25em]
              text-sm
              mb-6
            "
          >
            Notícias e Atualizações
          </span>

          <h2
            className="
              text-4xl
              sm:text-5xl
              lg:text-7xl
              font-black
              text-white
              leading-[1]
            "
          >
            Rondônia em Destaque
          </h2>

        </div>

        {/* CARD GIGANTE */}

        <div
          className="
            relative
            w-full
            h-[500px]
            sm:h-[650px]
            lg:h-[780px]
            rounded-[40px]
            overflow-hidden
            border
            border-white/10
            shadow-[0_40px_120px_rgba(0,0,0,0.45)]
          "
        >

          {/* IMAGENS */}

          {newsImages.map(
            (image, index) => (

              <div
                key={image.id}
                className={`
                  absolute
                  inset-0
                  transition-all
                  duration-[1800ms]
                  ease-in-out
                  ${
                    current === index
                      ? 'opacity-100 scale-100 z-20'
                      : 'opacity-0 scale-110 z-10'
                  }
                `}
              >

                <picture
                  className="
                    block
                    w-full
                    h-full
                  "
                >

                  <source
                    media="(max-width: 768px)"
                    srcSet={image.mobile}
                  />

                  <source
                    media="(min-width: 769px)"
                    srcSet={image.desktop}
                  />

                 <img
  src={image.desktop}
  alt="Notícia"
  className="
    w-full
    h-full
    object-contain
    bg-[#020817]
  "
/>

                </picture>

                {/* OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                  "
                />

              </div>

            )
          )}

          {/* BOTÕES */}

          <button
            onClick={prevSlide}
            className="
              absolute
              left-6
              top-1/2
              -translate-y-1/2
              z-30
              w-16
              h-16
              rounded-full
              bg-black/30
              backdrop-blur-xl
              border
              border-white/10
              flex
              items-center
              justify-center
              text-white
              hover:bg-cyan-500/20
              hover:scale-110
              transition-all
              duration-300
            "
          >

            <ChevronLeft className="w-8 h-8" />

          </button>

          <button
            onClick={nextSlide}
            className="
              absolute
              right-6
              top-1/2
              -translate-y-1/2
              z-30
              w-16
              h-16
              rounded-full
              bg-black/30
              backdrop-blur-xl
              border
              border-white/10
              flex
              items-center
              justify-center
              text-white
              hover:bg-cyan-500/20
              hover:scale-110
              transition-all
              duration-300
            "
          >

            <ChevronRight className="w-8 h-8" />

          </button>

          {/* INDICADORES */}

          <div
            className="
              absolute
              bottom-8
              left-1/2
              -translate-x-1/2
              z-30
              flex
              items-center
              gap-3
            "
          >

            {newsImages.map(
              (_, index) => (

                <button
                  key={index}
                  onClick={() =>
                    setCurrent(index)
                  }
                  className={`
                    transition-all
                    duration-300
                    rounded-full
                    ${
                      current === index
                        ? 'w-14 h-3 bg-cyan-400'
                        : 'w-3 h-3 bg-white/40 hover:bg-white'
                    }
                  `}
                />

              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}