import { Filter } from 'lucide-react';

export function Filters() {
  return (
    <section className="bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-muted-foreground" />
          <h2 className="text-base">Filtrar Obras</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <select className="px-4 py-2 border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/50">
            <option>Todos os Status</option>
            <option>Em Andamento</option>
            <option>Concluídas</option>
            <option>Planejamento</option>
          </select>

          <select className="px-4 py-2 border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/50">
            <option>Todas as Categorias</option>
            <option>Infraestrutura</option>
            <option>Saúde</option>
            <option>Educação</option>
            <option>Mobilidade</option>
          </select>

          <select className="px-4 py-2 border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/50">
            <option>Todos os Bairros</option>
            <option>Centro</option>
            <option>Zona Norte</option>
            <option>Zona Sul</option>
            <option>Zona Leste</option>
            <option>Zona Oeste</option>
          </select>

          <select className="px-4 py-2 border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/50">
            <option>Ordenar por: Mais Recentes</option>
            <option>Maior Investimento</option>
            <option>Maior Progresso</option>
            <option>Nome A-Z</option>
          </select>
        </div>
      </div>
    </section>
  );
}
