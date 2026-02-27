import { useState } from 'react';
import { Link } from 'react-router';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6" style={{ 
      backgroundColor: 'var(--bg-primary)',
      fontFamily: 'var(--font-body)',
      paddingTop: '72px',
      paddingBottom: '40px'
    }}>
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8 sm:mb-10">
          <Link to="/" style={{ fontFamily: 'var(--font-heading)' }}>
            <span className="text-2xl sm:text-3xl tracking-tight" style={{ 
              color: 'var(--text-primary)',
              fontWeight: 700,
              letterSpacing: '-1px'
            }}>
              CORDOBA<span style={{ color: 'var(--accent-primary)' }}>BEAT</span>
            </span>
          </Link>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border p-6 sm:p-10" style={{ 
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border)'
        }}>
          {/* Tabs */}
          <div className="flex gap-2 mb-8 p-1 rounded-lg" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
            <button
              onClick={() => setIsLogin(true)}
              className="flex-1 py-3 rounded-lg transition-all text-sm uppercase tracking-wider"
              style={{ 
                backgroundColor: isLogin ? 'var(--accent-primary)' : 'transparent',
                color: isLogin ? '#000' : 'var(--text-secondary)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                letterSpacing: '1px'
              }}
            >
              Ingresar
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className="flex-1 py-3 rounded-lg transition-all text-sm uppercase tracking-wider"
              style={{ 
                backgroundColor: !isLogin ? 'var(--accent-primary)' : 'transparent',
                color: !isLogin ? '#000' : 'var(--text-secondary)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                letterSpacing: '1px'
              }}
            >
              Registrar
            </button>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {!isLogin && (
              <div>
                <label className="block mb-2 text-sm uppercase tracking-wider" style={{ 
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  letterSpacing: '1px'
                }}>
                  Nombre
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
                  <input
                    type="text"
                    placeholder="Tu nombre completo"
                    className="w-full pl-12 pr-4 py-3.5 rounded-lg border transition-all focus:border-[var(--accent-primary)] outline-none"
                    style={{ 
                      backgroundColor: 'var(--bg-tertiary)',
                      borderColor: 'var(--border)',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block mb-2 text-sm uppercase tracking-wider" style={{ 
                color: 'var(--text-primary)',
                fontWeight: 600,
                letterSpacing: '1px'
              }}>
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full pl-12 pr-4 py-3.5 rounded-lg border transition-all focus:border-[var(--accent-primary)] outline-none"
                  style={{ 
                    backgroundColor: 'var(--bg-tertiary)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm uppercase tracking-wider" style={{ 
                color: 'var(--text-primary)',
                fontWeight: 600,
                letterSpacing: '1px'
              }}>
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3.5 rounded-lg border transition-all focus:border-[var(--accent-primary)] outline-none"
                  style={{ 
                    backgroundColor: 'var(--bg-tertiary)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <a 
                  href="#"
                  className="text-sm hover:underline"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 rounded-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
              style={{ 
                backgroundColor: 'var(--accent-primary)',
                color: '#000',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '16px'
              }}
            >
              {isLogin ? 'INGRESAR' : 'CREAR CUENTA'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
            <span className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
              O continúa con
            </span>
            <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button className="px-4 py-3 rounded-lg border transition-all hover:border-[var(--accent-primary)] flex items-center justify-center gap-2" style={{ 
              backgroundColor: 'var(--bg-tertiary)',
              borderColor: 'var(--border)',
              color: 'var(--text-primary)',
              fontSize: '14px',
              fontWeight: 500
            }}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button className="px-4 py-3 rounded-lg border transition-all hover:border-[var(--accent-primary)] flex items-center justify-center gap-2" style={{ 
              backgroundColor: 'var(--bg-tertiary)',
              borderColor: 'var(--border)',
              color: 'var(--text-primary)',
              fontSize: '14px',
              fontWeight: 500
            }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z"/>
              </svg>
              Facebook
            </button>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center mt-8 text-sm" style={{ color: 'var(--text-secondary)' }}>
          Al continuar, aceptas nuestros{' '}
          <a href="#" className="hover:underline" style={{ color: 'var(--accent-primary)' }}>
            Términos de Servicio
          </a>
          {' '}y{' '}
          <a href="#" className="hover:underline" style={{ color: 'var(--accent-primary)' }}>
            Política de Privacidad
          </a>
        </p>
      </div>
    </div>
  );
}
