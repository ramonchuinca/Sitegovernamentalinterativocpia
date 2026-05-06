import { Heart, Users, Building2, Leaf } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export function Impact() {
  const impacts = [
    {
      icon: Heart,
      number: '15+',
      label: 'Unidades de Saúde',
      description: 'Reformadas e ampliadas',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Users,
      number: '50mil+',
      label: 'Pessoas Beneficiadas',
      description: 'Diretamente pelas obras',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Building2,
      number: '30+',
      label: 'Escolas Modernizadas',
      description: 'Melhor educação para todos',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Leaf,
      number: '100%',
      label: 'Sustentabilidade',
      description: 'Projetos eco-friendly',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            <span className="text-sm">
              Impacto Real na Comunidade
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Transformando Vidas Todos os Dias
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada obra representa uma melhoria concreta na qualidade
            de vida dos nossos cidadãos
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

          {/* IMAGEM */}
          <div className="relative h-[350px] sm:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-[#1e2a5a]">

            <ImageWithFallback
              src="/src/app/components/figma/THUMBNAIL SITE copy.webp"
              alt="Comunidade feliz no parque"
              className="
                w-full
                h-full
                object-contain
                object-center
                select-none
              "
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 pointer-events-none" />

            {/* GLOW */}
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />

            {/* TEXTO */}
            <div className="absolute bottom-6 left-6 z-20 text-white px-2">

              <p className="text-lg sm:text-xl font-semibold mb-1">
                Praça da Matriz - Revitalizada
              </p>

              <p className="text-sm sm:text-base text-white/80 max-w-sm">
                Um novo espaço moderno de convivência,
                lazer e integração para toda a comunidade.
              </p>

            </div>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {impacts.map((impact) => {
              const Icon = impact.icon;

              return (
                <div
                  key={impact.label}
                  className="
                    group
                    bg-white
                    rounded-2xl
                    p-6
                    shadow-lg
                    border
                    border-border
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-2xl
                    cursor-pointer
                  "
                >

                  {/* ÍCONE */}
                  <div
                    className={`
                      w-14
                      h-14
                      rounded-xl
                      bg-gradient-to-br
                      ${impact.color}
                      flex
                      items-center
                      justify-center
                      mb-4
                      shadow-lg
                      group-hover:scale-110
                      transition-transform
                      duration-500
                    `}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* NÚMERO */}
                  <div className="text-4xl font-bold mb-2">
                    {impact.number}
                  </div>

                  {/* TÍTULO */}
                  <div className="text-base font-semibold mb-1">
                    {impact.label}
                  </div>

                  {/* DESCRIÇÃO */}
                  <p className="text-sm text-muted-foreground">
                    {impact.description}
                  </p>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}