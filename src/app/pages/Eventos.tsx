import { Link } from 'react-router';
import { MapPin, Users, Search, Filter, Clock } from 'lucide-react';

export function Eventos() {
  const eventos = [
    { id: 1, titulo: "TECHNO NIGHT", dia: "15", mes: "MAR", hora: "23:00", lugar: "Club Nocturno XYZ", direccion: "Av. Principal 123", imagen: "https://images.unsplash.com/photo-1574154894072-18ba0d48321b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjBsYXNlciUyMGxpZ2h0c3xlbnwxfHx8fDE3NzIxNDQzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080", asistentes: 450, precio: "$25", lineup: ["DJ Pulse", "Marco Bass"] },
    { id: 2, titulo: "HOUSE FESTIVAL 2026", dia: "22", mes: "MAR", hora: "18:00", lugar: "Arena Central", direccion: "Zona Industrial", imagen: "https://images.unsplash.com/photo-1624929303661-22c5bce0169b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBmZXN0aXZhbCUyMGNyb3dkfGVufDF8fHx8MTc3MjA3NzMwMnww&ixlib=rb-4.1.0&q=80&w=1080", asistentes: 1200, precio: "$45", lineup: ["Elena Vortex", "Luna Beats"] },
    { id: 3, titulo: "UNDERGROUND SESSION", dia: "28", mes: "MAR", hora: "00:00", lugar: "The Warehouse", direccion: "Distrito 5", imagen: "https://images.unsplash.com/photo-1721623777765-1381ba32859c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHMlMjBuZW9ufGVufDF8fHx8MTc3MjE0NDMwMnww&ixlib=rb-4.1.0&q=80&w=1080", asistentes: 300, precio: "$20", lineup: ["Echo Mind"] },
    { id: 4, titulo: "PROGRESSIVE TRANCE NIGHT", dia: "5", mes: "ABR", hora: "22:00", lugar: "Electric Arena", direccion: "Centro", imagen: "https://images.unsplash.com/photo-1763630054344-d5a9725b0854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm8lMjBkaiUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3MjE0NDMwMXww&ixlib=rb-4.1.0&q=80&w=1080", asistentes: 680, precio: "$30", lineup: ["Sonic Wave", "Luna Beats"] },
    { id: 5, titulo: "BASS MUSIC SHOWCASE", dia: "12", mes: "ABR", hora: "23:30", lugar: "Sound Factory", direccion: "Norte", imagen: "https://images.unsplash.com/photo-1572327918315-173bc4545e39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHR1cm50YWJsZXMlMjBuaWdodGNsdWJ8ZW58MXx8fHwxNzcyMDg5NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080", asistentes: 520, precio: "$28", lineup: ["Marco Bass", "Rhythm Rider"] },
    { id: 6, titulo: "ELECTRONIC SUMMER KICK-OFF", dia: "19", mes: "ABR", hora: "17:00", lugar: "Open Air Park", direccion: "Parque Central", imagen: "https://images.unsplash.com/photo-1637759898746-283c2d6c24c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y2VyJTIwc3R1ZGlvfGVufDF8fHx8MTc3MjEwMjU2M3ww&ixlib=rb-4.1.0&q=80&w=1080", asistentes: 2000, precio: "$55", lineup: ["DJ Pulse", "Elena Vortex", "Echo Mind"] }
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
            EVENTOS
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>
            Descubre los mejores eventos de música electrónica
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
              placeholder="Buscar eventos..."
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

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventos.map((evento) => (
            <Link 
              key={evento.id}
              to={`/evento/${evento.id}`}
              className="group rounded-2xl overflow-hidden border transition-all hover:-translate-y-1"
              style={{ 
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border)'
              }}
            >
              <div className="relative aspect-video overflow-hidden" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                <img 
                  src={evento.imagen}
                  alt={evento.titulo}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded-lg text-center" style={{ 
                  backgroundColor: 'var(--bg-primary)',
                  padding: '8px 12px'
                }}>
                  <div style={{ 
                    fontFamily: 'var(--font-heading)',
                    fontSize: '24px',
                    fontWeight: 700,
                    color: 'var(--accent-primary)',
                    lineHeight: 1
                  }}>
                    {evento.dia}
                  </div>
                  <div className="uppercase tracking-wider" style={{ 
                    fontSize: '11px',
                    color: 'var(--text-secondary)',
                    letterSpacing: '1px'
                  }}>
                    {evento.mes}
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg" style={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <span style={{ 
                    fontFamily: 'var(--font-heading)',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: 'var(--accent-primary)'
                  }}>
                    {evento.precio}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="mb-3" style={{ 
                  fontFamily: 'var(--font-heading)',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.5px'
                }}>
                  {evento.titulo}
                </h3>
                
                <div className="space-y-2 mb-4" style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                    <span>{evento.hora} HS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                    <span>{evento.lugar}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                    <span>{evento.asistentes} confirmados</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {evento.lineup.map((dj, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded text-xs"
                      style={{ 
                        backgroundColor: 'var(--bg-tertiary)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {dj}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
