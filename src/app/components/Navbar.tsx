import { Link, useLocation } from 'react-router';
import { User, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl" style={{ 
      backgroundColor: 'rgba(10, 10, 10, 0.9)',
      borderColor: 'var(--border)',
      height: '72px'
    }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/"
          style={{ fontFamily: 'var(--font-heading)' }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="text-xl sm:text-2xl tracking-tight" style={{ 
            color: 'var(--text-primary)',
            fontWeight: 700,
            letterSpacing: '-1px'
          }}>
            CORDOBA<span style={{ color: 'var(--accent-primary)' }}>BEAT</span>
          </span>
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8" style={{ fontFamily: 'var(--font-body)' }}>
          <Link 
            to="/" 
            className="uppercase tracking-wider text-sm transition-colors relative"
            style={{ 
              color: isActive('/') ? 'var(--accent-primary)' : 'var(--text-secondary)',
              fontWeight: 500,
              letterSpacing: '1px'
            }}
          >
            Inicio
            {isActive('/') && (
              <span 
                className="absolute -bottom-6 left-0 right-0 h-0.5" 
                style={{ backgroundColor: 'var(--accent-primary)' }}
              />
            )}
          </Link>
          <Link 
            to="/eventos" 
            className="uppercase tracking-wider text-sm transition-colors relative"
            style={{ 
              color: isActive('/eventos') ? 'var(--accent-primary)' : 'var(--text-secondary)',
              fontWeight: 500,
              letterSpacing: '1px'
            }}
          >
            Eventos
            {isActive('/eventos') && (
              <span 
                className="absolute -bottom-6 left-0 right-0 h-0.5" 
                style={{ backgroundColor: 'var(--accent-primary)' }}
              />
            )}
          </Link>
          <Link 
            to="/djs" 
            className="uppercase tracking-wider text-sm transition-colors relative"
            style={{ 
              color: isActive('/djs') ? 'var(--accent-primary)' : 'var(--text-secondary)',
              fontWeight: 500,
              letterSpacing: '1px'
            }}
          >
            DJs
            {isActive('/djs') && (
              <span 
                className="absolute -bottom-6 left-0 right-0 h-0.5" 
                style={{ backgroundColor: 'var(--accent-primary)' }}
              />
            )}
          </Link>
          <Link 
            to="/sets" 
            className="uppercase tracking-wider text-sm transition-colors relative"
            style={{ 
              color: isActive('/sets') ? 'var(--accent-primary)' : 'var(--text-secondary)',
              fontWeight: 500,
              letterSpacing: '1px'
            }}
          >
            Sets
            {isActive('/sets') && (
              <span 
                className="absolute -bottom-6 left-0 right-0 h-0.5" 
                style={{ backgroundColor: 'var(--accent-primary)' }}
              />
            )}
          </Link>
          
          <Link 
            to="/login"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all hover:-translate-y-0.5"
            style={{ 
              backgroundColor: 'var(--accent-primary)',
              color: '#000',
              fontWeight: 600,
              fontSize: '13px'
            }}
          >
            <User className="w-4 h-4" />
            <span>Acceder</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 transition-colors"
          style={{ color: 'var(--text-primary)' }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden border-t"
          style={{ 
            backgroundColor: 'rgba(10, 10, 10, 0.98)',
            borderColor: 'var(--border)'
          }}
        >
          <div className="px-4 py-6 space-y-4" style={{ fontFamily: 'var(--font-body)' }}>
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block uppercase tracking-wider text-sm transition-colors py-2"
              style={{ 
                color: isActive('/') ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontWeight: 500,
                letterSpacing: '1px'
              }}
            >
              Inicio
            </Link>
            <Link 
              to="/eventos" 
              onClick={() => setMobileMenuOpen(false)}
              className="block uppercase tracking-wider text-sm transition-colors py-2"
              style={{ 
                color: isActive('/eventos') ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontWeight: 500,
                letterSpacing: '1px'
              }}
            >
              Eventos
            </Link>
            <Link 
              to="/djs" 
              onClick={() => setMobileMenuOpen(false)}
              className="block uppercase tracking-wider text-sm transition-colors py-2"
              style={{ 
                color: isActive('/djs') ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontWeight: 500,
                letterSpacing: '1px'
              }}
            >
              DJs
            </Link>
            <Link 
              to="/sets" 
              onClick={() => setMobileMenuOpen(false)}
              className="block uppercase tracking-wider text-sm transition-colors py-2"
              style={{ 
                color: isActive('/sets') ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontWeight: 500,
                letterSpacing: '1px'
              }}
            >
              Sets
            </Link>
            
            <Link 
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg transition-all mt-4"
              style={{ 
                backgroundColor: 'var(--accent-primary)',
                color: '#000',
                fontWeight: 600,
                fontSize: '13px'
              }}
            >
              <User className="w-4 h-4" />
              <span>Acceder</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
