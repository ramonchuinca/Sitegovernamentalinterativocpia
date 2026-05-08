import { Heart, Users, Building2, Leaf } from 'lucide-react'

import { ImageWithFallback } from './ImageWithFallback'
import { TextAnimate } from './magicui/text-animate'
import { BlurFade } from './magicui/blur-fade'

export function Impact() {

  const impacts = [
    {
      icon: Heart,
      number: 'RO-370',
      label: 'DE CARA NOVA',
      description: 'DE CARA NOVA',
      image: '/src/app/components/figma/01.webp',
      color: 'from-red-500 to-pink-500'
    },

    {
      icon: Users,
      number: '20+',
      label: 'O GOVRO JÁ ENTREGOU MAIS DE: 20',
      description: 'PONTES DE CONCRETO',
      image: '/src/app/components/figma/02.webp',
      color: 'from-blue-500 to-cyan-500'
    },

    {
      icon: Building2,
      number: '30+',
      label: 'Escolas Modernizadas',
      description: 'Melhor educação para todos',
      image: '/src/app/components/figma/escola.webp',
      color: 'from-purple-500 to-indigo-500'
    },

    {
      icon: Leaf,
      number: '100%',
      label: 'Sustentabilidade',
      description: 'Projetos eco-friendly',
      image: '/src/app/components/figma/sustentabilidade.webp',
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
            by="character"
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              mb-4
              tracking-tight
              justify-center
            "
          >
            Transformando Vidas Todos os Dias
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
            "
          >
            Cada obra representa uma melhoria concreta na qualidade
            de vida dos nossos cidadãos
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
                src="/src/app/components/figma/THUMBNAIL SITE copy.webp"
                alt="Comunidade feliz no parque"
                className="
                  w-full
                  h-full
                  object-contain
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

              <TextAnimate
                animation="blurInUp"
                by="character"
                className="
                  text-lg
                  sm:text-xl
                  font-semibold
                  mb-1
                  text-white
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
              </TextAnimate>

            </div>

          </div>

     {/* CARDS */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

  {impacts.map((impact, index) => {

    const Icon = impact.icon

    return (

      <div
        key={impact.label}
        className="
          group
          bg-white
          rounded-3xl
          overflow-hidden
          shadow-lg
          border
          border-border
          transition-all
          duration-500
          hover:-translate-y-2
          hover:shadow-2xl
          hover:scale-[1.02]
          cursor-pointer
        "
      >

        {/* IMAGEM DO CARD */}
        <div className="relative overflow-hidden h-52 bg-black">

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
                object-contain
                object-center
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
              from-black/60
              via-black/10
              to-transparent
            "
          />

          {/* ÍCONE SOBRE IMAGEM */}
          <div
            className={`
              absolute
              bottom-3
              left-3
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
              group-hover:scale-110
              group-hover:rotate-3
              transition-all
              duration-500
            `}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>

        </div>

        {/* CONTEÚDO */}
        <div className="p-6">

          {/* NÚMERO */}
          <TextAnimate
            animation="blurInUp"
            by="character"
            className="
              text-4xl
              font-bold
              mb-2
              tracking-tight
            "
          >
            {impact.number}
          </TextAnimate>

          {/* TÍTULO */}
          <TextAnimate
            animation="blurInUp"
            by="word"
            className="
              text-base
              font-semibold
              mb-2
              leading-snug
            "
          >
            {impact.label}
          </TextAnimate>

          {/* DESCRIÇÃO */}
          <TextAnimate
            animation="blurInUp"
            by="word"
            className="
              text-sm
              text-muted-foreground
              leading-relaxed
            "
          >
            {impact.description}
          </TextAnimate>

        </div>

      </div>

    )
  })}

</div>

        </div>

      </div>

    </section>

  )
}