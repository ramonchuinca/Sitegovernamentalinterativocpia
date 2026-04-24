import { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-8 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-border z-50 overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-primary/90 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="text-white">
                <h4 className="text-white">Fale Conosco</h4>
                <p className="text-xs text-white/80">Online agora</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="p-4 h-64 overflow-y-auto bg-muted/30">
            <div className="mb-4">
              <div className="bg-white rounded-lg rounded-bl-none p-3 inline-block shadow-sm">
                <p className="text-sm">
                  Olá! 👋 Como podemos ajudar você hoje?
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button className="p-3 bg-white rounded-lg hover:bg-accent transition-colors text-left text-sm">
                🏗️ Informações sobre obras
              </button>
              <button className="p-3 bg-white rounded-lg hover:bg-accent transition-colors text-left text-sm">
                📋 Consultar projeto
              </button>
              <button className="p-3 bg-white rounded-lg hover:bg-accent transition-colors text-left text-sm">
                📞 Falar com atendente
              </button>
              <button className="p-3 bg-white rounded-lg hover:bg-accent transition-colors text-left text-sm">
                💬 Fazer sugestão
              </button>
            </div>
          </div>

          <div className="p-4 border-t border-border bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="w-10 h-10 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-4 sm:right-8 w-14 h-14 bg-gradient-to-br from-primary to-primary/90 text-white rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center group"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
          </>
        )}
      </button>
    </>
  );
}
