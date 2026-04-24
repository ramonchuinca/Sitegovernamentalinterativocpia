import { Check, Clock, Calendar } from 'lucide-react';

export function Timeline() {
  const events = [
    {
      year: '2026',
      title: 'Expansão Contínua',
      items: [
        { name: 'Novo Hospital Regional', status: 'em-andamento', date: 'Jun/2026' },
        { name: 'Centro Educacional Integrado', status: 'em-andamento', date: 'Ago/2026' },
        { name: 'Corredor de Ônibus Expresso', status: 'planejamento', date: 'Set/2026' }
      ]
    },
    {
      year: '2025',
      title: 'Ano de Conquistas',
      items: [
        { name: 'Revitalização da Praça da Matriz', status: 'concluido', date: 'Dez/2025' },
        { name: 'Reforma de 8 UBS', status: 'concluido', date: 'Nov/2025' },
        { name: 'Duplicação Av. Principal', status: 'concluido', date: 'Out/2025' }
      ]
    },
    {
      year: '2024',
      title: 'Início da Transformação',
      items: [
        { name: 'Modernização de 15 Escolas', status: 'concluido', date: 'Dez/2024' },
        { name: 'Centro Esportivo Municipal', status: 'concluido', date: 'Set/2024' },
        { name: 'Ciclovia Urbana - Fase 1', status: 'concluido', date: 'Jul/2024' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            <span className="text-sm">Nossa Jornada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl mb-4">Linha do Tempo das Realizações</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Acompanhe nossa trajetória de transformação e desenvolvimento
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {events.map((event, eventIndex) => (
              <div key={event.year} className="relative">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className={`lg:text-right ${eventIndex % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                    <div className="inline-block lg:block">
                      <div className="relative inline-flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center shadow-lg">
                          <span className="text-lg">{event.year}</span>
                        </div>
                        <h3 className="text-xl lg:hidden">{event.title}</h3>
                      </div>
                      <h3 className="hidden lg:block text-xl mb-6">{event.title}</h3>
                    </div>

                    <div className="space-y-4 lg:pr-8">
                      {event.items.map((item) => (
                        <div
                          key={item.name}
                          className="bg-white rounded-lg p-4 shadow-md border border-border hover:shadow-lg transition-shadow"
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                              item.status === 'concluido'
                                ? 'bg-green-100 text-green-600'
                                : item.status === 'em-andamento'
                                ? 'bg-blue-100 text-blue-600'
                                : 'bg-orange-100 text-orange-600'
                            }`}>
                              {item.status === 'concluido' ? (
                                <Check className="w-4 h-4" />
                              ) : (
                                <Clock className="w-4 h-4" />
                              )}
                            </div>
                            <div className="flex-1 text-left">
                              <p className="mb-1">{item.name}</p>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Calendar className="w-3 h-3" />
                                <span>{item.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
