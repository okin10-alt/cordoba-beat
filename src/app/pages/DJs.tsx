import { Link } from 'react-router';
import { Search, Users, Music, Filter } from 'lucide-react';

export function DJs() {
  const djs = [
    { id: 1, nombre: "DJ Pulse", genero: "Techno", imagen: "https://images.unsplash.com/photo-1763630054344-d5a9725b0854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm8lMjBkaiUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3MjE0NDMwMXww&ixlib=rb-4.1.0&q=80&w=1080", seguidores: "45K", sets: 28 },
    { id: 2, nombre: "Elena Vortex", genero: "House", imagen: "https://images.unsplash.com/photo-1572327918315-173bc4545e39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHR1cm50YWJsZXMlMjBuaWdodGNsdWJ8ZW58MXx8fHwxNzcyMDg5NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080", seguidores: "32K", sets: 42 },
    { id: 3, nombre: "Marco Bass", genero: "Drum & Bass", imagen: "https://images.unsplash.com/photo-1637759898746-283c2d6c24c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y2VyJTIwc3R1ZGlvfGVufDF8fHx8MTc3MjEwMjU2M3ww&ixlib=rb-4.1.0&q=80&w=1080", seguidores: "28K", sets: 35 },
    { id: 4, nombre: "Luna Beats", genero: "Progressive", imagen: "https://images.unsplash.com/photo-1574154894072-18ba0d48321b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjBsYXNlciUyMGxpZ2h0c3xlbnwxfHx8fDE3NzIxNDQzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080", seguidores: "51K", sets: 56 },
    { id: 5, nombre: "Echo Mind", genero: "Minimal", imagen: "https://images.unsplash.com/photo-1763630054344-d5a9725b0854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm8lMjBkaiUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3MjE0NDMwMXww&ixlib=rb-4.1.0&q=80&w=1080", seguidores: "38K", sets: 47 },
    { id: 6, nombre: "Sonic Wave", genero: "Trance", imagen: "https://images.unsplash.com/photo-1572327918315-173bc4545e39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHR1cm50YWJsZXMlMjBuaWdodGNsdWJ8ZW58MXx8fHwxNzcyMDg5NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080", seguidores: "42K", sets: 39 },
    { id: 7, nombre: "Rhythm Rider", genero: "Breakbeat", imagen: "https://images.unsplash.com/photo-1637759898746-283c2d6c24c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y2VyJTIwc3R1ZGlvfGVufDF8fHx8MTc3MjEwMjU2M3ww&ixlib=rb-4.1.0&q=80&w=1080", seguidores: "26K", sets: 31 },
    { id: 8, nombre: "Dark Matter", genero: "Industrial", imagen: "https://images.unsplash.com/photo-1574154894072-18ba0d48321b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjBsYXNlciUyMGxpZ2h0c3xlbnwxfHx8fDE3NzIxNDQzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080", seguidores: "33K", sets: 44 }
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
            DJS
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>
            Explora los artistas más destacados de la escena
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
              placeholder="Buscar DJs..."
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
            <span>Géneros</span>
          </button>
        </div>

        {/* DJs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {djs.map((dj) => (
            <Link 
              key={dj.id}
              to={`/dj/${dj.id}`}
              className="group"
            >
              <div className="mb-4 overflow-hidden rounded-full border-2 transition-all group-hover:border-[var(--accent-primary)] group-hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]" style={{ 
                borderColor: 'var(--border)',
                aspectRatio: '1',
                backgroundColor: 'var(--bg-secondary)'
              }}>
                <img 
                  src={dj.imagen}
                  alt={dj.nombre}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center">
                <h3 className="mb-1" style={{ 
                  fontFamily: 'var(--font-heading)',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'var(--text-primary)'
                }}>
                  {dj.nombre}
                </h3>
                <p className="mb-3 text-xs uppercase tracking-wider" style={{ 
                  color: 'var(--text-secondary)',
                  letterSpacing: '1px'
                }}>
                  {dj.genero}
                </p>
                <div className="flex items-center justify-center gap-4 text-xs" style={{ color: 'var(--text-secondary)' }}>
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" style={{ color: 'var(--accent-primary)' }} />
                    <span>{dj.seguidores}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Music className="w-3.5 h-3.5" style={{ color: 'var(--accent-primary)' }} />
                    <span>{dj.sets}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
