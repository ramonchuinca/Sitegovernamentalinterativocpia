import { ImageWithFallback } from './ImageWithFallback';

interface ParallaxBannerProps {
  image: string;
  title: string;
  highlight: string;
  description: string;
}

export function ParallaxBanner({ image, title, highlight, description }: ParallaxBannerProps) {
  return (
    <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-fixed">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/60" />
      </div>

      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-white text-sm">{highlight}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            {title}
          </h2>

          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 fill-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 L0,60 Q300,120 600,60 T1200,60 L1200,0 Z" />
        </svg>
      </div>
    </section>
  );
}
