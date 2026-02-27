import { Link } from 'react-router';
import { MapPin, Users, Play, ThumbsUp, Clock } from 'lucide-react';

export function Home() {
  const eventos = [
    {
      id: 1,
      titulo: "TECHNO NIGHT",
      dia: "15",
      mes: "MAR",
      fecha: "15 MAR 2026",
      hora: "23:00",
      lugar: "Club Nocturno XYZ",
      direccion: "Av. Principal 123",
      imagen: "https://images.unsplash.com/photo-1574154894072-18ba0d48321b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjBsYXNlciUyMGxpZ2h0c3xlbnwxfHx8fDE3NzIxNDQzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      asistentes: 450,
      precio: "$25",
      lineup: ["DJ Pulse", "Marco Bass"]
    },
    {
      id: 2,
      titulo: "HOUSE FESTIVAL 2026",
      dia: "22",
      mes: "MAR",
      fecha: "22 MAR 2026",
      hora: "18:00",
      lugar: "Arena Central",
      direccion: "Zona Industrial",
      imagen: "https://images.unsplash.com/photo-1624929303661-22c5bce0169b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBmZXN0aXZhbCUyMGNyb3dkfGVufDF8fHx8MTc3MjA3NzMwMnww&ixlib=rb-4.1.0&q=80&w=1080",
      asistentes: 1200,
      precio: "$45",
      lineup: ["Elena Vortex", "Luna Beats", "Rhythm Rider"]
    },
    {
      id: 3,
      titulo: "UNDERGROUND SESSION",
      dia: "28",
      mes: "MAR",
      fecha: "28 MAR 2026",
      hora: "00:00",
      lugar: "The Warehouse",
      direccion: "Distrito 5",
      imagen: "https://images.unsplash.com/photo-1721623777765-1381ba32859c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHMlMjBuZW9ufGVufDF8fHx8MTc3MjE0NDMwMnww&ixlib=rb-4.1.0&q=80&w=1080",
      asistentes: 300,
      precio: "$20",
      lineup: ["Echo Mind"]
    }
  ];

  const djs = [
    { id: 1, nombre: "DJ Pulse", genero: "Techno", imagen: "https://images.unsplash.com/photo-1763630054344-d5a9725b0854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm8lMjBkaiUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3MjE0NDMwMXww&ixlib=rb-4.1.0&q=80&w=1080", seguidores: "45K" },
    { id: 2, nombre: "Elena Vortex", genero: "House", imagen: "https://images.unsplash.com/photo-1572327918315-173bc4545e39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHR1cm50YWJsZXMlMjBuaWdodGNsdWJ8ZW58MXx8fHwxNzcyMDg5NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080", seguidores: "32K" },
    { id: 3, nombre: "Marco Bass", genero: "Drum & Bass", imagen: "https://images.unsplash.com/photo-1637759898746-283c2d6c24c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y2VyJTIwc3R1ZGlvfGVufDF8fHx8MTc3MjEwMjU2M3ww&ixlib=rb-4.1.0&q=80&w=1080", seguidores: "28K" },
    { id: 4, nombre: "Luna Beats", genero: "Progressive", imagen: "https://images.unsplash.com/photo-1574154894072-18ba0d48321b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjBsYXNlciUyMGxpZ2h0c3xlbnwxfHx8fDE3NzIxNDQzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080", seguidores: "51K" }
  ];

  const sets = [
    { id: 1, dj: "DJ Pulse", titulo: "Techno Night Live Set", duracion: "02:45:00", reproducciones: "125K", likes: "8.5K", genero: "TECHNO" },
    { id: 2, dj: "Elena Vortex", titulo: "House Sunrise Session", duracion: "01:30:00", reproducciones: "98K", likes: "6.2K", genero: "HOUSE" },
    { id: 3, dj: "Marco Bass", titulo: "DnB Underground Mix", duracion: "02:15:00", reproducciones: "156K", likes: "11.3K", genero: "DNB" },
    { id: 4, dj: "Luna Beats", titulo: "Progressive Journey", duracion: "03:00:00", reproducciones: "203K", likes: "15.8K", genero: "PROGRESSIVE" }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', fontFamily: 'var(--font-body)' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ 
        paddingTop: '140px',
        paddingBottom: '80px',
        background: 'radial-gradient(ellipse at 20% 0%, rgba(0, 255, 136, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(0, 255, 136, 0.05) 0%, transparent 50%), var(--bg-primary)'
      }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h1 className="mb-6" style={{ 
              fontFamily: 'var(--font-heading)', 
              color: 'var(--text-primary)',
              fontSize: 'clamp(32px, 8vw, 64px)',
              fontWeight: 700,
              lineHeight: '1.1',
              letterSpacing: '-2px'
            }}>
              La plataforma líder para DJs y amantes de la música <span style={{ color: 'var(--accent-primary)' }}>electrónica</span>
            </h1>
            <p className="mb-8 max-w-lg" style={{ 
              color: 'var(--text-secondary)',
              fontSize: 'clamp(16px, 3vw, 18px)',
              lineHeight: '1.7'
            }}>
              En toda la Provincia de Córdoba. Descubre eventos, conecta con artistas y sumérgete en la escena underground.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/eventos"
                className="px-8 py-4 rounded-lg transition-all hover:-translate-y-0.5 text-center"
                style={{ 
                  backgroundColor: 'var(--accent-primary)',
                  color: '#000',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '14px'
                }}
              >
                Ver Eventos
              </Link>
              <Link 
                to="/sets"
                className="px-8 py-4 rounded-lg transition-all hover:bg-[var(--accent-primary)] hover:text-black text-center"
                style={{ 
                  backgroundColor: 'transparent',
                  border: '1px solid var(--accent-primary)',
                  color: 'var(--accent-primary)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '14px'
                }}
              >
                Explorar Sets
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Próximos Eventos */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10 gap-4">
          <h2 style={{ 
            fontFamily: 'var(--font-heading)', 
            color: 'var(--text-primary)',
            fontSize: 'clamp(24px, 5vw, 32px)',
            fontWeight: 700,
            letterSpacing: '-1px'
          }}>
            Próximos Eventos
          </h2>
          <Link 
            to="/eventos" 
            className="text-sm hover:underline"
            style={{ 
              color: 'var(--accent-primary)',
              fontWeight: 500
            }}
          >
            Ver todos →
          </Link>
        </div>
        
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
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
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

                <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <span style={{ 
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: 'var(--accent-primary)'
                  }}>
                    {evento.precio}
                  </span>
                  <div className="flex items-center gap-2" style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    <Users className="w-4 h-4" />
                    <span>{evento.asistentes}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* DJs Destacados */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10 gap-4">
          <h2 style={{ 
            fontFamily: 'var(--font-heading)', 
            color: 'var(--text-primary)',
            fontSize: 'clamp(24px, 5vw, 32px)',
            fontWeight: 700,
            letterSpacing: '-1px'
          }}>
            DJs Destacados
          </h2>
          <Link 
            to="/djs" 
            className="text-sm hover:underline"
            style={{ 
              color: 'var(--accent-primary)',
              fontWeight: 500
            }}
          >
            Ver todos →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {djs.map((dj) => (
            <Link 
              key={dj.id}
              to={`/dj/${dj.id}`}
              className="group text-center"
            >
              <div className="mb-4 overflow-hidden rounded-full border-2 transition-all group-hover:border-[var(--accent-primary)]" style={{ 
                borderColor: 'var(--border)',
                aspectRatio: '1'
              }}>
                <img 
                  src={dj.imagen}
                  alt={dj.nombre}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mb-1" style={{ 
                fontFamily: 'var(--font-heading)',
                fontSize: '16px',
                fontWeight: 600,
                color: 'var(--text-primary)'
              }}>
                {dj.nombre}
              </h3>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{dj.genero}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Sets Populares */}
      <section className="border-y" style={{ 
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border)',
        padding: '60px 0'
      }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10 gap-4">
            <h2 style={{ 
              fontFamily: 'var(--font-heading)', 
              color: 'var(--text-primary)',
              fontSize: 'clamp(24px, 5vw, 32px)',
              fontWeight: 700,
              letterSpacing: '-1px'
            }}>
              Sets Populares
            </h2>
            <Link 
              to="/sets" 
              className="text-sm hover:underline"
              style={{ 
                color: 'var(--accent-primary)',
                fontWeight: 500
              }}
            >
              Ver todos →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {sets.map((set) => (
              <div 
                key={set.id}
                className="rounded-xl p-4 sm:p-6 flex items-center gap-4 sm:gap-5 cursor-pointer transition-colors hover:bg-[var(--bg-tertiary)]"
                style={{ backgroundColor: 'var(--bg-tertiary)' }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center flex-shrink-0" style={{ 
                  background: 'linear-gradient(135deg, var(--accent-dim), var(--accent-primary))'
                }}>
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current" style={{ color: '#000' }} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="mb-1 truncate" style={{ 
                    fontFamily: 'var(--font-heading)',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--text-primary)'
                  }}>
                    {set.titulo}
                  </h3>
                  <p className="mb-2 text-sm truncate" style={{ color: 'var(--text-secondary)' }}>
                    {set.dj}
                  </p>
                  <span className="text-xs uppercase tracking-wider" style={{ 
                    color: 'var(--accent-primary)',
                    letterSpacing: '1px'
                  }}>
                    {set.genero}
                  </span>
                </div>

                <div className="hidden sm:flex items-center gap-4 lg:gap-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <div className="flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    <span>{set.reproducciones}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{set.likes}</span>
                  </div>
                  <span className="font-mono">{set.duracion}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
