import { CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface SplitBannerProps {
  image: string;

  title: string;
  description: string;
  achievements: string[];

  rightTitle: string;
  rightDescription: string;
  rightAchievements: string[];
}

export function SplitBanner({
  image,

  title,
  description,
  achievements,

  rightTitle,
  rightDescription,
  rightAchievements,
}: SplitBannerProps) {

  return (

    <section
      className="
        py-24
        bg-amber-200
        overflow-hidden
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >

        <div
          className="
            grid
            lg:grid-cols-3
            gap-10
            items-center
          "
        >

          {/* =====================================
              TEXTO ESQUERDA
          ===================================== */}

          <div>

            <div
              className="
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                bg-primary/10
                text-primary
                mb-6
              "
            >
              <span className="text-sm font-medium">
                Realizações
              </span>
            </div>

            <h2
              className="
                text-3xl
                lg:text-4xl
                font-black
                leading-tight
                mb-6
              "
            >
              {title}
            </h2>

            <p
              className="
                text-lg
                text-muted-foreground
                leading-relaxed
                mb-8
              "
            >
              {description}
            </p>

            <div className="space-y-5">

              {achievements.map((achievement, index) => (

                <div
                  key={index}
                  className="
                    flex
                    items-start
                    gap-4
                  "
                >

                  <div
                    className="
                      w-7
                      h-7
                      rounded-full
                      bg-green-100
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
                      mt-1
                    "
                  >

                    <CheckCircle2
                      className="
                        w-4
                        h-4
                        text-green-600
                      "
                    />

                  </div>

                  <p
                    className="
                      text-base
                      leading-relaxed
                    "
                  >
                    {achievement}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* =====================================
              IMAGEM CENTRO
          ===================================== */}

          <div
            className="
              relative
              flex
              justify-center
            "
          >

            <div
              className="
                relative
                w-full
                h-[500px]
                rounded-[32px]
                overflow-hidden
                shadow-2xl
              "
            >

              <ImageWithFallback
                src={image}
                alt={title}
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/30
                  to-transparent
                "
              />

            </div>

          </div>

          {/* =====================================
              TEXTO DIREITA
          ===================================== */}

          <div>

            <div
              className="
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                bg-primary/10
                text-primary
                mb-6
              "
            >
              <span className="text-sm font-medium">
                Impactos
              </span>
            </div>

            <h2
              className="
                text-3xl
                lg:text-4xl
                font-black
                leading-tight
                mb-6
              "
            >
              {rightTitle}
            </h2>

            <p
              className="
                text-lg
                text-muted-foreground
                leading-relaxed
                mb-8
              "
            >
              {rightDescription}
            </p>

            <div className="space-y-5">

              {rightAchievements.map((achievement, index) => (

                <div
                  key={index}
                  className="
                    flex
                    items-start
                    gap-4
                  "
                >

                  <div
                    className="
                      w-7
                      h-7
                      rounded-full
                      bg-blue-100
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
                      mt-1
                    "
                  >

                    <CheckCircle2
                      className="
                        w-4
                        h-4
                        text-blue-600
                      "
                    />

                  </div>

                  <p
                    className="
                      text-base
                      leading-relaxed
                    "
                  >
                    {achievement}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}