import { MapPin, Calendar, TrendingUp } from 'lucide-react';

interface WorkCardProps {
  title: string;
  location: string;
  category: string;
  status: 'em-andamento' | 'concluida' | 'planejamento';
  progress: number;
  budget: string;
  startDate: string;
  image: string;
}

export function WorkCard({ title, location, category, status, progress, budget, startDate, image }: WorkCardProps) {
  const statusColors = {
    'em-andamento': 'bg-blue-100 text-blue-700',
    'concluida': 'bg-green-100 text-green-700',
    'planejamento': 'bg-orange-100 text-orange-700'
  };

  const statusLabels = {
    'em-andamento': 'Em Andamento',
    'concluida': 'Concluída',
    'planejamento': 'Planejamento'
  };

  return (
    <div className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
          <span className="text-4xl opacity-50">🏗️</span>
        </div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs ${statusColors[status]}`}>
            {statusLabels[status]}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
            {category}
          </span>
        </div>

        <h3 className="mb-3">{title}</h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Início: {startDate}</span>
          </div>
        </div>

        {status !== 'planejamento' && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Progresso
              </span>
              <span className="text-sm">{progress}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-border flex justify-between items-center">
          <div>
            <div className="text-xs text-muted-foreground">Investimento</div>
            <div className="text-sm">{budget}</div>
          </div>
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm">
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
}
