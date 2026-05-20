import { Heart, Users, Building2, Leaf } from 'lucide-react'

import { ImageWithFallback } from './ImageWithFallback'
import { TextAnimate } from './magicui/text-animate'
import { BlurFade } from './magicui/blur-fade'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

export function Impact() {

  const impacts = [
    {
      icon: Heart,
      number: 'OBRA na RO-370',
      label: '',
      description: '',
      image: '/src/app/components/figma/01.webp',
      link: 'https://www.instagram.com/p/DV9B3rdkRRb/?hl=bg',
      color: 'from-red-500 to-pink-500'
    },

    {
      icon: Users,
      number: '+20 Pontes entregues',
      label: '',
      description: '',
      image: '/src/app/components/figma/02.webp',
      link: 'https://www.instagram.com/p/DU_jw31gYuW/?hl=bg&img_index=1',
      color: 'from-blue-500 to-cyan-500'
    },

    {
      icon: Building2,
      number: 'Obras por Rondônia ',
      label: '',
      description: '',
      image: '/src/app/components/figma/03.webp',
      link: 'https://www.instagram.com/p/DSK9OTE4QK/?hl=bg&img_index=1',
      color: 'from-purple-500 to-indigo-500'
    },

    {
      icon: Leaf,
      number: 'Praças entregues ',
      label: '',
      description: '',
      image: '/src/app/components/figma/04.webp',
      link: 'https://www.instagram.com/p/DSNF1BEZn0/?hl=bg&img_index=1',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (

    <section className="py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">

          {/* BADGE */}
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">

            <TextAnimate
              animation="blurInUp"
              by="word"
              className="
                text-sm
                text-center
                justify-center
                flex-wrap
                leading-relaxed
              "
            >
              Impacto Real na Comunidade
            </TextAnimate>

          </div>

          {/* TÍTULO */}
          <TextAnimate
            animation="blurInUp"
            by="word"
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              mb-4
              tracking-tight
              justify-center
              text-center
              leading-tight
              max-w-4xl
              mx-auto
            "
          >
            Obras que transformam vidas
          </TextAnimate>

          {/* SUBTÍTULO */}
          <TextAnimate
            animation="blurInUp"
            by="word"
            className="
              text-muted-foreground
              text-lg
              max-w-2xl
              mx-auto
              leading-relaxed
              justify-center
              text-center
            "
          >
            Porque temos um governo que se importa com a gente
          </TextAnimate>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

          {/* IMAGEM PRINCIPAL */}
          <div
            className="
              relative
              h-[350px]
              sm:h-[450px]
              lg:h-[500px]
              rounded-3xl
              overflow-hidden
              shadow-2xl
              bg-[#1e2a5a]
              cursor-pointer
              group
            "
          >

            <BlurFade delay={0.25} inView className="h-full">

              <ImageWithFallback
                src="/src/app/components/figma/THUMB GRANDE 3BI copy.webp"
                alt="Comunidade feliz no parque"
                className="
                  w-full
                  h-full
                  object-cover
                  object-center
                  select-none
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

            </BlurFade>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 pointer-events-none" />

            {/* GLOW */}
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />

            {/* TEXTO */}
            <div className="absolute bottom-6 left-6 z-20 text-white px-2">
              {/* 
              <TextAnimate
                animation="blurInUp"
                by="word"
                className="
                  text-lg
                  sm:text-xl
                  font-semibold
                  mb-1
                  text-white
                  leading-tight
                "
              >
                Praça da Matriz - Revitalizada
              </TextAnimate>

              <TextAnimate
                animation="blurInUp"
                by="word"
                className="
                  text-sm
                  sm:text-base
                  text-white/80
                  max-w-sm
                  leading-relaxed
                "
              >
                Um novo espaço moderno de convivência,
                lazer e integração para toda a comunidade.
              </TextAnimate> */}

            </div>

          </div>
{/* CARDS */}
<div className="grid grid-cols-2 gap-4">

  {impacts.map((impact, index) => {

    const Icon = impact.icon

    return (

    <Tilt
  glareEnable={true}
  glareMaxOpacity={0.2}
  scale={1.03}
  tiltMaxAngleX={10}
  tiltMaxAngleY={10}
  perspective={1200}
  transitionSpeed={1500}
  className="rounded-[26px] h-full"
>

  <motion.a
    key={impact.label}
    href={impact.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 80, rotateX: -20 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{
      duration: 0.8,
      delay: index * 0.1
    }}
    viewport={{ once: true }}
    className="
      group
      bg-white/95
      rounded-[26px]
      overflow-hidden
      border
      border-zinc-200
      shadow-[0_10px_30px_rgba(0,0,0,0.08)]
      hover:shadow-2xl
      transition-all
      duration-500
      hover:-translate-y-1
      block
      h-full
      backdrop-blur-xl
    "
  >

    {/* IMAGEM */}
    <div className="relative h-[250px] overflow-hidden">

      <BlurFade
        delay={0.15 + index * 0.1}
        inView
        className="w-full h-full"
      >

        <img
          src={impact.image}
          alt={impact.label}
          className="
            w-full
            h-full
            object-cover
            object-top
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

      </BlurFade>

      {/* OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/20
          via-transparent
          to-transparent
        "
      />

      {/* GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-white/10
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-700
        "
      />

      {/* ÍCONE */}
      <div
        className={`
          absolute
          bottom-3
          left-1
          w-10
          h-10
          rounded-xl
          bg-gradient-to-br
          ${impact.color}
          flex
          items-center
          justify-center
          shadow-lg
          z-20
          transition-transform
          duration-500
          group-hover:scale-110
          group-hover:rotate-6
        `}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>

    </div>

    {/* CONTEÚDO */}
    <div className="p-4">

      {/* NÚMERO */}
      
      <TextAnimate
        animation="blurInUp"
        by="word"
        className="
          text-4xl
          font-black
          leading-none
          tracking-tight
          text-zinc-900
          mb-2
          "
          >
        {impact.number}
      </TextAnimate>

      {/* TÍTULO */}
      <TextAnimate
        animation="blurInUp"
        by="word"
        className="
          text-[13px]
          font-bold
          text-zinc-800
          leading-snug
          mb-2
        "
      >
        {impact.label}
      </TextAnimate>

      {/* DESCRIÇÃO */}
      <TextAnimate
        animation="blurInUp"
        by="word"
        className="
          text-[11px]
          text-zinc-500
          leading-relaxed
        "
      >
        {impact.description}
      </TextAnimate>

    </div>

  </motion.a>

</Tilt>
    )
  })}



          </div>

        </div>

      </div>

    </section>

  )
}