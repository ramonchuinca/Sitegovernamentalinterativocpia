import { Header } from './components/Header';
import { Hero } from './components/Hero';
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

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <Impact />

      <ImpactBanner
        image="https://images.unsplash.com/photo-1690306816872-91063f6de36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        title="Saúde de Qualidade Para Todos"
        subtitle="Investindo em infraestrutura médica moderna e profissionais capacitados para cuidar da nossa gente"
        overlay="gradient"
        stats={[
          { label: 'UBS Reformadas', value: '15' },
          { label: 'Novos Leitos', value: '200' },
          { label: 'Atendimentos/Mês', value: '45mil' }
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