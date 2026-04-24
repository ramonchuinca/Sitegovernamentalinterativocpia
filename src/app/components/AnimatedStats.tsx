import { useEffect, useState, useRef } from 'react';
import { TrendingUp, Users, Building2, DollarSign } from 'lucide-react';

export function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Building2,
      target: 87,
      suffix: '',
      label: 'Obras Concluídas',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      target: 24,
      suffix: '',
      label: 'Projetos em Andamento',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      target: 50000,
      suffix: '+',
      label: 'Pessoas Beneficiadas',
      color: 'from-purple-500 to-indigo-500',
      format: true
    },
    {
      icon: DollarSign,
      target: 45,
      suffix: 'M',
      prefix: 'R$ ',
      label: 'Investimento Total',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">Números que Falam Por Si</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Resultados concretos do trabalho que está transformando nossa cidade
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 shadow-2xl`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl mb-2">
                  <AnimatedCounter
                    target={stat.target}
                    isVisible={isVisible}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    format={stat.format}
                  />
                </div>
                <div className="text-base text-white/80">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({
  target,
  isVisible,
  prefix = '',
  suffix = '',
  format = false
}: {
  target: number;
  isVisible: boolean;
  prefix?: string;
  suffix?: string;
  format?: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  const formatNumber = (num: number) => {
    if (format) {
      return num.toLocaleString('pt-BR');
    }
    return num.toString();
  };

  return (
    <span>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}
