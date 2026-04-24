import { Instagram, Facebook, Twitter, Heart, MessageCircle, Share2, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export function SocialFeed() {
  const posts = [
    {
      id: 1,
      platform: 'instagram',
      icon: Instagram,
      account: '@prefeituramunicipal',
      time: 'Há 2 horas',
      text: 'Visitamos as obras do novo Hospital Regional! 85% concluído e com inauguração prevista para junho. 🏥✨ #ObrasQueMudam',
      image: 'https://images.unsplash.com/photo-1769147555720-71fc71bfc216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      likes: 1248,
      comments: 87,
      shares: 45,
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 2,
      platform: 'facebook',
      icon: Facebook,
      account: 'Prefeitura Municipal',
      time: 'Há 5 horas',
      text: 'O Centro Educacional Integrado está ficando incrível! Em breve, 1.500 alunos terão acesso a uma educação de qualidade com infraestrutura moderna. 📚👨‍🎓',
      image: 'https://images.unsplash.com/photo-1762536859942-8076505f7c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      likes: 2103,
      comments: 156,
      shares: 92,
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: 3,
      platform: 'twitter',
      icon: Twitter,
      account: '@prefeituramun',
      time: 'Há 1 dia',
      text: 'A duplicação da Avenida Principal já está com 60% de conclusão! Menos trânsito, mais qualidade de vida para todos. 🚗💨 #MobilidadeUrbana',
      image: 'https://images.unsplash.com/photo-1663058480199-acbc638bf21a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      likes: 892,
      comments: 43,
      shares: 67,
      color: 'from-sky-400 to-blue-500'
    },
    {
      id: 4,
      platform: 'instagram',
      icon: Instagram,
      account: '@prefeituramunicipal',
      time: 'Há 2 dias',
      text: 'Inauguramos o Parque Linear Sustentável! 20 hectares de área verde para as famílias aproveitarem. Venham conhecer! 🌳🌿',
      image: 'https://images.unsplash.com/photo-1774799975917-5a893e0d576a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      likes: 3421,
      comments: 234,
      shares: 178,
      color: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            <span className="text-sm">Redes Sociais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl mb-4">Acompanhe Nas Redes</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Fique por dentro das novidades em tempo real através das nossas redes sociais
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              <Facebook className="w-5 h-5" />
              <span>Facebook</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg hover:shadow-lg transition-all"
            >
              <Twitter className="w-5 h-5" />
              <span>Twitter</span>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => {
            const Icon = post.icon;
            return (
              <div
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="relative">
                  <ImageWithFallback
                    src={post.image}
                    alt={`Post ${post.platform}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-3 right-3 w-10 h-10 rounded-full bg-gradient-to-br ${post.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm">{post.account}</span>
                    <span className="text-xs text-muted-foreground">{post.time}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.text}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Share2 className="w-4 h-4" />
                      <span>{post.shares}</span>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors text-sm"
                  >
                    <span>Ver no {post.platform === 'instagram' ? 'Instagram' : post.platform === 'facebook' ? 'Facebook' : 'Twitter'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Siga nossas redes sociais e não perca nenhuma atualização!
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-muted rounded-full text-sm">#ObrasQueMudam</span>
            <span className="px-3 py-1 bg-muted rounded-full text-sm">#TransparênciaTotal</span>
            <span className="px-3 py-1 bg-muted rounded-full text-sm">#NossaCidade</span>
            <span className="px-3 py-1 bg-muted rounded-full text-sm">#Desenvolvimento</span>
          </div>
        </div>
      </div>
    </section>
  );
}
