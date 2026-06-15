import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${isMenuOpen ? "bg-black/95 backdrop-blur-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo Principal */}
         <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
  {/* Logo */}
  <div className="flex flex-col items-start">
    <img
      src="/src/assets/LOGO-GOV-RO-PT-HORIZONTAL_12.png"
      alt="Logo Governo"
      className="h-14 sm:h-16 md:h-20 w-auto"
    />

    {/* Botão Mobile */}
    <a
      href="https://www.rondonia.ro.gov.br/"
      target="_blank"
      rel="noopener noreferrer"
      className="
        md:hidden
        mt-3
        inline-flex
        items-center
        gap-2
        px-5
        py-2.5
        rounded-full
        bg-white
        text-slate-900
        font-semibold
        shadow-lg
        hover:scale-105
        transition-all
        duration-300
      "
    >
      ro.gov.br
      <span className="text-lg">↗</span>
    </a>
  </div>

  {/* Botão Desktop */}
  <a
    href="https://www.rondonia.ro.gov.br/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      hidden
      md:inline-flex
      items-center
      gap-2
      px-6
      py-3
      rounded-full
      bg-white/95
      backdrop-blur-md
      text-slate-900
      font-semibold
      shadow-xl
      border border-white/20
      hover:scale-105
      hover:shadow-2xl
      transition-all
      duration-300
    "
  >
    ro.gov.br
    <span className="text-lg">↗</span>
  </a>
</div>

          {/* Menu Mobile */}
          <button
            className="
              md:hidden
              p-2
              rounded-lg
              text-white
              hover:bg-white/10
              transition
            "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all duration-300
            ${isMenuOpen ? "max-h-96 py-4" : "max-h-0"}
          `}
        >
          <nav className="flex flex-col gap-4 border-t border-white/10 pt-4">
            <a
              href="#obras"
              className="text-white hover:text-violet-400 transition"
            >
              Obras
            </a>

            <a
              href="#andamento"
              className="text-white hover:text-violet-400 transition"
            >
              Em Andamento
            </a>

            <a
              href="#concluidas"
              className="text-white hover:text-violet-400 transition"
            >
              Concluídas
            </a>

            <a
              href="#transparencia"
              className="text-white hover:text-violet-400 transition"
            >
              Transparência
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}