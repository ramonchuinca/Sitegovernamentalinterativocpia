import { Play, Pause, Volume2, Download, Mic } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180); // 3 minutos em segundos
  const progressInterval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isPlaying) {
      progressInterval.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [isPlaying, duration]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (currentTime / duration) * 100;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            <span className="text-sm">Mensagem do Prefeito</span>
          </div>
          <h2 className="text-3xl sm:text-4xl mb-4">Ouça Direto da Liderança</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Podcast semanal com atualizações, prestação de contas e diálogo direto com a população
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8 sm:p-12 shadow-lg">
          <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl flex-shrink-0">
              <Mic className="w-16 h-16 text-white" />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-2xl mb-2">Transformando Nossa Cidade #15</h3>
              <p className="text-muted-foreground mb-4">
                Balanço do primeiro trimestre de 2026 e próximos passos para saúde e educação
              </p>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="px-3 py-1 bg-white rounded-full text-sm">Obras Públicas</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Transparência</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">15 Abr 2026</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={togglePlay}
                className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors shadow-lg"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white ml-0.5" />
                )}
              </button>

              <div className="flex-1">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden cursor-pointer">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <button className="w-10 h-10 rounded-full hover:bg-accent flex items-center justify-center transition-colors">
                <Volume2 className="w-5 h-5" />
              </button>

              <button className="w-10 h-10 rounded-full hover:bg-accent flex items-center justify-center transition-colors">
                <Download className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border">
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Episódio</p>
                <p className="text-sm">#15</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Duração</p>
                <p className="text-sm">3 min</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Ouvintes</p>
                <p className="text-sm">12.5k</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Data</p>
                <p className="text-sm">15/04/26</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Disponível também em:
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-4 py-2 bg-white rounded-lg hover:shadow-md transition-shadow text-sm">
                🎵 Spotify
              </button>
              <button className="px-4 py-2 bg-white rounded-lg hover:shadow-md transition-shadow text-sm">
                🎙️ Apple Podcasts
              </button>
              <button className="px-4 py-2 bg-white rounded-lg hover:shadow-md transition-shadow text-sm">
                📻 Google Podcasts
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
