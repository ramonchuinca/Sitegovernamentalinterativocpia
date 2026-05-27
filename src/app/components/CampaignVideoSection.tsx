'use client'

import { motion } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'

interface CampaignVideoSectionProps {
  title: string
  description: string
  videoId: string
}

export function CampaignVideoSection({
  title,
  description,
  videoId,
}: CampaignVideoSectionProps) {

  return (

    <section
      className="
        relative
        py-24
        overflow-hidden
        bg-[#020817]
      "
    >

      {/* FUNDO */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,#0ea5e920,transparent_35%)]
        "
      />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* GRID */}

        <div
          className="
            grid
            lg:grid-cols-2
            gap-14
            items-center
          "
        >

          {/* VIDEO */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
            }}
            viewport={{ once: false }}
            whileHover={{
              y: -8,
            }}
            className="
              relative
              rounded-[32px]
              overflow-hidden
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            "
          >

            {/* GLOW */}

            <div
              className="
                absolute
                -top-20
                -left-20
                w-52
                h-52
                bg-cyan-500/20
                blur-[120px]
                rounded-full
              "
            />

            {/* VIDEO */}

            <div className="relative aspect-video">

              <iframe
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                "
                src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />

            </div>

          </motion.div>

          {/* TEXTO */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: 'easeOut',
            }}
            viewport={{ once: false }}
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
                duration: 0.7,
                delay: 0.3,
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
                backdrop-blur-xl
                mb-8
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
                Campanha
              </span>

            </motion.div>

            {/* TITULO */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.4,
              }}
              className="
                text-3xl
                sm:text-5xl
                lg:text-6xl
                font-black
                text-white
                leading-[0.95]
                tracking-[-0.05em]
                mb-8
              "
            >
              {title}
            </motion.h2>

            {/* DESCRIÇÃO */}

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
                text-white/75
                leading-relaxed
                max-w-2xl
                mb-10
              "
            >
              {description}
            </motion.p>

            {/* BOTÕES */}

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
                delay: 0.6,
              }}
              className="
                flex
                flex-wrap
                gap-4
              "
            >

              <button
                className="
                  group
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
                  hover:scale-105
                  flex
                  items-center
                  gap-3
                "
              >
                Assistir Agora

                <ArrowRight
                  className="
                    w-5
                    h-5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </button>

              <button
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
                Saiba Mais
              </button>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>

  )

}