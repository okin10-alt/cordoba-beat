import { useParams, Link } from 'react-router';
import { MapPin, Calendar, Clock, Users, Share2, Heart, Ticket, Music, ExternalLink } from 'lucide-react';

export function DetalleEvento() {
  const { id } = useParams();

  const evento = {
    id: 1,
    titulo: "TECHNO NIGHT",
    subtitulo: "La noche más oscura del año",
    fecha: "15 MAR 2026",
    hora: "23:00",
    horaFin: "06:00",
    lugar: "Club Nocturno XYZ",
    direccion: "Av. Principal 123, Córdoba",
    imagen: "https://images.unsplash.com/photo-1574154894072-18ba0d48321b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjBsYXNlciUyMGxpZ2h0c3xlbnwxfHx8fDE3NzIxNDQzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    descripcion: "Prepárate para una noche inolvidable de techno industrial y minimal. Los mejores DJs de la escena local se reúnen para ofrecer 7 horas de música sin parar. El venue cuenta con un sistema de sonido Funktion-One de última generación y efectos visuales impresionantes.",
    precio: "$25",
    precioAnticipado: "$20",
    asistentes: 450,
    capacidad: 800,
    edadMinima: "18+",
    generos: ["TECHNO", "MINIMAL", "INDUSTRIAL"],
    lineup: [
      { id: 1, nombre: "DJ Pulse", foto: "https://images.unsplash.com/photo-1763630054344-d5a9725b0854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm8lMjBkaiUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3MjE0NDMwMXww&ixlib=rb-4.1.0&q=80&w=1080", horario: "02:00 - 04:00", headliner: true },
      { id: 2, nombre: "Marco Bass", foto: "https://images.unsplash.com/photo-1572327918315-173bc4545e39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHR1cm50YWJsZXMlMjBuaWdodGNsdWJ8ZW58MXx8fHwxNzcyMDg5NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080", horario: "00:30 - 02:00", headliner: false },
      { id: 3, nombre: "Echo Mind", foto: "https://images.unsplash.com/photo-1637759898746-283c2d6c24c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y2VyJTIwc3R1ZGlvfGVufDF8fHx8MTc3MjEwMjU2M3ww&ixlib=rb-4.1.0&q=80&w=1080", horario: "23:00 - 00:30", headliner: false }
    ]
  };

  const eventosRelacionados = [
    { id: 2, titulo: "HOUSE FESTIVAL", fecha: "22 MAR", imagen: "https://images.unsplash.com/photo-1624929303661-22c5bce0169b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBmZXN0aXZhbCUyMGNyb3dkfGVufDF8fHx8MTc3MjA3NzMwMnww&ixlib=rb-4.1.0&q=80&w=1080", precio: "$45" },
    { id: 3, titulo: "UNDERGROUND SESSION", fecha: "28 MAR", imagen: "https://images.unsplash.com/photo-1721623777765-1381ba32859c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHMlMjBuZW9ufGVufDF8fHx8MTc3MjE0NDMwMnww&ixlib=rb-4.1.0&q=80&w=1080", precio: "$20" }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', fontFamily: 'var(--font-body)', paddingTop: '72px' }}>
      {/* Hero Image */}
      <div className="relative h-64 sm:h-80 lg:h-[500px] overflow-hidden" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <img 
          src={evento.imagen}
          alt={evento.titulo}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 60%)'
        }} />
        
        {/* Floating Info Card */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 pb-6 sm:pb-8">
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-lg mb-4" style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(20px)'
            }}>
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--accent-primary)' }} />
              <span className="text-sm sm:text-base" style={{ 
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600
              }}>
                {evento.fecha}
              </span>
              <span className="hidden sm:inline" style={{ color: 'var(--text-secondary)' }}>•</span>
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--accent-primary)' }} />
              <span className="text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>{evento.hora} - {evento.horaFin}</span>
            </div>

            <h1 className="mb-3" style={{ 
              fontFamily: 'var(--font-heading)', 
              color: 'var(--text-primary)',
              fontSize: 'clamp(32px, 10vw, 64px)',
              fontWeight: 700,
              letterSpacing: '-3px',
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.8)'
            }}>
              {evento.titulo}
            </h1>
            <p className="text-base sm:text-xl mb-4 sm:mb-6" style={{ 
              color: 'var(--text-secondary)',
              textShadow: '0 1px 10px rgba(0, 0, 0, 0.8)'
            }}>
              {evento.subtitulo}
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--accent-primary)' }} />
                <span className="text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>{evento.lugar}</span>
              </div>
              <span className="hidden sm:inline" style={{ color: 'var(--text-secondary)' }}>•</span>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--accent-primary)' }} />
                <span className="text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>{evento.asistentes} / {evento.capacidad}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Descripción */}
            <section>
              <h2 className="mb-6 uppercase tracking-wider text-sm" style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                letterSpacing: '2px'
              }}>
                Sobre el evento
              </h2>
              <p className="leading-relaxed mb-6" style={{ 
                color: 'var(--text-secondary)',
                fontSize: '15px',
                lineHeight: '1.8'
              }}>
                {evento.descripcion}
              </p>

              <div className="flex gap-3">
                {evento.generos.map((genero) => (
                  <span 
                    key={genero}
                    className="px-4 py-2 rounded-lg text-xs uppercase tracking-wider"
                    style={{ 
                      backgroundColor: 'rgba(0, 255, 136, 0.1)',
                      color: 'var(--accent-primary)',
                      border: '1px solid var(--accent-primary)',
                      letterSpacing: '1.5px'
                    }}
                  >
                    {genero}
                  </span>
                ))}
              </div>
            </section>

            {/* Lineup */}
            <section>
              <h2 className="mb-6 uppercase tracking-wider text-sm" style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                letterSpacing: '2px'
              }}>
                Lineup
              </h2>
              
              <div className="space-y-4">
                {evento.lineup.map((artista) => (
                  <Link
                    key={artista.id}
                    to={`/dj/${artista.id}`}
                    className="flex items-center gap-5 p-5 rounded-2xl border transition-all group hover:border-[var(--accent-primary)] hover:-translate-y-0.5"
                    style={{ 
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border)'
                    }}
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                      <img 
                        src={artista.foto}
                        alt={artista.nombre}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 style={{ 
                          fontFamily: 'var(--font-heading)',
                          fontSize: '20px',
                          fontWeight: 600,
                          color: 'var(--text-primary)'
                        }}>
                          {artista.nombre}
                        </h3>
                        {artista.headliner && (
                          <span className="px-3 py-1 rounded-full text-xs uppercase tracking-wider" style={{ 
                            backgroundColor: 'var(--accent-primary)',
                            color: '#000',
                            fontWeight: 700
                          }}>
                            Headliner
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <Clock className="w-4 h-4" />
                        <span>{artista.horario}</span>
                      </div>
                    </div>

                    <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--text-secondary)' }} />
                  </Link>
                ))}
              </div>
            </section>

            {/* Ubicación */}
            <section>
              <h2 className="mb-6 uppercase tracking-wider text-sm" style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                letterSpacing: '2px'
              }}>
                Ubicación
              </h2>
              
              <div className="p-6 rounded-2xl border" style={{ 
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border)'
              }}>
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="w-6 h-6 mt-1" style={{ color: 'var(--accent-primary)' }} />
                  <div>
                    <h3 className="mb-1" style={{ 
                      fontFamily: 'var(--font-heading)',
                      fontSize: '18px',
                      fontWeight: 600,
                      color: 'var(--text-primary)'
                    }}>
                      {evento.lugar}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                      {evento.direccion}
                    </p>
                  </div>
                </div>
                
                <a 
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:bg-[var(--bg-tertiary)]"
                  style={{ color: 'var(--accent-primary)', fontSize: '14px' }}
                >
                  <span>Ver en el mapa</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Ticket Card */}
            <div className="p-6 rounded-2xl border sticky top-24" style={{ 
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border)'
            }}>
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span style={{ 
                    fontFamily: 'var(--font-heading)',
                    fontSize: '36px',
                    fontWeight: 700,
                    color: 'var(--accent-primary)'
                  }}>
                    {evento.precio}
                  </span>
                  <span style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: '14px',
                    textDecoration: 'line-through'
                  }}>
                    {evento.precioAnticipado}
                  </span>
                </div>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  Precio general en puerta
                </p>
              </div>

              <button className="w-full px-6 py-4 rounded-xl mb-3 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2" style={{ 
                backgroundColor: 'var(--accent-primary)',
                color: '#000',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '16px'
              }}>
                <Ticket className="w-5 h-5" />
                <span>Comprar Entradas</span>
              </button>

              <div className="flex gap-2">
                <button className="flex-1 px-4 py-3 rounded-xl border transition-all hover:border-[var(--accent-primary)]" style={{ 
                  backgroundColor: 'transparent',
                  borderColor: 'var(--border)',
                  color: 'var(--text-primary)'
                }}>
                  <Heart className="w-5 h-5 mx-auto" />
                </button>
                <button className="flex-1 px-4 py-3 rounded-xl border transition-all hover:border-[var(--accent-primary)]" style={{ 
                  backgroundColor: 'transparent',
                  borderColor: 'var(--border)',
                  color: 'var(--text-primary)'
                }}>
                  <Share2 className="w-5 h-5 mx-auto" />
                </button>
              </div>

              <div className="mt-6 pt-6 border-t space-y-3" style={{ borderColor: 'var(--border)' }}>
                <div className="flex items-center gap-3 text-sm">
                  <Users className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{evento.asistentes} confirmados</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Music className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>Edad mínima: {evento.edadMinima}</span>
                </div>
              </div>
            </div>

            {/* Eventos Relacionados */}
            <div className="p-6 rounded-2xl border" style={{ 
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border)'
            }}>
              <h3 className="mb-5 uppercase tracking-wider text-sm" style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                letterSpacing: '2px'
              }}>
                Eventos Similares
              </h3>
              
              <div className="space-y-4">
                {eventosRelacionados.map((evt) => (
                  <Link 
                    key={evt.id}
                    to={`/evento/${evt.id}`}
                    className="block group"
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-3" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                      <img 
                        src={evt.imagen}
                        alt={evt.titulo}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute bottom-2 right-2 px-3 py-1.5 rounded-lg" style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '14px',
                        fontWeight: 700,
                        color: 'var(--accent-primary)'
                      }}>
                        {evt.precio}
                      </div>
                    </div>
                    <h4 className="mb-1" style={{ 
                      fontFamily: 'var(--font-heading)',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--text-primary)'
                    }}>
                      {evt.titulo}
                    </h4>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {evt.fecha}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
