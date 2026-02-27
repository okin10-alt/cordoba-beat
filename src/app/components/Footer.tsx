import { Link } from 'react-router';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t mt-20" style={{ 
      backgroundColor: 'var(--bg-secondary)',
      borderColor: 'var(--border)',
      padding: '60px 0 30px'
    }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="text-2xl tracking-tight" style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-primary)',
                fontWeight: 700,
                letterSpacing: '-1px'
              }}>
                CORDOBA<span style={{ color: 'var(--accent-primary)' }}>BEAT</span>
              </span>
            </div>
            <p className="max-w-sm" style={{ 
              color: 'var(--text-secondary)', 
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              lineHeight: '1.7'
            }}>
              La plataforma líder para DJs y amantes de la música electrónica en toda la Provincia de Córdoba. Descubre eventos, conecta con artistas y sumérgete en la escena underground.
            </p>
          </div>
          
          {/* Links Column 1 */}
          <div style={{ fontFamily: 'var(--font-body)' }}>
            <h4 className="mb-5 uppercase text-sm tracking-wider" style={{ 
              color: 'var(--text-primary)',
              fontWeight: 600,
              letterSpacing: '1px'
            }}>
              Plataforma
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/eventos" 
                  className="text-sm transition-colors hover:text-[var(--accent-primary)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Eventos
                </Link>
              </li>
              <li>
                <Link 
                  to="/djs" 
                  className="text-sm transition-colors hover:text-[var(--accent-primary)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  DJs
                </Link>
              </li>
              <li>
                <Link 
                  to="/sets" 
                  className="text-sm transition-colors hover:text-[var(--accent-primary)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Sets
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Links Column 2 */}
          <div style={{ fontFamily: 'var(--font-body)' }}>
            <h4 className="mb-5 uppercase text-sm tracking-wider" style={{ 
              color: 'var(--text-primary)',
              fontWeight: 600,
              letterSpacing: '1px'
            }}>
              Soporte
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-sm transition-colors hover:text-[var(--accent-primary)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Ayuda
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm transition-colors hover:text-[var(--accent-primary)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Términos
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm transition-colors hover:text-[var(--accent-primary)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4" style={{ 
          borderColor: 'var(--border)',
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-body)',
          fontSize: '13px'
        }}>
          <p className="text-center sm:text-left">© 2026 Cordoba Beat. Todos los derechos reservados.</p>
          
          <div className="flex gap-6">
            <a 
              href="#" 
              className="transition-colors hover:text-[var(--accent-primary)]"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="transition-colors hover:text-[var(--accent-primary)]"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="transition-colors hover:text-[var(--accent-primary)]"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="transition-colors hover:text-[var(--accent-primary)]"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
