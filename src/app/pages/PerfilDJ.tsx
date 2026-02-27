import { useParams, Link } from 'react-router';
import { Play, Users, MapPin, Calendar, Music, ExternalLink, Instagram, Twitter, Facebook, ThumbsUp, Clock } from 'lucide-react';

export function PerfilDJ() {
  const { id } = useParams();

  // Datos de ejemplo del DJ
  const dj = {
    id: 1,
    nombre: "DJ PULSE",
    genero: "TECHNO / MINIMAL",
    foto: "https://images.unsplash.com/photo-1763630054344-d5a9725b0854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm8lMjBkaiUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3MjE0NDMwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    coverImage: "https://images.unsplash.com/photo-1574154894072-18ba0d48321b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjBsYXNlciUyMGxpZ2h0c3xlbnwxfHx8fDE3NzIxNDQzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    seguidores: "45.2K",
    siguiendo: "128",
    eventos: 56,
    sets: 28,
    bio: "Productor y DJ especializado en techno industrial y minimal. Residente en Club XYZ. Ha compartido escenario con artistas como Adam Beyer, Charlotte de Witte y Amelie Lens.",
    ciudad: "Córdoba, Argentina",
    desde: "2018",
    social: {
      instagram: "@djpulse",
      twitter: "@djpulse",
      facebook: "/djpulse"
    }
  };

  const proximosEventos = [
    { id: 1, titulo: "TECHNO NIGHT", fecha: "15 MAR", lugar: "Club Nocturno XYZ", imagen: "https://images.unsplash.com/photo-1574154894072-18ba0d48321b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjBsYXNlciUyMGxpZ2h0c3xlbnwxfHx8fDE3NzIxNDQzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 2, titulo: "UNDERGROUND SESSION", fecha: "28 MAR", lugar: "The Warehouse", imagen: "https://images.unsplash.com/photo-1721623777765-1381ba32859c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHMlMjBuZW9ufGVufDF8fHx8MTc3MjE0NDMwMnww&ixlib=rb-4.1.0&q=80&w=1080" }
  ];

  const topSets = [
    { id: 1, titulo: "Techno Night Live Set", duracion: "02:45:00", reproducciones: "125K", likes: "8.5K", genero: "TECHNO" },
    { id: 2, titulo: "Industrial Warehouse Mix", duracion: "02:15:00", reproducciones: "98K", likes: "6.8K", genero: "MINIMAL" },
    { id: 3, titulo: "Dark Techno Journey", duracion: "03:00:00", reproducciones: "156K", likes: "11.2K", genero: "TECHNO" }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', fontFamily: 'var(--font-body)', paddingTop: '72px' }}>
      {/* Cover Image */}
      <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <img 
          src={dj.coverImage}
          alt="Cover"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)'
        }} />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Profile Header */}
        <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-end">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border-4 overflow-hidden" style={{ 
                borderColor: 'var(--bg-primary)',
                backgroundColor: 'var(--bg-secondary)'
              }}>
                <img 
                  src={dj.foto}
                  alt={dj.nombre}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 pb-4 text-center sm:text-left">
              <h1 className="mb-2" style={{ 
                fontFamily: 'var(--font-heading)', 
                color: 'var(--text-primary)',
                fontSize: 'clamp(28px, 6vw, 48px)',
                fontWeight: 700,
                letterSpacing: '-2px'
              }}>
                {dj.nombre}
              </h1>
              <p className="mb-4 uppercase tracking-wider text-xs sm:text-sm" style={{ 
                color: 'var(--accent-primary)',
                letterSpacing: '2px'
              }}>
                {dj.genero}
              </p>
              
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-8 mb-6" style={{ fontSize: '14px' }}>
                <div>
                  <span style={{ 
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(18px, 4vw, 20px)',
                    fontWeight: 700,
                    color: 'var(--text-primary)'
                  }}>
                    {dj.seguidores}
                  </span>
                  <span className="ml-2" style={{ color: 'var(--text-secondary)' }}>seguidores</span>
                </div>
                <div>
                  <span style={{ 
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(18px, 4vw, 20px)',
                    fontWeight: 700,
                    color: 'var(--text-primary)'
                  }}>
                    {dj.eventos}
                  </span>
                  <span className="ml-2" style={{ color: 'var(--text-secondary)' }}>eventos</span>
                </div>
                <div>
                  <span style={{ 
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(18px, 4vw, 20px)',
                    fontWeight: 700,
                    color: 'var(--text-primary)'
                  }}>
                    {dj.sets}
                  </span>
                  <span className="ml-2" style={{ color: 'var(--text-secondary)' }}>sets</span>
                </div>
              </div>

              <button className="w-full sm:w-auto px-8 py-3 rounded-lg transition-all hover:-translate-y-0.5" style={{ 
                backgroundColor: 'var(--accent-primary)',
                color: '#000',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '14px'
              }}>
                <Users className="w-4 h-4 inline mr-2" />
                SEGUIR
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
          {/* Left Column - Bio & Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Sobre */}
            <section>
              <h2 className="mb-6 uppercase tracking-wider text-sm" style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                letterSpacing: '2px'
              }}>
                Sobre
              </h2>
              <p className="leading-relaxed" style={{ 
                color: 'var(--text-secondary)',
                fontSize: '15px',
                lineHeight: '1.8'
              }}>
                {dj.bio}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                  <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{dj.ciudad}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                  <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Activo desde {dj.desde}</span>
                </div>
              </div>
            </section>

            {/* Top Sets */}
            <section>
              <div className="flex justify-between items-end mb-6">
                <h2 className="uppercase tracking-wider text-sm" style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  letterSpacing: '2px'
                }}>
                  Top Sets
                </h2>
                <Link 
                  to="/sets"
                  className="text-xs hover:underline"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  Ver todos →
                </Link>
              </div>

              <div className="space-y-4">
                {topSets.map((set, index) => (
                  <div 
                    key={set.id}
                    className="flex items-center gap-4 p-5 rounded-xl border transition-all cursor-pointer group hover:border-[var(--accent-primary)]"
                    style={{ 
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border)'
                    }}
                  >
                    <div className="text-xl w-8 text-center" style={{ 
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700
                    }}>
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="w-16 h-16 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform" style={{ 
                      background: 'linear-gradient(135deg, var(--accent-dim), var(--accent-primary))'
                    }}>
                      <Play className="w-8 h-8 fill-current" style={{ color: '#000' }} />
                    </div>

                    <div className="flex-1">
                      <h3 className="mb-1" style={{ 
                        fontFamily: 'var(--font-heading)', 
                        color: 'var(--text-primary)',
                        fontSize: '16px',
                        fontWeight: 600
                      }}>
                        {set.titulo}
                      </h3>
                      <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--text-secondary)' }}>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="font-mono">{set.duracion}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Play className="w-3.5 h-3.5" />
                          <span>{set.reproducciones}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <ThumbsUp className="w-3.5 h-3.5" />
                          <span>{set.likes}</span>
                        </div>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded text-xs uppercase tracking-wider" style={{ 
                      backgroundColor: 'rgba(0, 255, 136, 0.1)',
                      color: 'var(--accent-primary)',
                      border: '1px solid var(--accent-primary)',
                      letterSpacing: '1px'
                    }}>
                      {set.genero}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Social & Events */}
          <div className="lg:col-span-2 space-y-8">
            {/* Social */}
            <section className="p-6 rounded-2xl border" style={{ 
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border)'
            }}>
              <h3 className="mb-5 uppercase tracking-wider text-sm" style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                letterSpacing: '2px'
              }}>
                Social
              </h3>
              <div className="space-y-3">
                <a 
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-[var(--bg-tertiary)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <Instagram className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                  <span className="text-sm">{dj.social.instagram}</span>
                  <ExternalLink className="w-4 h-4 ml-auto" />
                </a>
                <a 
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-[var(--bg-tertiary)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <Twitter className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                  <span className="text-sm">{dj.social.twitter}</span>
                  <ExternalLink className="w-4 h-4 ml-auto" />
                </a>
                <a 
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-[var(--bg-tertiary)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <Facebook className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                  <span className="text-sm">{dj.social.facebook}</span>
                  <ExternalLink className="w-4 h-4 ml-auto" />
                </a>
              </div>
            </section>

            {/* Próximos Eventos */}
            <section className="p-6 rounded-2xl border" style={{ 
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border)'
            }}>
              <h3 className="mb-5 uppercase tracking-wider text-sm" style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                letterSpacing: '2px'
              }}>
                Próximos Eventos
              </h3>
              <div className="space-y-4">
                {proximosEventos.map((evento) => (
                  <Link 
                    key={evento.id}
                    to={`/evento/${evento.id}`}
                    className="block group"
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-3" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                      <img 
                        src={evento.imagen}
                        alt={evento.titulo}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-2 left-2 rounded text-center px-2 py-1" style={{ 
                        backgroundColor: 'var(--bg-primary)',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '12px',
                        fontWeight: 700,
                        color: 'var(--accent-primary)'
                      }}>
                        {evento.fecha}
                      </div>
                    </div>
                    <h4 className="mb-1" style={{ 
                      fontFamily: 'var(--font-heading)',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--text-primary)'
                    }}>
                      {evento.titulo}
                    </h4>
                    <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{evento.lugar}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
