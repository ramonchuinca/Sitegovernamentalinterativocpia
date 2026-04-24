import { ImageWithFallback } from './ImageWithFallback';
import { Quote } from 'lucide-react';

interface ImpactBannerProps {
  image: string;
  title: string;
  subtitle: string;
  quote?: string;
  author?: string;
  stats?: Array<{ label: string; value: string }>;
  align?: 'left' | 'right';
  overlay?: 'dark' | 'light' | 'gradient';
}

export function ImpactBanner({
  image,
  title,
  subtitle,
  quote,
  author,
  stats,
  align = 'left',
  overlay = 'dark'
}: ImpactBannerProps) {
  const overlayClasses = {
    dark: 'bg-black/60',
    light: 'bg-white/80',
    gradient: 'bg-gradient-to-r from-primary/95 via-primary/85 to-transparent'
  };

  return (
    <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className={`max-w-2xl text-white ${align === 'right' ? 'ml-auto text-right' : ''}`}>
          {quote && (
            <Quote className="w-12 h-12 mb-4 text-white/40" />
          )}

          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 leading-tight">
            {title}
          </h2>

          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
            {subtitle}
          </p>

          {quote && (
            <div className="border-l-4 border-white/50 pl-6 mb-8">
              <p className="text-lg italic mb-2">"{quote}"</p>
              {author && (
                <p className="text-sm text-white/80">— {author}</p>
              )}
            </div>
          )}

          {stats && stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl sm:text-3xl mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
