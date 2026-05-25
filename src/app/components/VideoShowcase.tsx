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
     TRANSFORMS
  ======================================== */

  const titleY = useTransform(
    smoothProgress,
    [0, 1],
    [60, -40]
  );

  const opacity = useTransform(
    smoothProgress,
    [0, 0.2],
    [0, 1]
  );

  const videoScale = useTransform(
    smoothProgress,
    [0, 1],
    [0.9, 1.06]
  );

  const cardsY = useTransform(
    smoothProgress,
    [0, 1],
    [80, -30]
  );

  const sectionOpacity = useTransform(
    smoothProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0]
  );

  const sectionScale = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [0.92, 1, 0.95]
  );

  const sectionRotate = useTransform(
    smoothProgress,
    [0, 1],
    [-1.5, 1.5]
  );

  const backgroundY = useTransform(
    smoothProgress,
    [0, 1],
    [-120, 120]
  );

  const backgroundScale = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [1.2, 1.05, 1.2]
  );

  const blurEffect = useTransform(
    smoothProgress,
    [0, 0.3, 0.7, 1],
    [8, 0, 0, 8]
  );

  const blurFilter = useTransform(
    blurEffect,
    (value) => `blur(${value}px)`
  );

  const videoRotate = useTransform(
    smoothProgress,
    [0, 1],
    [-2, 2]
  );

  const cardsRotate = useTransform(
    smoothProgress,
    [0, 1],
    [2, -2]
  );

  /* ========================================
     VIDEOS
  ======================================== */

  const videos = [
    {
      title: 'Como Pedir Ajuda',
      description: 'Novo complexo educacional moderno',
      image:
        '/src/app/components/figma/gif maos.gif',
    },
    {
      title: 'De forma discreta, abra a palma da mão',
      description: '',
      image:
        '/src/app/components/figma/mao01.png',
    },
    {
      title: 'Dobre o polegar para dentro',
      description: '',
      image:
        '/src/app/components/figma/mao02.png',
    },
    {
      title: 'Feche os outros dedos por cima',
      description: '',
      image:
        '/src/app/components/figma/mao03.png',
    },
  ];

  return (

    <motion.section
      ref={sectionRef}
      style={{
        opacity: sectionOpacity,
        scale: sectionScale,
        rotateX: sectionRotate,
        transformPerspective: 1200,
      }}
      className="
        relative
        py-28
        overflow-hidden
        text-white
      "
    >

      {/* ========================================
          BACKGROUND
      ======================================== */}

      <Parallax speed={-12}>

        <motion.div
          style={{
            y: backgroundY,
            scale: backgroundScale,
          }}
          className="absolute inset-0 opacity-10"
        >

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

        </motion.div>

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
          GLOW
      ======================================== */}

      <motion.div
        style={{
          y: useTransform(
            smoothProgress,
            [0, 1],
            [-80, 120]
          ),
          scale: useTransform(
            smoothProgress,
            [0, 0.5, 1],
            [0.8, 1.2, 0.9]
          ),
        }}
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
        style={{
          perspective: 1200,
        }}
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
            scale: useTransform(
              smoothProgress,
              [0, 0.5, 1],
              [0.9, 1, 0.95]
            ),
          }}
          className="
            text-center
            mb-20
            will-change-transform
          "
        >

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

          <h2
            className="
              text-4xl
              sm:text-6xl
              font-black
              leading-tight
              mb-6
            "
          >

            {'Um gesto simples que pode mudar o fim da sua história.'
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
            Saiba como pedir ajuda
          </motion.p>

        </motion.div>

        {/* ========================================
            GRID
        ======================================== */}

        <motion.div
          style={{
            rotateX: useTransform(
              smoothProgress,
              [0, 1],
              [4, -4]
            ),
          }}
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
                rotate: videoRotate,
                y: useTransform(
                  smoothProgress,
                  [0, 1],
                  [60, -60]
                ),
                filter: blurFilter,
              }}
              whileHover={{
                scale: 1.03,
                rotateY: 4,
                rotateX: 2,
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
                      group-hover:scale-110
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
                        scale: [1, 1.08, 1],
                        opacity: [0.8, 1, 0.8],
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
              rotate: cardsRotate,
            }}
            className="space-y-6"
          >

            {videos.map((video, index) => {

              const cardParallax = useTransform(
                smoothProgress,
                [0, 1],
                [index * 30, -(index * 20)]
              );

              return (

                <motion.div
                  key={index}
                  style={{
                    y: cardParallax,
                  }}
                  initial={{
                    opacity: 0,
                    x: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    rotateX: 6,
                    rotateY: -6,
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
                          group-hover:scale-125
                          group-hover:rotate-2
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
                      />

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

              );

            })}

          </motion.div>

        </motion.div>

      </div>

    </motion.section>
  );
}