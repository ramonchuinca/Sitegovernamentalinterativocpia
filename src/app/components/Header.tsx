import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
  className="
    fixed
    top-0
    left-0
    w-full
    z-50
    bg-transparent
  "
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center py-3">

          {/* Logo Esquerda */}
          <div className="flex items-center">
            <img
              src="/src/assets/LOGO-GOV-RO-PT-HORIZONTAL_12.png"
              alt="Logo Governo"
              className="h-20 w-auto"
            />
          </div>

          {/* Logo Direita */}
          <div className="flex items-center">
            <img
              src="/src/assets/www.png"
              alt="Portal"
              className="h-16 w-auto"
            />
          </div>

          {/* Botão Mobile */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-700">
            <a href="#obras" className="block py-2 text-white">
              Obras
            </a>

            <a href="#andamento" className="block py-2 text-white">
              Em Andamento
            </a>

            <a href="#concluidas" className="block py-2 text-white">
              Concluídas
            </a>

            <a href="#transparencia" className="block py-2 text-white">
              Transparência
            </a>
          </nav>
        )}

      </div>
    </header>
  );
}