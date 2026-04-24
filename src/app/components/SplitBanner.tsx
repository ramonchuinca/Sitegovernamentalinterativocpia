import { ImageWithFallback } from './ImageWithFallback';
import { CheckCircle2 } from 'lucide-react';

interface SplitBannerProps {
  image: string;
  title: string;
  description: string;
  achievements: string[];
  imagePosition?: 'left' | 'right';
  accentColor?: string;
}

export function SplitBanner({
  image,
  title,
  description,
  achievements,
  imagePosition = 'left',
  accentColor = 'primary'
}: SplitBannerProps) {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`${imagePosition === 'right' ? 'lg:order-2' : ''}`}>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          <div className={`${imagePosition === 'right' ? 'lg:order-1' : ''}`}>
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
              <span className="text-sm">Realizações</span>
            </div>

            <h2 className="text-3xl sm:text-4xl mb-6">{title}</h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-base">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
