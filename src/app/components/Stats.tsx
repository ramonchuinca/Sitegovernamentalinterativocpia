import { TrendingUp, CheckCircle, Clock, DollarSign } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: Clock,
      label: 'Obras em Andamento',
      value: '24',
      subtitle: 'Projetos ativos',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: CheckCircle,
      label: 'Obras Concluídas',
      value: '87',
      subtitle: 'Desde 2024',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      label: 'Progresso Médio',
      value: '68%',
      subtitle: 'Das obras atuais',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: DollarSign,
      label: 'Investimento Total',
      value: 'R$ 45M',
      subtitle: 'Em desenvolvimento',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="relative -mt-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl border border-border p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center group">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl mb-1">{stat.value}</div>
                  <div className="text-sm mb-1">{stat.label}</div>
                  <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
