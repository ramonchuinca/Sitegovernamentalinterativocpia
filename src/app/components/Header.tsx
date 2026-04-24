import { Menu, Search, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white">🏛️</span>
            </div>
            <div>
              <h1 className="text-base leading-tight">Portal de Obras</h1>
              <p className="text-xs text-muted-foreground">Governo Municipal</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#obras" className="text-sm text-foreground hover:text-primary transition-colors">
              Obras
            </a>
            <a href="#andamento" className="text-sm text-foreground hover:text-primary transition-colors">
              Em Andamento
            </a>
            <a href="#concluidas" className="text-sm text-foreground hover:text-primary transition-colors">
              Concluídas
            </a>
            <a href="#transparencia" className="text-sm text-foreground hover:text-primary transition-colors">
              Transparência
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <a href="#obras" className="block py-2 text-sm text-foreground hover:text-primary transition-colors">
              Obras
            </a>
            <a href="#andamento" className="block py-2 text-sm text-foreground hover:text-primary transition-colors">
              Em Andamento
            </a>
            <a href="#concluidas" className="block py-2 text-sm text-foreground hover:text-primary transition-colors">
              Concluídas
            </a>
            <a href="#transparencia" className="block py-2 text-sm text-foreground hover:text-primary transition-colors">
              Transparência
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
