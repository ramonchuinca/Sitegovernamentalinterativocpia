import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from "framer-motion";

const imageVariants: Variants = {
  hidden: {
    scale: 1.1,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
import { ImageWithFallback } from './ImageWithFallback';

export function FeaturedProjects() {

  const projects = [
    {
      title: 'Ações de Prevenção das Queimadas',
      location: 'Rondônia',
      image: '/src/app/components/figma/Inauguração_Corpo_de_Bombeiro_de_Candeias_17062016_Fotos_MaiconLemes-25.jpg',
      progress: 85,
      investment: '+250 Militares em Campo',
      impact: 'Este ano já estamos respirando melhor!',
      status: 'Operação em andamento',
      highlight: true,

      topics: [
        'Projeto Operação Verde',
        '+250 Militares em Campo',
        'Monitoramento Aéreo',
        '+430 Atividades de Educação Ambiental',
      ],
    },

    {
      title: '2º Melhor Índice de Combate à Criminalidade',
      location: 'Rondônia',
      image: '/src/app/components/figma/policia-formando.jpg',
      progress: 92,
      investment: 'Uso de Inteligência Analítica',
      impact: 'Rondônia entre os estados com melhores resultados no combate à criminalidade.',
      status: 'Operações estratégicas em andamento',

      topics: [
        'Uso de Inteligência Analítica',
        'Serviços de Investigação e Captura',
        'Procedimentos Investigativos',
        'Ações integradas de segurança pública',
      ],
    },

    {
      title: 'Ações que Geram Trabalho',
      location: 'Rondônia',
      image: '/src/app/components/figma/trabalhador trabalho-1.webp',
      progress: 94,
      investment: '+16.800 novas empresas abertas',
      impact: '2° Estado com menor desemprego do país.',
      status: 'Mais oportunidades e geração de renda',

      topics: [
        'Plataforma Geração Emprego',
        'Programa Vencer',
        '+16.800 novas empresas abertas',
        '+3,3 mil vagas de emprego ofertadas',
      ],
    },
    {
      title: '2° Maior Produtor de Café Robusta',
      location: 'Rondônia',
      image: '/src/app/components/figma/IMAGEM DE GRÃO DE CAFE.jpg',
      progress: 88,
      investment: 'Incentivos pelo programa Plante Mais',
      impact: 'Rondônia se destaca nacionalmente pela qualidade e produção do café robusta.',
      status: 'Fortalecimento da produção cafeeira',

      topics: [
        'Incentivos pelo programa Plante Mais',
        'Incentivos pelo programa Mais Calcário',
        'Fomento ao melhoramento da bebida com o ConCafé',
        'Valorização dos produtores rurais',
      ],
    },
  ];
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const imageVariants: Variants = {
  hidden: {
    scale: 1.1,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
  return (

    <section className="py-20 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}

        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div
            className="
              inline-block
              px-5
              py-2
              bg-primary/10
              text-primary
              rounded-full
              mb-5
            "
          >
            <span className="text-sm font-medium">
              Destaques
            </span>
          </div>

          <h2
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-black
              tracking-tight
              mb-6
            "
          >
            MOTIVOS PARA SE ORGULHAR DE RONDÔNIA
          </h2>

          <p
            className="
              text-muted-foreground
              text-lg
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            Conheça ações e projetos que estão
            transformando vidas em Rondônia.
          </p>

        </motion.div>

        {/* PROJECTS */}

        <motion.div
          className="space-y-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              variants={cardVariants}
            whileHover={{
  y: -12,
  scale: 1.01,
}}
transition={{
  duration: 0.3,
}}
              className="
    group
    relative
    overflow-hidden
    rounded-[32px]
    border
    border-zinc-200
    shadow-[0_15px_50px_rgba(0,0,0,0.08)]
    bg-white
  "
            >
              <div className="grid lg:grid-cols-2">

                {/* IMAGE */}

                <div
                  className={`
        relative
        min-h-[350px]
        lg:min-h-[620px]
        overflow-hidden
        ${index % 2 === 0
                      ? 'lg:order-1'
                      : 'lg:order-2'}
      `}
                >
                  <motion.div
                    variants={imageVariants}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
           className="
  w-full
  h-full
  object-cover
  transition-all
  duration-1000
  group-hover:scale-105
"
                    />
                  </motion.div>

                  <div
                    className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-black/10
          to-transparent
        "
                  />

                  {/* STATUS */}

                  <div
                    className="
          absolute
          top-6
          left-6
        "
                  >
                    <div
                      className="
            px-4
            py-2
            rounded-full
            bg-white/15
            backdrop-blur-xl
            border
            border-white/10
            text-white
            text-sm
            font-medium
          "
                    >
                      {project.status}
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                {/* CONTENT */}

                <div
                  className={`
                    relative
                    p-8
                    lg:p-16
                    flex
                    flex-col
                    justify-center
                    bg-gradient-to-br
                    from-background
                    to-muted/30
                    ${index % 2 === 0
                      ? 'lg:order-2'
                      : 'lg:order-1'}
                  `}
                >

                  {/* LOCATION */}

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-muted-foreground
                      mb-6
                    "
                  >

                    <MapPin className="w-4 h-4" />

                    <span>{project.location}</span>

                  </div>

                  {/* TITLE */}

                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="
    text-4xl
    lg:text-5xl
    font-black
    leading-tight
    tracking-tight
    mb-6
  "
                  >
                    {project.title}
                  </motion.h3>
                  {/* DESCRIPTION */}

                  <p
                    className="
                      text-lg
                      text-muted-foreground
                      leading-relaxed
                      mb-10
                      max-w-2xl
                    "
                  >
                    {project.impact}
                  </p>

                  {/* LIST */}

                  <div className="space-y-6">

                    {project.topics?.map((topic, topicIndex) => (

                      <motion.div
                        key={topicIndex}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: topicIndex * 0.1,
                          duration: 0.4,
                        }}
                        className="
      flex
      items-start
      gap-4
    "
                      >

                        <div
                          className="
        w-3
        h-3
        rounded-full
        bg-primary
        mt-2
        flex-shrink-0
      "
                        />

                        <div>
                          <p
                            className="
          text-lg
          leading-relaxed
          font-medium
        "
                          >
                            {topic}
                          </p>
                        </div>

                      </motion.div>

                    ))}

                  </div>

                  {/* PROGRESS */}

                  <div className="mt-10">

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        mb-3
                      "
                    >

                      <span
                        className="
                          text-sm
                          text-muted-foreground
                        "
                      >
                        Andamento da ação
                      </span>

                      <span className="font-semibold">
                        {project.progress}%
                      </span>

                    </div>

                    <div
                      className="
                        h-3
                        bg-muted
                        rounded-full
                        overflow-hidden
                      "
                    >

                      <div
                        className="
                          h-full
                          bg-primary
                          rounded-full
                          transition-all
                          duration-700
                        "
                        style={{
                          width: `${project.progress}%`,
                        }}
                      />

                    </div>

                  </div>

                  {/* BUTTON */}

                  <button
                    className="
                      mt-12
                      inline-flex
                      items-center
                      gap-3
                      text-primary
                      font-semibold
                      hover:gap-5
                      transition-all
                      duration-300
                    "
                  >

                    <span>
                      Ver detalhes completos
                    </span>

                    <ArrowRight className="w-5 h-5" />

                  </button>

                </div>

              </div>

             </motion.div>

          ))}

        </motion.div>

      </div>

    </section>

  );

}