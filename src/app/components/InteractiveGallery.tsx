import { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';

import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  X,
} from 'lucide-react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(
  ScrollTrigger,
  SplitText
);

export function InteractiveGallery() {

  const badgeRef =
    useRef<HTMLDivElement>(null);

  const [selectedCard, setSelectedCard] =
    useState<number | null>(null);

  const carouselRef =
    useRef<HTMLDivElement>(null);

  const titleRef =
    useRef<HTMLHeadingElement>(null);

  const textRef =
    useRef<HTMLParagraphElement>(null);

  const autoScrollRef =
    useRef<ReturnType<typeof setInterval> | null>(null);

  const isHoveringRef =
    useRef(false);

  const cards = [

    {
      image:
        '/src/app/components/figma/cafe-robustakkk.jpg',

      category: 'Agronegócio',

      title:
        'Café Robusta Amazônico é elevado a patrimônio cultural de Rondônia',

      text:
        'O Café Robusta Amazônico recebeu reconhecimento como patrimônio cultural e imaterial do estado, fortalecendo a identidade, produção e valorização da cafeicultura rondoniense.',

      badge: 'Patrimônio Cultural',

      link:
        'https://rondonia.ro.gov.br/cafe-robusta-amazonico-e-elevado-a-patrimonio-cultural-e-imaterial-do-estado-de-rondonia/',
    },

    {
      image:
        '/src/app/components/figma/Sedec_29.05.24_Foto_Daiane-Mendonca-2.jpg',

      category: 'Emprego',

      title:
        'Com 2,3% de desemprego, Rondônia mantém segunda menor taxa do país',

      text:
        'Rondônia segue entre os estados com menor índice de desemprego do Brasil, impulsionando o mercado de trabalho, geração de renda e novas oportunidades para a população.',

      badge: '2º Menor Desemprego',

      link:
        'https://rondonia.ro.gov.br/com-23-de-desemprego-rondonia-mantem-segunda-menor-taxa-do-pais-e-impulsiona-mercado-de-trabalho/',
    },

    {
      image:
        '/src/app/components/figma/policial civil imagem.jpg',

      category: 'Segurança',

      title:
        'Rondônia se torna referência nacional com 92% de homicídios esclarecidos',

      text:
        'O estado alcançou destaque nacional com 92% dos homicídios esclarecidos, fortalecendo a segurança pública por meio de investigação, inteligência e integração das forças policiais.',

      badge: 'Referência Nacional',

      link:
        'https://rondonia.ro.gov.br/rondonia-se-torna-referencia-nacional-com-92-de-homicidios-esclarecidos/',
    },

    {
      image:
        '/src/app/components/figma/queimadas(23).jpg',

      category: 'Meio Ambiente',

      title:
        'Rondônia alcança redução histórica nas queimadas e lidera ranking nacional',

      text:
        'O estado alcançou uma redução histórica nos focos de queimadas, tornando-se referência nacional em ações de prevenção, fiscalização e preservação ambiental.',

      badge: 'Líder Nacional',

      link:
        'https://rondonia.ro.gov.br/rondonia-alcanca-reducao-historica-nas-queimadas-e-lidera-ranking-nacional/',
    },

    {
      image:
        '/src/app/components/figma/tio do buzu.jpg',

      category: 'Emprego e Desenvolvimento',

      title:
        'Governo de RO oferece mais de 33 mil vagas de emprego com empresas parceiras',

      text:
        'Com mais de 6.500 empresas parceiras, Rondônia amplia oportunidades de trabalho e fortalece o desenvolvimento econômico em diversas regiões do estado.',

      badge: '+33 Mil Vagas',

      link:
        'https://rondonia.ro.gov.br/com-6571-empresas-parceiras-o-governo-de-ro-oferece-mais-de-33-mil-vagas-de-emprego/',
    },

    {
      image:
        '/src/app/components/figma/patrulha de policia.jpeg',

      category: 'Segurança Pública',

      title:
        'Reestruturação da Patrulha Maria da Penha amplia proteção às mulheres em Rondônia',

      text:
        'A nova estrutura da Patrulha Maria da Penha fortaleceu o atendimento às mulheres em situação de vulnerabilidade, ampliando ações de proteção, monitoramento e suporte em Rondônia.',

      badge: 'Proteção às Mulheres',

      link:
        'https://rondonia.ro.gov.br/reestruturacao-da-patrulha-maria-da-penha-amplia-protecao-as-mulheres-em-rondonia/',
    },
  ];

  // =========================================
  // ANIMAÇÕES
  // =========================================

  useEffect(() => {

    const container = carouselRef.current;

    if (
      !container ||
      !titleRef.current ||
      !textRef.current
    ) return;

    // =========================
    // AUTO CAROUSEL
    // =========================

    const startAutoScroll = () => {

      stopAutoScroll();

      autoScrollRef.current =
        setInterval(() => {

          if (
            !container ||
            isHoveringRef.current
          ) return;

          container.scrollLeft += 1;

          if (
            container.scrollLeft >=
            container.scrollWidth / 2
          ) {

            container.scrollLeft = 0;
          }

        }, 15);
    };

    const stopAutoScroll = () => {

      if (autoScrollRef.current) {

        clearInterval(
          autoScrollRef.current
        );

        autoScrollRef.current = null;
      }
    };

    const handleMouseEnter = () => {

      isHoveringRef.current = true;
    };

    const handleMouseLeave = () => {

      isHoveringRef.current = false;
    };

    startAutoScroll();

    container.addEventListener(
      'mouseenter',
      handleMouseEnter
    );

    container.addEventListener(
      'mouseleave',
      handleMouseLeave
    );

    // =========================
    // SPLIT TEXT
    // =========================

    const splitTitle = new SplitText(
      titleRef.current,
      {
        type: 'lines,words',
        linesClass: 'line',
      }
    );

    const splitText = new SplitText(
      textRef.current,
      {
        type: 'lines',
        linesClass: 'line',
      }
    );

    gsap.set(
      [
        splitTitle.lines,
        splitText.lines,
      ],
      {
        overflow: 'hidden',
      }
    );

    gsap.from(
      splitTitle.words,
      {
        y: 120,
        opacity: 0,
        rotateX: -90,
        stagger: 0.03,
        duration: 1.3,
        ease: 'expo.out',

        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions:
            'play none none reset',
        },
      }
    );

    gsap.from(
      splitText.lines,
      {
        yPercent: 100,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        ease: 'power4.out',

        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 90%',
          toggleActions:
            'play none none reset',
        },
      }
    );

    // =========================
    // BADGE
    // =========================

    if (badgeRef.current) {

      gsap.from(
        badgeRef.current,
        {
          opacity: 0,
          y: -30,
          scale: 0.8,
          duration: 1,
          ease: 'back.out(1.8)',

          scrollTrigger: {
            trigger: badgeRef.current,
            start: 'top 90%',
            toggleActions:
              'play none none reset',
          },
        }
      );
    }

    // =========================
    // CARDS
    // =========================

    gsap.utils
      .toArray('.floating-card')
      .forEach((card: any, i) => {

        gsap.from(card, {

          opacity: 0,
          y: 120,
          scale: 0.9,
          rotateY: 10,

          duration: 1.2,

          ease: 'power4.out',

          delay: i * 0.08,

          scrollTrigger: {

            trigger: card,

            start: 'top 90%',

            toggleActions:
              'play none none reset',
          },
        });

        // FLOAT EFFECT

        gsap.to(card, {

          y: -15,

          duration:
            2 + Math.random() * 2,

          repeat: -1,

          yoyo: true,

          ease: 'sine.inOut',
        });
      });

    // =========================
    // CLEANUP
    // =========================

    return () => {

      stopAutoScroll();

      container.removeEventListener(
        'mouseenter',
        handleMouseEnter
      );

      container.removeEventListener(
        'mouseleave',
        handleMouseLeave
      );

      ScrollTrigger
        .getAll()
        .forEach((trigger) =>
          trigger.kill()
        );

      splitTitle.revert();

      splitText.revert();
    };

  }, []);

  // =========================================
  // SCROLL BOTÕES
  // =========================================

  const scroll = (
    direction: 'left' | 'right'
  ) => {

    const container =
      carouselRef.current;

    if (!container) return;

    const amount =
      direction === 'left'
        ? -450
        : 450;

    container.scrollBy({

      left: amount,

      behavior: 'smooth',
    });
  };

  return (

    <section
      className="
        relative
        py-28
        overflow-hidden
        bg-[#020817]
      "
    >

      {/* BG */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.18),transparent_45%)]
        "
      />

      <div
        className="
          absolute
          top-[-200px]
          left-[-200px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      <div
        className="
          relative
          z-10
          max-w-[1800px]
          mx-auto
        "
      >

        {/* HEADER */}

        <div className="text-center mb-20 px-4">

          <div
            ref={badgeRef}
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-400/20
              text-cyan-300
              mb-6
              backdrop-blur-xl
            "
          >

            <div
              className="
                w-2
                h-2
                rounded-full
                bg-cyan-400
                animate-pulse
              "
            />

            <span
              className="
                uppercase
                tracking-[0.25em]
                text-sm
              "
            >
              Rondônia em Destaque
            </span>

          </div>

          <h2
            ref={titleRef}
            className="
              text-4xl
              sm:text-5xl
              lg:text-7xl
              font-black
              text-white
              mb-6
              leading-[1]
            "
          >
            Grandes ações que estão
            transformando Rondônia
          </h2>

          <p
            ref={textRef}
            className="
              max-w-3xl
              mx-auto
              text-white/70
              text-lg
              leading-relaxed
            "
          >
            Conheça projetos, ações e investimentos
            que estão impactando diretamente a vida
            da população.
          </p>

        </div>

        {/* BOTÕES */}

        <div
          className="
            absolute
            right-8
            top-[200px]
            z-30
            flex
            gap-4
          "
        >

        </div>

        {/* CAROUSEL */}

        <div
          ref={carouselRef}
          className="
            flex
            gap-8
            overflow-x-auto
            px-6
            pb-10
            hide-scrollbar
            scroll-smooth
          "
        >

          {[...cards, ...cards].map((card, index) => (

            <div
              key={index}

              className="
                floating-card
                group
                relative
                min-w-[390px]
                max-w-[390px]
                rounded-[36px]
                overflow-hidden
                bg-white/[0.04]
                border
                border-white/10
                backdrop-blur-2xl
                transition-all
                duration-700
                hover:-translate-y-5
                hover:scale-[1.02]
                hover:border-cyan-400/30
                hover:shadow-[0_35px_120px_rgba(6,182,212,0.25)]
              "
            >

              {/* LIGHT */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-700
                  bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.25),transparent_60%)]
                  pointer-events-none
                "
              />

              {/* IMAGE */}

              <div className="relative h-[340px] overflow-hidden">

                <img
                  src={card.image}
                  alt={card.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-1000
                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#020817]
                    via-black/20
                    to-transparent
                  "
                />

                {/* BADGE */}

                <div
                  className="
                    absolute
                    top-5
                    left-5
                    px-4
                    py-2
                    rounded-full
                    bg-white/10
                    border
                    border-white/10
                    backdrop-blur-xl
                    text-white
                    text-xs
                    uppercase
                    tracking-[0.15em]
                  "
                >
                  {card.badge}
                </div>

              </div>

              {/* CONTENT */}

              <div className="p-8">

                <p
                  className="
                    text-cyan-300
                    uppercase
                    tracking-[0.25em]
                    text-sm
                    mb-4
                  "
                >
                  {card.category}
                </p>

                <h3
                  className="
                    text-2xl
                    font-black
                    text-white
                    leading-tight
                    mb-4
                  "
                >
                  {card.title}
                </h3>

                <p
                  className="
                    text-white/70
                    leading-relaxed
                    mb-7
                  "
                >
                  {card.text}
                </p>

                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) =>
                    e.stopPropagation()
                  }
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-cyan-300
                    font-semibold
                    group-hover:gap-4
                    transition-all
                  "
                >

                  <span>Ver mais</span>

                  <ArrowRight className="w-5 h-5" />

                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* MODAL */}

      {selectedCard !== null && (

        <div
          className="
            fixed
            inset-0
            z-50
            bg-black/90
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-4
          "
          onClick={() =>
            setSelectedCard(null)
          }
        >

          <button
            onClick={() =>
              setSelectedCard(null)
            }
            className="
              absolute
              top-6
              right-6
              w-14
              h-14
              rounded-full
              bg-white/10
              hover:bg-white/20
              flex
              items-center
              justify-center
            "
          >

            <X className="w-7 h-7 text-white" />

          </button>

        </div>

      )}

      <style>{`

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

      `}</style>

    </section>
  );
}