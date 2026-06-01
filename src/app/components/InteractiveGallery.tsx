import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ArrowRight, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, SplitText);

// Estrutura de tipo para os Cards de notícias
interface NewsCard {
  image: string;
  category: string;
  title: string;
  text: string;
  badge: string;
  link: string;
}

// Configuração de Camadas Tridimensionais (Paralaxe)
const DEPTH_LAYERS = 5;
const IMAGES_PER_LAYER = 6;
const MAX_WIDTH = 180;
const MAX_HEIGHT = 180;

const LAYER_CONFIG = [
  { scale: 1.4, speed: 70, opacity: 1.0 },
  { scale: 1.1, speed: 45, opacity: 0.85 },
  { scale: 0.9, speed: 30, opacity: 0.7 },
  { scale: 0.7, speed: 20, opacity: 0.55 },
  { scale: 0.5, speed: 12, opacity: 0.4 }
];

export function InteractiveGallery() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  
  // Tipagem explícita do estado para aceitar o formato do Card ou null
  const [selectedCard, setSelectedCard] = useState<NewsCard | null>(null);

  const cards: NewsCard[] = [
    {
      image: '/src/app/components/figma/cafe-robustakkk.jpg',
      category: 'Agronegócio',
      title: 'Café Robusta Amazônico é elevado a patrimônio cultural de Rondônia',
      text: 'O Café Robusta Amazônico recebeu reconhecimento como patrimônio cultural e imaterial do estado, fortalecendo a identidade, produção e valorização da cafeicultura rondoniense.',
      badge: 'Patrimônio Cultural',
      link: 'https://rondonia.ro.gov.br/cafe-robusta-amazonico-e-elevado-a-patrimonio-cultural-e-imaterial-do-estado-de-rondonia/',
    },
    {
      image: '/src/app/components/figma/Sedec_29.05.24_Foto_Daiane-Mendonca-2.jpg',
      category: 'Emprego',
      title: 'Com 2,3% de desemprego, Rondônia mantém segunda menor taxa do país',
      text: 'Rondônia segue entre os estados com menor índice de desemprego do Brasil, impulsionando o mercado de trabalho, geração de renda e novas oportunidades para a população.',
      badge: '2º Menor Desemprego',
      link: 'https://rondonia.ro.gov.br/com-23-de-desemprego-rondonia-mantem-segunda-menor-taxa-do-pais-e-impulsiona-mercado-de-trabalho/',
    },
    {
      image: '/src/app/components/figma/policial civil imagem.jpg',
      category: 'Segurança',
      title: 'Rondônia se torna referência nacional com 92% de homicídios esclarecidos',
      text: 'O estado alcançou destaque nacional com 92% dos homicídios esclarecidos, fortalecendo a segurança pública por meio de investigação, inteligência e integração das forças policiais.',
      badge: 'Referência Nacional',
      link: 'https://rondonia.ro.gov.br/rondonia-se-torna-referencia-nacional-com-92-de-homicidios-esclarecidos/',
    },
    {
      image: '/src/app/components/figma/queimadas(23).jpg',
      category: 'Meio Ambiente',
      title: 'Rondônia alcança redução histórica nas queimadas e lidera ranking nacional',
      text: 'O estado alcançou uma redução histórica nos focos de queimadas, tornando-se referência nacional em ações de prevenção, fiscalização e preservação ambiental.',
      badge: 'Líder Nacional',
      link: 'https://rondonia.ro.gov.br/rondonia-alcanca-reducao-historica-nas-queimadas-e-lidera-ranking-nacional/',
    },
    {
      image: '/src/app/components/figma/tio do buzu.jpg',
      category: 'Emprego e Desenvolvimento',
      title: 'Governo de RO oferece mais de 33 mil vagas de emprego com empresas parceiras',
      text: 'Com mais de 6.500 empresas parceiras, Rondônia amplia oportunidades de trabalho e fortalece o desenvolvimento econômico em diversas regiões do estado.',
      badge: '+33 Mil Vagas',
      link: 'https://rondonia.ro.gov.br/com-6571-empresas-parceiras-o-governo-de-ro-oferece-mais-de-33-mil-vagas-de-emprego/',
    },
    {
      image: '/src/app/components/figma/patrulha de policia.jpeg',
      category: 'Segurança Pública',
      title: 'Reestruturação da Patrulha Maria da Penha amplia proteção às mulheres em Rondônia',
      text: 'A nova estrutura da Patrulha Maria da Penha fortaleceu o atendimento às mulheres em situação de vulnerabilidade, ampliando ações de proteção, monitoramento e suporte em Rondônia.',
      badge: 'Proteção às Mulheres',
      link: 'https://rondonia.ro.gov.br/reestruturacao-da-patrulha-maria-da-penha-amplia-protecao-as-mulheres-em-rondonia/',
    },
  ];

  // ==========================================================
  // MOTOR THREE.JS (INTERATIVIDADE E PARALAXE INFINITO)
  // ==========================================================
  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    
    const w = container.clientWidth;
    const h = container.clientHeight;
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    const camera = new THREE.OrthographicCamera(0, w, h, 0, -1000, 1000);
    camera.position.z = 10;

    const layers: THREE.Sprite[][] = Array.from({ length: DEPTH_LAYERS }, () => []);
    const textures: THREE.Texture[] = [];
    let dragActive = false;
    let lastX = 0;
    let dragVelocity = 0;
    let speedFactor = 1;
    let lastTime = performance.now();
    let animationFrameId: number;

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    // Carregamento de Texturas Dinâmicas
    const loader = new THREE.TextureLoader();
    loader.crossOrigin = "anonymous";

    let loadedCount = 0;

    cards.forEach((card) => {
      // CORREÇÃO: Adicionada tipagem explícita ': THREE.Texture' no retorno do loader
      loader.load(card.image, (tex: THREE.Texture) => {
        textures.push(tex);
        loadedCount++;
        if (loadedCount === cards.length) {
          initSprites();
        }
      }, undefined, () => {
        // Fallback caso a imagem falhe
        const canvas = document.createElement("canvas");
        canvas.width = MAX_WIDTH; canvas.height = MAX_HEIGHT;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.fillStyle = "#1e293b";
          ctx.fillRect(0, 0, MAX_WIDTH, MAX_HEIGHT);
        }
        textures.push(new THREE.CanvasTexture(canvas));
        loadedCount++;
        if (loadedCount === cards.length) initSprites();
      });
    });

    function initSprites() {
      fillViewport();
      animate();
    }

    function addSprite(layerIndex: number, startX: number) {
      const cfg = LAYER_CONFIG[layerIndex];
      const texture = textures[Math.floor(Math.random() * textures.length)];
      if (!texture) return;

      const mat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: cfg.opacity
      });

      const sprite = new THREE.Sprite(mat);
      const sizeVar = rand(0.85, 1.15);
      const width = MAX_WIDTH * cfg.scale * sizeVar;
      const height = MAX_HEIGHT * cfg.scale * sizeVar;
      const spacing = width * rand(0.6, 1.0);

      sprite.scale.set(width, height, 1);
      sprite.position.set(
        startX + width / 2 + spacing,
        rand(height / 2, (container?.clientHeight || h) - height / 2),
        -layerIndex * 50
      );

      // Associa os dados do card original ao sprite para cliques
      const cardData = cards[Math.floor(Math.random() * cards.length)];

      sprite.userData = {
        speed: cfg.speed * rand(0.5, 1.2),
        width,
        height,
        seed: rand(0, 1000),
        baseY: sprite.position.y,
        opacity: cfg.opacity,
        cardData
      };

      layers[layerIndex].push(sprite);
      scene.add(sprite);
    }

    function fillViewport() {
      const widthContainer = container?.clientWidth || w;
      for (let l = 0; l < DEPTH_LAYERS; l++) {
        const sprites = layers[l];
        let rightMost = sprites.length > 0 ? Math.max(...sprites.map(s => s.position.x + s.userData.width / 2)) : -widthContainer * 0.2;
        while (rightMost < widthContainer * 1.5) {
          addSprite(l, rightMost);
          rightMost = Math.max(...sprites.map(s => s.position.x + s.userData.width / 2));
        }
      }
    }

    function animate() {
      const now = performance.now();
      const dt = Math.min(40, now - lastTime) / 1000;
      lastTime = now;
      const widthContainer = container?.clientWidth || w;

      dragVelocity *= 0.92;
      speedFactor = dragVelocity !== 0 ? Math.sign(dragVelocity) : speedFactor;

      for (const sprites of layers) {
        for (const s of sprites) {
          const ud = s.userData;
          s.position.x += ud.speed * speedFactor * dt;

          if (speedFactor > 0 && s.position.x - ud.width / 2 > widthContainer) {
            s.position.x = -ud.width / 2 - rand(0, ud.width);
          } else if (speedFactor < 0 && s.position.x + ud.width / 2 < 0) {
            s.position.x = widthContainer + ud.width / 2 + rand(0, ud.width);
          }

          const pulse = 1 + Math.sin(now * 0.001 + ud.seed) * 0.015;
          s.scale.x = ud.width * pulse;
          s.scale.y = ud.height * pulse;
          s.position.y = ud.baseY + Math.sin(now * 0.001 + ud.seed) * 6;
        }
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    }

    // ==========================================================
    // CAPTURA DE EVENTOS CORRIGIDA E TIPADA
    // ==========================================================
    
    // Suporte correto para tipos combinados de Mouse e Touch do DOM nativo
    const getX = (e: MouseEvent | TouchEvent) => {
      if ('touches' in e) {
        return e.touches[0] ? e.touches[0].clientX : 0;
      }
      return e.clientX;
    };

    const handleMouseDown = (e: MouseEvent) => {
      dragActive = true;
      lastX = getX(e);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!dragActive) return;
      const x = getX(e);
      const dx = x - lastX;
      lastX = x;
      dragVelocity = dx * 0.03;
    };

    const handleMouseUp = () => { dragActive = false; };

    const handleWheel = (e: WheelEvent) => {
      const direction = Math.sign(e.deltaY) > 0 ? 1 : -1;
      speedFactor = direction * (Math.abs(speedFactor) + 0.8);
      speedFactor = Math.sign(speedFactor) * Math.min(6, Math.abs(speedFactor));
      dragVelocity = 0;
    };

    const handleCanvasClick = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = rect.height - (e.clientY - rect.top);

      for (let l = 0; l < DEPTH_LAYERS; l++) {
        for (const sprite of layers[l]) {
          const { x, y } = sprite.position;
          const { width, height } = sprite.userData;
          if (
            mouseX >= x - width / 2 && mouseX <= x + width / 2 &&
            mouseY >= y - height / 2 && mouseY <= y + height / 2
          ) {
            if (Math.abs(dragVelocity) < 0.05) {
              setSelectedCard(sprite.userData.cardData);
            }
            return;
          }
        }
      }
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("click", handleCanvasClick);
    container.addEventListener("wheel", handleWheel, { passive: true });

    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.right = width;
      camera.top = height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("click", handleCanvasClick);
      container.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  // ==========================================================
  // TEXT ANIMATIONS (GSAP & SCROLL TRIGGER)
  // ==========================================================
  useEffect(() => {
    if (!titleRef.current || !textRef.current) return;

    const splitTitle = new SplitText(titleRef.current, { type: 'lines,words', linesClass: 'line' });
    const splitText = new SplitText(textRef.current, { type: 'lines', linesClass: 'line' });

    gsap.set([splitTitle.lines, splitText.lines], { overflow: 'hidden' });

    gsap.from(splitTitle.words, {
      y: 120,
      opacity: 0,
      rotateX: -90,
      stagger: 0.03,
      duration: 1.3,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reset',
      },
    });

    gsap.from(splitText.lines, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.08,
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 90%',
        toggleActions: 'play none none reset',
      },
    });

    if (badgeRef.current) {
      gsap.from(badgeRef.current, {
        opacity: 0,
        y: -30,
        scale: 0.8,
        duration: 1,
        ease: 'back.out(1.8)',
        scrollTrigger: {
          trigger: badgeRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reset',
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      splitTitle.revert();
      splitText.revert();
    };
  }, []);

  return (
    <section className="relative py-28 overflow-hidden bg-[#020817] min-h-screen flex flex-col justify-between">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1800px] w-full mx-auto flex-1 flex flex-col">
        {/* HEADER */}
        <div className="text-center mb-6 px-4">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 mb-6 backdrop-blur-xl"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="uppercase tracking-[0.25em] text-sm">Rondônia em Destaque</span>
          </div>

          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.1]"
          >
            Grandes ações que estão <br /> transformando Rondônia
          </h2>

          <p
            ref={textRef}
            className="max-w-3xl mx-auto text-white/70 text-lg leading-relaxed"
          >
            Arraste para os lados ou use a roda do mouse para navegar de forma fluida pelas fotografias e clique em qualquer imagem para ver os detalhes da ação.
          </p>
        </div>

        {/* CANVAS CONTAINER */}
        <div 
          ref={canvasContainerRef} 
          className="w-full flex-1 min-h-[450px] cursor-grab active:cursor-grabbing relative select-none"
        />
      </div>

      {/* DETAILED MODAL */}
      {selectedCard !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedCard(null)}
        >
          <div 
            className="relative bg-[#0b1329] border border-white/10 rounded-[32px] overflow-hidden max-w-lg w-full shadow-2xl transform scale-100 transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center border border-white/10 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-[260px] overflow-hidden relative">
              <img src={selectedCard.image} alt={selectedCard.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] to-transparent" />
              <span className="absolute bottom-4 left-6 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs uppercase tracking-wider border border-cyan-500/30">
                {selectedCard.badge}
              </span>
            </div>

            <div className="p-8">
              <p className="text-cyan-400 text-xs uppercase tracking-[0.2em] font-medium mb-2">{selectedCard.category}</p>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">{selectedCard.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">{selectedCard.text}</p>
              
              <a
                href={selectedCard.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-300 font-semibold hover:text-cyan-100 transition-colors"
              >
                <span>Acessar portal de notícias</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}