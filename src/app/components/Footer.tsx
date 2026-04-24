import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span>🏛️</span>
              </div>
              <div>
                <h3 className="text-white">Portal de Obras</h3>
                <p className="text-sm text-white/80">Governo Municipal</p>
              </div>
            </div>
            <p className="text-sm text-white/80">
              Acompanhe todas as obras e projetos da cidade em tempo real com transparência e clareza.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                  Obras em Andamento
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                  Obras Concluídas
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                  Portal da Transparência
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                  Ouvidoria
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/80">
                <Phone className="w-4 h-4" />
                <span>(11) 3456-7890</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <Mail className="w-4 h-4" />
                <span>obras@cidade.gov.br</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <MapPin className="w-4 h-4" />
                <span>Av. Principal, 1000 - Centro</span>
              </li>
            </ul>

            <div className="flex gap-3 mt-4">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/60">
            © 2026 Prefeitura Municipal. Todos os direitos reservados. | Desenvolvido com transparência para você.
          </p>
        </div>
      </div>
    </footer>
  );
}
