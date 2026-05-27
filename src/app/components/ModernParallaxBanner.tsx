import { motion } from 'framer-motion';

interface ModernParallaxBannerProps {
  desktopImage: string;
  mobileImage: string;
  title: string;
  highlight: string;
  description: string;
}

export function ModernParallaxBanner({
  desktopImage,
  mobileImage,
  title,
  highlight,
  description,
}: ModernParallaxBannerProps) {

  return (

    <section
      className="
        relative
        h-[620px]
        sm:h-[700px]
        lg:h-[850px]
        min-h-[600px]
        overflow-hidden
      "
    >

      {/* ========================================
          BACKGROUND
      ======================================== */}

      <motion.div
        initial={{
          scale: 1.15,
        }}
        whileInView={{
          scale: 1,
        }}
        transition={{
          duration: 2.5,
          ease: 'easeOut',
        }}
        viewport={{
          once: false,
        }}
        className="absolute inset-0"
      >

        <picture>

          {/* MOBILE */}
          <source
            media="(max-width: 768px)"
            srcSet={mobileImage}
          />

          {/* DESKTOP */}
          <source
            media="(min-width: 769px)"
            srcSet={desktopImage}
          />

          {/* DEFAULT */}
          <img
            src={desktopImage}
            alt={title}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-contain
              lg:object-cover
              object-center
              scale-105
            "
          />

        </picture>

        {/* ========================================
            OVERLAY
        ======================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#020817]/70
            via-[#071426]/75
            to-[#071426]/40
          "
        />

        {/* ========================================
            LIGHT EFFECT
        ======================================== */}

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            -top-20
            -left-20
            w-[700px]
            h-[700px]
            bg-cyan-500/20
            blur-[140px]
            rounded-full
          "
        />

        {/* DARK VIGNETTE */}

        <div
          className="
            absolute
            inset-0
            bg-black/20
          "
        />

      </motion.div>

      {/* ========================================
          CONTENT
      ======================================== */}

      <div
        className="
          relative
          z-10
          h-full
          flex
          items-center
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            lg:px-12
            w-full
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
            }}
            viewport={{
              once: false,
            }}
            className="
              max-w-3xl
            "
          >

            {/* ========================================
                BADGE
            ======================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="
                inline-flex
                items-center
                gap-3
                px-6
                py-3
                rounded-full
                bg-white/10
                border
                border-white/10
                backdrop-blur-2xl
                mb-8
                shadow-[0_10px_40px_rgba(0,0,0,0.25)]
              "
            >

              <div
                className="
                  w-2.5
                  h-2.5
                  rounded-full
                  bg-cyan-400
                  animate-pulse
                "
              />

              <span
                className="
                  text-white
                  uppercase
                  tracking-[0.25em]
                  text-xs
                  sm:text-sm
                  font-semibold
                "
              >
                {highlight}
              </span>

            </motion.div>

            {/* ========================================
                TITLE
            ======================================== */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
              className="
                text-4xl
                sm:text-5xl
                lg:text-7xl
                font-black
                text-white
                leading-[0.95]
                tracking-[-0.05em]
                mb-8
                drop-shadow-2xl
              "
            >
              {title}
            </motion.h2>

            {/* ========================================
                DESCRIPTION
            ======================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
              className="
                text-lg
                sm:text-xl
                text-white/85
                leading-relaxed
                max-w-2xl
                font-light
              "
            >
              {description}
            </motion.p>

            {/* ========================================
                BUTTONS
            ======================================== */}

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
                duration: 1,
                delay: 0.7,
              }}
              className="
                flex
                flex-wrap
                gap-4
                mt-10
              "
            >

              {/* BUTTON 1 */}

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  px-8
                  py-4
                  rounded-2xl
                  bg-cyan-500
                  hover:bg-cyan-400
                  text-white
                  font-semibold
                  transition-all
                  duration-300
                  shadow-[0_10px_40px_rgba(6,182,212,0.35)]
                "
              >
                Saiba Mais
              </motion.button>

              {/* BUTTON 2 */}

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  px-8
                  py-4
                  rounded-2xl
                  bg-white/10
                  hover:bg-white/20
                  border
                  border-white/10
                  backdrop-blur-xl
                  text-white
                  font-semibold
                  transition-all
                  duration-300
                "
              >
                Ver Obras
              </motion.button>

            </motion.div>

          </motion.div>

        </div>

      </div>

      {/* ========================================
          BOTTOM GRADIENT
      ======================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-52
          bg-gradient-to-t
          from-[#020817]
          via-[#020817]/70
          to-transparent
        "
      />

    </section>

  );
}

