import { Play, Volume2 } from 'lucide-react';
import { useState, useRef } from 'react';

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion';

import { Parallax } from 'react-scroll-parallax';

export function VideoShowcase() {

  const [isPlaying, setIsPlaying] = useState(false);

  const sectionRef = useRef(null);

  /* ========================================
     SCROLL
  ======================================== */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  /* ========================================
     SMOOTH SPRING
  ======================================== */

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.8,
  });

  /* ========================================
     SMOOTH TRANSFORMS
  ======================================== */

  const titleY = useTransform(
    smoothProgress,
    [0, 1],
    [40, -20]
  );

  const opacity = useTransform(
    smoothProgress,
    [0, 0.2],
    [0, 1]
  );

  const videoScale = useTransform(
    smoothProgress,
    [0, 1],
    [1, 1.04]
  );

  const cardsY = useTransform(
    smoothProgress,
    [0, 1],
    [40, -10]
  );

  /* ========================================
     VIDEOS
  ======================================== */

  const videos = [
    {
      title: 'Centro Educacional Integrado',
      description: 'Novo complexo educacional moderno',
      image:
        'https://images.unsplash.com/photo-1541888804692-532ae8a87985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300',
    },
    {
      title: 'Duplicação da Avenida',
      description: 'Mobilidade urbana avançando',
      image:
        'https://images.unsplash.com/photo-1685953055318-0080d30a4f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300',
    },
    {
      title: 'Parque Sustentável',
      description: 'Transformação urbana em andamento',
      image:
        'https://images.unsplash.com/photo-1663113569396-eea56c1a313d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300',
    },
  ];

  return (

    <section
      ref={sectionRef}
      className="
        relative
        py-28
        overflow-hidden
        text-white
      "
      style={{
        background:
          'linear-gradient(180deg, #12223A 0%, #0B1628 100%)',
      }}
    >

      {/* ========================================
          BACKGROUND PARALLAX
      ======================================== */}

      <Parallax speed={-12}>

        <div className="absolute inset-0 opacity-10">

          <img
            src="/src/app/components/figma/base mulher copy.webp"
            alt=""
            className="
              w-full
              h-full
              object-cover
              scale-105
              will-change-transform
            "
          />

        </div>

      </Parallax>

      {/* ========================================
          OVERLAY
      ======================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#12223A]/70
          via-[#12223A]/80
          to-[#0B1628]
        "
      />

      {/* ========================================
          GLOW EFFECT
      ======================================== */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[500px]
          bg-blue-500/20
          blur-[120px]
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* ========================================
            HEADER
        ======================================== */}

        <motion.div
          style={{
            y: titleY,
            opacity,
          }}
          className="
            text-center
            mb-20
            will-change-transform
          "
        >

          {/* BADGE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
            viewport={{
              once: true,
            }}
            className="
              inline-block
              px-5
              py-2
              rounded-full
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              mb-6
            "
          >

            <span
              className="
                text-sm
                uppercase
                tracking-[0.2em]
              "
            >
              Vídeo Exclusivo
            </span>

          </motion.div>

          {/* TITLE */}

          <h2
            className="
              text-4xl
              sm:text-6xl
              font-black
              leading-tight
              mb-6
            "
          >

            {'Veja a Transformação Acontecendo'
              .split('')
              .map((letter, index) => (

                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.015,
                    ease: 'easeOut',
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                    inline-block
                    will-change-transform
                  "
                >
                  {letter === ' '
                    ? '\u00A0'
                    : letter}
                </motion.span>

              ))}

          </h2>

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: 'easeOut',
            }}
            viewport={{
              once: true,
            }}
            className="
              text-blue-100/80
              text-lg
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            Acompanhe o progresso das obras e veja os bastidores
            das transformações acontecendo em tempo real.
          </motion.p>

        </motion.div>

        {/* ========================================
            GRID
        ======================================== */}

        <div
          className="
            grid
            lg:grid-cols-2
            gap-12
            items-start
          "
        >

          {/* ========================================
              VIDEO
          ======================================== */}

          <Parallax speed={-6}>

            <motion.div
              style={{
                scale: videoScale,
              }}
              whileHover={{
                scale: 1.01,
              }}
              transition={{
                duration: 0.4,
                ease: 'easeOut',
              }}
              className="
                relative
                aspect-video
                rounded-[32px]
                overflow-hidden
                border
                border-white/10
                shadow-2xl
                bg-white/5
                backdrop-blur-xl
                will-change-transform
              "
            >

              {!isPlaying ? (

                <div className="relative w-full h-full group">

                  <img
                    src="/src/app/components/figma/base mulher copy.webp"
                    alt=""
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-105
                      transition-transform
                      duration-1000
                      ease-out
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/40
                    "
                  />

                  {/* PLAY */}

                  <button
                    onClick={() => setIsPlaying(true)}
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <motion.div
                      whileHover={{
                        scale: 1.08,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      animate={{
                        scale: [1, 1.04, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="
                        w-24
                        h-24
                        rounded-full
                        bg-white/15
                        backdrop-blur-2xl
                        border
                        border-white/20
                        flex
                        items-center
                        justify-center
                        shadow-[0_0_40px_rgba(255,255,255,0.15)]
                      "
                    >

                      <Play className="w-12 h-12 ml-1" />

                    </motion.div>

                  </button>

                </div>

              ) : (

                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/fIwSXCKNYcU?autoplay=1"
                  title="Vídeo"
                  allowFullScreen
                />

              )}

            </motion.div>

          </Parallax>

          {/* ========================================
              CARDS
          ======================================== */}

          <motion.div
            style={{
              y: cardsY,
            }}
            className="space-y-6"
          >

            {videos.map((video, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                viewport={{
                  once: true,
                }}
                className="
                  group
                  bg-white/[0.06]
                  backdrop-blur-2xl
                  border
                  border-white/10
                  rounded-3xl
                  p-6
                  shadow-xl
                  hover:bg-white/[0.08]
                  transition-all
                  duration-500
                  cursor-pointer
                "
              >

                <div className="flex gap-5">

                  {/* IMAGE */}

                  <div
                    className="
                      relative
                      w-28
                      h-28
                      rounded-2xl
                      overflow-hidden
                      flex-shrink-0
                    "
                  >

                    <img
                      src={video.image}
                      alt={video.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-110
                        transition-transform
                        duration-700
                        ease-out
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-black/30
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Play className="w-8 h-8" />
                    </div>

                  </div>

                  {/* CONTENT */}

                  <div className="flex-1">

                    <h4
                      className="
                        text-xl
                        font-semibold
                        mb-2
                        text-white
                        group-hover:text-blue-300
                        transition-colors
                        duration-300
                      "
                    >
                      {video.title}
                    </h4>

                    <p
                      className="
                        text-blue-100/70
                        mb-4
                        leading-relaxed
                      "
                    >
                      {video.description}
                    </p>

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-blue-200/60
                      "
                    >

                      <Volume2 className="w-4 h-4" />

                      <span>4:30 min</span>

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>
      </div>
    </section>
  );
}