import { Bell, FileText, MessageSquare } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">Participe e Acompanhe</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Sua opinião é importante! Acompanhe, sugira e fiscalize as obras da nossa cidade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <Bell className="w-6 h-6" />
            </div>
            <h3 className="text-lg mb-2 text-white">Receba Atualizações</h3>
            <p className="text-sm text-white/80 mb-4">
              Cadastre-se para receber notificações sobre obras no seu bairro
            </p>
            <button className="w-full px-4 py-2 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors text-sm">
              Cadastrar Agora
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg mb-2 text-white">Transparência Total</h3>
            <p className="text-sm text-white/80 mb-4">
              Acesse relatórios detalhados e documentos de todas as obras
            </p>
            <button className="w-full px-4 py-2 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors text-sm">
              Ver Documentos
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg mb-2 text-white">Fale Conosco</h3>
            <p className="text-sm text-white/80 mb-4">
              Tire dúvidas, faça sugestões ou envie reclamações
            </p>
            <button className="w-full px-4 py-2 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors text-sm">
              Enviar Mensagem
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
