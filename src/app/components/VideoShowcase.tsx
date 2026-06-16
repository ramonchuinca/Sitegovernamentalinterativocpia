import { Play, Volume2 } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false)

  const videos = [
    {
      title: 'Como Pedir Ajuda',
      description: 'Novo complexo educacional moderno',
      image: '/src/app/components/figma/gif maos.gif',
    },
    {
      title: 'De forma discreta, abra a palma da mão',
      description: '',
      image: '/src/app/components/figma/mao01.png',
    },
    {
      title: 'Dobre o polegar para dentro',
      description: '',
      image: '/src/app/components/figma/mao02.png',
    },
    {
      title: 'Feche os outros dedos por cima',
      description: '',
      image: '/src/app/components/figma/mao03.png',
    },
  ]

  return (
    <section className="relative py-24 overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/src/app/components/figma/base mulher copy.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#12223A]/70 via-[#12223A]/80 to-[#0B1628]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-center mb-16"
        >
          <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 mb-6">
            <span className="text-sm uppercase tracking-[0.2em]">
              Vídeo Exclusivo
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black leading-tight mb-6">
            Um gesto simples que pode mudar o fim da sua história
          </h2>

          <p className="text-blue-100/80 text-lg max-w-3xl mx-auto">
            Saiba como pedir ajuda
          </p>
        </div>

        {/* Conteúdo */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Vídeo */}
          <motion.div
            data-aos="zoom-in"
            data-aos-duration="1000"
            whileHover={{ scale: 1.02 }}
            className="
    relative
    aspect-video
    rounded-3xl
    overflow-hidden
    border
    border-white/10
    shadow-xl
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
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-black/40" />

                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div
                    className="
                      w-20
                      h-20
                      rounded-full
                      bg-white/20
                      backdrop-blur-md
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Play className="w-10 h-10 ml-1" />
                  </div>
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

          {/* Cards */}
          <div className="space-y-6">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-delay={100 + index * 150}
                data-aos-duration="800"
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
    bg-white/[0.06]
    border
    border-white/10
    rounded-3xl
    p-5
    transition-all
    duration-300
    backdrop-blur-sm
  "
              >
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                    <img
                      src={video.image}
                      alt={video.title}
                      className="
        w-full
        h-full
        object-cover
        transition-transform
        duration-500
        hover:scale-105
      "
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-semibold mb-2">
                      {video.title}
                    </h4>

                    {video.description && (
                      <p className="text-blue-100/70 mb-3">
                        {video.description}
                      </p>
                    )}

                    <div className="flex items-center gap-2 text-sm text-blue-200/60">
                      <Volume2 className="w-4 h-4" />
                      <span>4:30 min</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}