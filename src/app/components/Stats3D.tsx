import { useEffect, useRef, useState } from 'react';
import { TrendingUp, CheckCircle, Clock, DollarSign } from 'lucide-react';
import '../../styles/stats3d.css';

export function Stats3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { icon: Clock, value: '12', label: 'Milhões', subtitle: 'Hospital' },
    { icon: CheckCircle, value: '87', label: 'Concluídas', subtitle: 'Desde 2024' },
    { icon: TrendingUp, value: '68%', label: 'Progresso', subtitle: 'Médio' },
    { icon: DollarSign, value: 'R$45M', label: 'Investimento', subtitle: 'Total' },
    { icon: Clock, value: '24', label: 'Andamento', subtitle: 'Projetos' },
  ];

  // 👇 DETECTA SCROLL
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 👇 ANIMAÇÃO DO CARROSSEL
  useEffect(() => {
  if (!isVisible) return;

  const container = containerRef.current;
  if (!container) return;

  const items = container.querySelectorAll('.item');
  const radius = 220;

  items.forEach((el, i) => {
    (el as HTMLElement).style.transform =
      `rotateY(${i * (360 / items.length)}deg) translateZ(${radius}px)`;
  });

  let angle = 0;

  // ⏳ espera animação terminar
  const start = setTimeout(() => {
    const interval = setInterval(() => {
      angle += 0.15;
      container.style.transform = `rotateY(${angle}deg)`;
    }, 16);

    return () => clearInterval(interval);
  }, 1200);

  return () => clearTimeout(start);
}, [isVisible]);

 return (
  <section ref={sectionRef} className="stats3d-wrapper">
    <div className="stats3d-scene">
      <div ref={containerRef} className="stats3d-container">
        {stats.map((stat, i) => {
          const Icon = stat.icon;

          return (
            <div
              key={i}
              className={`item ${isVisible ? 'enter' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="card">
                <div className="icon-box">
                  <Icon className="icon" />
                </div>

                <h2>{stat.value}</h2>
                <p>{stat.label}</p>
                <span>{stat.subtitle}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
}