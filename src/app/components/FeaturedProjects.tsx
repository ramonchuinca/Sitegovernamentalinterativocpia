import { MapPin, ArrowRight } from 'lucide-react';
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
      title: 'Centro Educacional Integrado',
      location: 'Zona Norte',
      image:
        'https://images.unsplash.com/photo-1762536859942-8076505f7c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      progress: 60,
      investment: 'R$ 5.8M',
      impact: '1.500 alunos beneficiados',
      status: 'Em construção acelerada',

      topics: [
        'Novas salas tecnológicas',
        'Espaços climatizados',
        'Quadra poliesportiva',
        'Biblioteca moderna',
      ],
    },

    {
      title: 'Parque Linear Sustentável',
      location: 'Centro',
      image:
        'https://images.unsplash.com/photo-1760963720238-bf7086d039d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      progress: 45,
      investment: 'R$ 3.2M',
      impact: '20 hectares de área verde',
      status: 'Fase de paisagismo',

      topics: [
        'Áreas de lazer',
        'Pistas de caminhada',
        'Iluminação sustentável',
        'Espaços de convivência',
      ],
    },
  ];

  return (

    <section className="py-20 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}

        <div className="text-center mb-20">

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

        </div>

        {/* PROJECTS */}

        <div className="space-y-14">

          {projects.map((project, index) => (

            <div
              key={project.title}
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

                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-105
                      transition-transform
                      duration-700
                    "
                  />

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

                  <h3
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
                  </h3>

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

                      <div
                        key={topicIndex}
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

                      </div>

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

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}