import { useEffect, useState, useRef } from 'react';
import coffee from './figma/coffee.png';
import forest from './figma/forest.png';
import lupa from './figma/lupa.png';
import shield from './figma/shield.png';


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
  image: coffee,
  target: 12,
  suffix: 'M',
  label: 'Obras no Hospital de Retaguarda',
  color: 'from-green-500 to-emerald-500'
},
{
  image: forest,
  target: 30,
  suffix: 'M',
  label: 'Obras no Aeroporto de Cacoal',
  color: 'from-[#F9EC08] to-yellow-400'
},
{
  image: lupa,
  target: 310,
  suffix: 'M',
  label: 'Obras na Estrada RO-370',
  color: 'from-purple-500 to-indigo-500',
  format: true
},
{
  image: shield,
  target: 8,
  suffix: 'M',
  label: 'Obra na Ponte RO-459',
  color: 'from-orange-500 to-red-500'
},

  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">Motivos para se</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            orgulhar de Rondônia
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
  {stats.map((stat, index) => {
    return (
      <div key={index} className="text-center">
        <div
          className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 shadow-2xl overflow-hidden`}
        >
          <img
            src={stat.image}
            alt={stat.label}
            className="w-12 h-12 object-contain"
          />
        </div>

        <div className="text-4xl lg:text-5xl mb-2">
          <AnimatedCounter
            target={stat.target}
            isVisible={isVisible}
           prefix=""
            suffix={stat.suffix}
            format={stat.format}
          />
        </div>

        <div className="text-base text-white/80">
          {stat.label}
        </div>
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
