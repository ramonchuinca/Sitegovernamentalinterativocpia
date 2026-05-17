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

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      {/* <Stats3D /> */}
      <Stats />
      <Impact />

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
      {'Investindo em infraestrutura médica moderna e profissionais capacitados para cuidar da nossa gente'}
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

      <FeaturedProjects />

      <SplitBanner
        image="https://images.unsplash.com/photo-1771765780945-c788a6ce4b33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
        title="Educação: O Futuro Começa Agora"
        description="Nossas escolas estão sendo transformadas com tecnologia de ponta, espaços modernos e infraestrutura que inspira o aprendizado e prepara nossos jovens para o futuro."
        achievements={[
          '30 escolas modernizadas com laboratórios de informática e ciências',
          '1.500 novos alunos atendidos no Centro Educacional Integrado',
          'Tecnologia VR e equipamentos digitais em todas as unidades',
          'Programa de capacitação contínua para 500 professores',
          'Merenda escolar de qualidade para 12 mil estudantes'
        ]}
        imagePosition="right"
      />

      <InteractiveGallery />

      <News />

      <AudioPlayer />

      <BeforeAfter />

      <ParallaxBanner
        image="https://images.unsplash.com/photo-1708358131361-93680cf7b4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        highlight="Mobilidade Urbana"
        title="Caminhos Mais Rápidos, Vida Melhor"
        description="A duplicação da Avenida Principal e novos corredores de ônibus vão reduzir o tempo de deslocamento em até 40%, trazendo mais qualidade de vida para quem trabalha e estuda."
      />

      <Timeline />

      <AnimatedStats />

      <ImpactBanner
        image="https://images.unsplash.com/photo-1639165426340-7fd19487a7c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        title="Espaços de Lazer Para Toda Família"
        subtitle="Parques revitalizados, áreas verdes preservadas e equipamentos públicos que promovem saúde, convivência e bem-estar"
        quote="Agora meus filhos têm um lugar seguro e bonito para brincar perto de casa. Isso mudou nossa rotina completamente!"
        author="Maria Silva, moradora da Zona Norte"
        align="right"
        overlay="dark"
      />

      <SocialFeed />
      <CallToAction />
      <Footer />
      <FloatingCTA />
    </div>
  );
}