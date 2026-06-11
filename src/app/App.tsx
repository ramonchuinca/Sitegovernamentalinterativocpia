import { Header } from './components/Header';
import { Hero } from './components/Hero';
// import { Stats3D } from './components/Stats3D';
import { Stats } from './components/Stats';
import { Impact } from './components/Impact';
import { ImpactBanner } from './components/ImpactBanner';
import { VideoShowcase } from './components/VideoShowcase';
import { FeaturedProjects } from './components/FeaturedProjects';
import { SplitBanner } from './components/SplitBanner';
import { InteractiveGallery } from './components/InteractiveGallery';
import { News } from './components/News';
import { AudioPlayer } from './components/AudioPlayer';
import { BeforeAfter } from './components/BeforeAfter';
import { ParallaxBanner } from './components/ParallaxBanner';
import { Timeline } from './components/Timeline';
import { AnimatedStats } from './components/AnimatedStats';
import { SocialFeed } from './components/SocialFeed';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { TextAnimate } from './components/magicui/text-animate';
import { ModernParallaxBanner } from './components/ModernParallaxBanner';
import { CampaignVideoSection } from './components/CampaignVideoSection';


export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <Impact />
      {/* <Stats3D /> */}

      <ImpactBanner
        background={
          <picture>

            {/* MOBILE */}
            <source
              media="(max-width: 600px)"
              srcSet="/src/app/components/figma/mulher_vert-2.webp"
            />

            {/* DESKTOP */}
            <source
              media="(min-width: 601px)"
              srcSet="/src/app/components/figma/foto-mulher-1.webp"
            />

            {/* DEFAULT */}
            <img
              src="/src/app/components/figma/base mulher copy.webp"
              alt="obra 2"
              className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
        "
            />

          </picture>
        }
        title={
          <TextAnimate
            animation="blurInUp"
            by="word"
            className="
        text-3xl
        sm:text-4xl
        lg:text-5xl
        font-bold
        mb-4
        text-center
        leading-tight
        max-w-4xl
        mx-auto
      "
          >
            {'Quando a voz não sai, o sinal fala'}
          </TextAnimate>
        }
        subtitle={
          <TextAnimate
            animation="fadeIn"
            by="word"
            delay={0.3}
            className="
        text-lg
        sm:text-xl
        text-white/90
        text-center
        max-w-2xl
        mx-auto
      "
          >
            {'Se você vir esse sinal, não ignore. Aja com discrição'}
          </TextAnimate>
        }
        stats={[
          {
            label: 'SAIBA MAIS',
            value: '',
            link: 'https://rondoniasocial.ro.gov.br/mulherprotegida/'
          }
        ]}
      />

      <VideoShowcase />


      <ModernParallaxBanner
        desktopImage="/src/app/components/figma/1920.jpg"
        mobileImage="/src/app/components/figma/400x900.jpg"
        highlight="Mobilidade Urbana"
        title="Caminhos Mais Rápidos, Vida Melhor"
        description="A duplicação da Avenida Principal e novos corredores de ônibus vão reduzir o tempo de deslocamento em até 40%."
      />


         {/* PRIMEIRO COMPONENTE */}

      <CampaignVideoSection
  videoId="bUfdhAOg-LE"
  title="Mais de 100 mil rondonienses transformaram suas vidas"
  description="
    Em seis anos, milhares de pessoas aprenderam uma profissão,
    conquistaram oportunidades e mudaram sua realidade através
    de programas de qualificação e inclusão.
  "
/>

      <FeaturedProjects />

   <SplitBanner
  image="/src/app/components/figma/02_vista-frontal-mulher-derramando-massa.jpg"

  title="PROGRAMA VENCER"

  description="
    Capacitação que muda vidas através da qualificação
    profissional e apoio para pessoas em vulnerabilidade social.
  "

  achievements={[
    'Capacitação de 10 mil pessoas por ano',
    'Auxílio Financeiro',
    'Entrega de kit empreendedor',
    'Capacitação profissional para pessoas em vulnerabilidade social',
  ]}

  rightTitle="GERAÇÃO EMPREGO"

  rightDescription="
    A maior plataforma de empregos de Rondônia,
    conectando trabalhadores e empresas em todos
    os municípios do estado.
  "

  rightAchievements={[
    'Plataforma que conecta trabalhadores e empresas',
    'Mais de 151,5 mil currículos enviados',
    'Mais de 6,3 mil empresas parceiras',
    'Atendimento nos 52 municípios de Rondônia',
  ]}
/>

      <InteractiveGallery />

      <News />

      {/* <AudioPlayer /> */}

      {/* <BeforeAfter /> */}

      {/* <ParallaxBanner
        image="https://images.unsplash.com/photo-1708358131361-93680cf7b4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        highlight="Mobilidade Urbana"
        title="Caminhos Mais Rápidos, Vida Melhor"
        description="A duplicação da Avenida Principal e novos corredores de ônibus vão reduzir o tempo de deslocamento em até 40%, trazendo mais qualidade de vida para quem trabalha e estuda."
      /> */}

      {/* <Timeline /> */}

      <AnimatedStats />

      {/* <ImpactBanner
        image="https://images.unsplash.com/photo-1639165426340-7fd19487a7c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        title="Espaços de Lazer Para Toda Família"
        subtitle="Parques revitalizados, áreas verdes preservadas e equipamentos públicos que promovem saúde, convivência e bem-estar"
        quote="Agora meus filhos têm um lugar seguro e bonito para brincar perto de casa. Isso mudou nossa rotina completamente!"
        author="Maria Silva, moradora da Zona Norte"
        align="right"
        overlay="dark"
      /> */}

      <SocialFeed />
      <CallToAction />
      <Footer />
      <FloatingCTA />
    </div>
  );
}