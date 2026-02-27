import { Play, ThumbsUp, Share2, Clock, Heart, Search, Filter } from 'lucide-react';

export function Sets() {
  const sets = [
    { id: 1, dj: "DJ Pulse", titulo: "Techno Night Live Set", duracion: "02:45:00", reproducciones: "125K", likes: "8.5K", fecha: "20 FEB 2026", genero: "TECHNO" },
    { id: 2, dj: "Elena Vortex", titulo: "House Sunrise Session", duracion: "01:30:00", reproducciones: "98K", likes: "6.2K", fecha: "18 FEB 2026", genero: "HOUSE" },
    { id: 3, dj: "Marco Bass", titulo: "DnB Underground Mix", duracion: "02:15:00", reproducciones: "156K", likes: "11.3K", fecha: "15 FEB 2026", genero: "DRUM & BASS" },
    { id: 4, dj: "Luna Beats", titulo: "Progressive Journey", duracion: "03:00:00", reproducciones: "203K", likes: "15.8K", fecha: "12 FEB 2026", genero: "PROGRESSIVE" },
    { id: 5, dj: "Echo Mind", titulo: "Minimal Dark Side", duracion: "02:30:00", reproducciones: "142K", likes: "9.7K", fecha: "10 FEB 2026", genero: "MINIMAL" },
    { id: 6, dj: "Sonic Wave", titulo: "Trance Odyssey", duracion: "02:00:00", reproducciones: "167K", likes: "12.4K", fecha: "8 FEB 2026", genero: "TRANCE" },
    { id: 7, dj: "Rhythm Rider", titulo: "Breakbeat Energy", duracion: "01:45:00", reproducciones: "89K", likes: "7.1K", fecha: "5 FEB 2026", genero: "BREAKBEAT" },
    { id: 8, dj: "Dark Matter", titulo: "Industrial Wasteland", duracion: "02:20:00", reproducciones: "178K", likes: "13.6K", fecha: "3 FEB 2026", genero: "INDUSTRIAL" }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', fontFamily: 'var(--font-body)', paddingTop: '72px' }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="mb-4" style={{ 
            fontFamily: 'var(--font-heading)', 
            color: 'var(--text-primary)',
            fontSize: 'clamp(32px, 8vw, 48px)',
            fontWeight: 700,
            letterSpacing: '-2px'
          }}>
            SETS
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>
            Los mejores sets de música electrónica
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-10">
          <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-lg border transition-colors focus-within:border-[var(--accent-primary)]" style={{ 
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border)'
          }}>
            <Search className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
            <input 
              type="text"
              placeholder="Buscar sets..."
              className="flex-1 bg-transparent outline-none"
              style={{ color: 'var(--text-primary)' }}
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border transition-all hover:border-[var(--accent-primary)]" style={{ 
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border)',
            color: 'var(--text-primary)'
          }}>
            <Filter className="w-5 h-5" />
            <span>Filtros</span>
          </button>
        </div>

        {/* Sets List */}
        <div className="space-y-4">
          {sets.map((set, index) => (
            <div 
              key={set.id}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl border transition-all cursor-pointer group hover:border-[var(--accent-primary)] hover:-translate-y-0.5"
              style={{ 
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border)'
              }}
            >
              {/* Mobile: Top Row */}
              <div className="flex items-center gap-4 w-full sm:w-auto">
                {/* Number */}
                <div className="text-2xl w-8 sm:w-12 text-center flex-shrink-0" style={{ 
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700
                }}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Play Button */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform cursor-pointer flex-shrink-0" style={{ 
                  background: 'linear-gradient(135deg, var(--accent-dim), var(--accent-primary))'
                }}>
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current" style={{ color: '#000' }} />
                </div>

                {/* Info - Mobile */}
                <div className="flex-1 min-w-0 sm:hidden">
                  <h3 className="mb-1 truncate" style={{ 
                    fontFamily: 'var(--font-heading)', 
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                    fontWeight: 600,
                    letterSpacing: '-0.5px'
                  }}>
                    {set.titulo}
                  </h3>
                  <p className="text-sm truncate" style={{ color: 'var(--text-secondary)' }}>
                    {set.dj}
                  </p>
                </div>
              </div>

              {/* Info - Desktop */}
              <div className="flex-1 min-w-0 hidden sm:block">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="truncate" style={{ 
                    fontFamily: 'var(--font-heading)', 
                    color: 'var(--text-primary)',
                    fontSize: '18px',
                    fontWeight: 600,
                    letterSpacing: '-0.5px'
                  }}>
                    {set.titulo}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded text-xs uppercase tracking-wider flex-shrink-0" style={{ 
                    backgroundColor: 'rgba(0, 255, 136, 0.1)',
                    color: 'var(--accent-primary)',
                    border: '1px solid var(--accent-primary)',
                    letterSpacing: '1px'
                  }}>
                    {set.genero}
                  </span>
                </div>
                <div className="flex items-center gap-4 lg:gap-6 text-sm flex-wrap" style={{ color: 'var(--text-secondary)' }}>
                  <span>{set.dj}</span>
                  <span className="hidden lg:inline">•</span>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-mono">{set.duracion}</span>
                  </div>
                  <span className="hidden lg:inline">•</span>
                  <span className="hidden lg:inline">{set.fecha}</span>
                </div>
              </div>

              {/* Stats - Mobile */}
              <div className="flex items-center justify-between w-full sm:hidden gap-4 pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
                <span className="px-2.5 py-0.5 rounded text-xs uppercase tracking-wider" style={{ 
                  backgroundColor: 'rgba(0, 255, 136, 0.1)',
                  color: 'var(--accent-primary)',
                  border: '1px solid var(--accent-primary)',
                  letterSpacing: '1px'
                }}>
                  {set.genero}
                </span>
                <div className="flex items-center gap-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <div className="flex items-center gap-1.5">
                    <Play className="w-3.5 h-3.5" />
                    <span>{set.reproducciones}</span>
                  </div>
                  <button className="flex items-center gap-1.5 transition-colors active:text-[var(--accent-primary)]">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{set.likes}</span>
                  </button>
                  <button className="transition-colors active:text-[var(--accent-primary)]">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Stats - Desktop */}
              <div className="hidden sm:flex items-center gap-4 lg:gap-6 text-sm flex-shrink-0" style={{ color: 'var(--text-secondary)' }}>
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  <span>{set.reproducciones}</span>
                </div>
                <button className="flex items-center gap-2 transition-colors hover:text-[var(--accent-primary)]">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{set.likes}</span>
                </button>
                <button className="transition-colors hover:text-[var(--accent-primary)]">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="hidden lg:block transition-colors hover:text-[var(--accent-primary)]">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3.5 rounded-lg border transition-all hover:border-[var(--accent-primary)] hover:bg-[var(--bg-secondary)]" style={{ 
            backgroundColor: 'transparent',
            borderColor: 'var(--border)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 600
          }}>
            Cargar más sets
          </button>
        </div>
      </div>
    </div>
  );
}
