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
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            <span className="text-sm">Impacto Real na Comunidade</span>
          </div>
          <h2 className="text-3xl sm:text-4xl mb-4">Transformando Vidas Todos os Dias</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada obra representa uma melhoria concreta na qualidade de vida dos nossos cidadãos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1774799975917-5a893e0d576a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Comunidade feliz no parque"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm mb-1">Praça da Matriz - Revitalizada</p>
              <p className="text-xs text-white/80">Um novo espaço de convivência para as famílias</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {impacts.map((impact) => {
              const Icon = impact.icon;
              return (
                <div key={impact.label} className="bg-white rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${impact.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl mb-1">{impact.number}</div>
                  <div className="text-sm mb-1">{impact.label}</div>
                  <p className="text-xs text-muted-foreground">{impact.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
