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
        '/src/app/components/figma/trabalhador-2.jpg',

      mobile:
        '/src/app/components/figma/trabalhador-1.jpg',
    },

    {
      id: 3,

      desktop:
        '/src/app/components/figma/trabalhadora-4.jpg',

      mobile:
        '/src/app/components/figma/trabalhadora-3.jpg',
    },

    {
      id: 4,

      desktop:
        '/src/app/components/figma/civil-2.jpg',

      mobile:
        '/src/app/components/figma/civil-1.jpg',
    },

    {
      id: 5,

      desktop:
        '/src/app/components/figma/policial-2.png',

      mobile:
        '/src/app/components/figma/policial-1.jpg',
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
    h-[420px]
    sm:h-[550px]
    lg:h-[700px]
    rounded-[40px]
    overflow-hidden
    border
    border-white/10
    shadow-[0_40px_120px_rgba(0,0,0,0.45)]
    bg-[#020817]
  "
        >
          {/* IMAGENS */}

          {newsImages.map((image, index) => (
            <div
              key={image.id}
              className={`
        absolute
        inset-0
        transition-opacity
        duration-[1200ms]
        ease-in-out
        ${current === index
                  ? 'opacity-100 z-20'
                  : 'opacity-0 z-10'
                }
      `}
            >
              {/* DESKTOP */}

              <img
                src={image.desktop}
                alt="Notícia"
                className="
          hidden
          md:block
          w-full
          h-full
          object-contain
        "
              />

              {/* MOBILE */}

              <img
                src={image.mobile}
                alt="Notícia"
                className="
          block
          md:hidden
          w-full
          h-full
          object-contain
        "
              />

              {/* OVERLAY */}

              <div
                className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/40
          via-transparent
          to-transparent
        "
              />
            </div>
          ))}

          {/* BOTÃO ESQUERDO */}

          <button
            onClick={prevSlide}
            className="
      absolute
      left-4
      sm:left-6
      top-1/2
      -translate-y-1/2
      z-30
      w-12
      h-12
      sm:w-16
      sm:h-16
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
      transition-all
    "
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* BOTÃO DIREITO */}

          <button
            onClick={nextSlide}
            className="
      absolute
      right-4
      sm:right-6
      top-1/2
      -translate-y-1/2
      z-30
      w-12
      h-12
      sm:w-16
      sm:h-16
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
      transition-all
    "
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* INDICADORES */}

          <div
            className="
      absolute
      bottom-5
      left-1/2
      -translate-x-1/2
      z-30
      flex
      items-center
      gap-3
    "
          >
            {newsImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`
          rounded-full
          transition-all
          duration-300
          ${current === index
                    ? 'w-12 h-2 bg-cyan-400'
                    : 'w-2.5 h-2.5 bg-white/40 hover:bg-white'
                  }
        `}
              />
            ))}
          </div>
        </div>

      </div>



    </section>
  );
}