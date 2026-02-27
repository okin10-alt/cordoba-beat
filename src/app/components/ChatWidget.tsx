import { ChevronUp, Hash, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface Message {
  id: string;
  timestamp: string;
  username: string;
  message: string;
  userColor?: string;
}

interface ChatWidgetProps {
  onExpand: () => void;
  messages: Message[];
  usersCount: number;
}

export function ChatWidget({ onExpand, messages, usersCount }: ChatWidgetProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Mostrar solo últimos 3 mensajes
  const recentMessages = messages.slice(-3);

  return (
    <div 
      className="fixed bottom-6 right-6 flex flex-col rounded-lg overflow-hidden shadow-2xl cursor-pointer transition-all hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]"
      onClick={onExpand}
      style={{
        width: 'min(360px, calc(100vw - 48px))',
        height: '180px',
        backgroundColor: '#000000',
        border: '2px solid var(--accent-primary)',
        fontFamily: 'monospace',
        zIndex: 99999
      }}
    >
      {/* Header */}
      <div 
        className="flex items-center justify-between px-3 py-2.5 select-none"
        style={{
          background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)',
          borderBottom: '1px solid var(--accent-primary)'
        }}
      >
        <div className="flex items-center gap-2">
          <Hash className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
          <span className="font-mono font-bold text-xs tracking-wide" style={{ color: 'var(--accent-primary)' }}>
            CORDOBA-BEAT
          </span>
          <div className="flex items-center gap-1 ml-2">
            <div 
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: '#00FF88' }}
            />
            <span className="text-xs" style={{ color: '#666' }}>LIVE</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" style={{ color: '#666' }} />
            <span className="text-xs font-mono" style={{ color: '#666' }}>{usersCount}</span>
          </div>
          <ChevronUp className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
        </div>
      </div>

      {/* Messages Preview */}
      <div 
        className="flex-1 overflow-hidden px-3 py-2"
        style={{ backgroundColor: '#0a0a0a' }}
      >
        <div className="space-y-1">
          {recentMessages.map((msg) => (
            <div key={msg.id} className="font-mono text-xs leading-relaxed">
              <span style={{ color: '#666' }}>[{msg.timestamp}]</span>{' '}
              <span style={{ color: msg.userColor || '#00FF88', fontWeight: 700 }}>
                {msg.username}:
              </span>{' '}
              <span style={{ color: '#E5E5E5' }} className="line-clamp-1">
                {msg.message}
              </span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Action Bar */}
      <div 
        className="px-3 py-2 flex items-center justify-center border-t"
        style={{ 
          backgroundColor: 'rgba(0, 255, 136, 0.1)',
          borderColor: 'var(--accent-primary)'
        }}
      >
        <div className="flex items-center gap-2">
          <span 
            className="font-mono text-xs font-bold tracking-wide"
            style={{ color: 'var(--accent-primary)' }}
          >
            CLICK TO OPEN CHAT
          </span>
          <div className="flex gap-1">
            <div 
              className="w-1 h-1 rounded-full animate-pulse"
              style={{ backgroundColor: 'var(--accent-primary)', animationDelay: '0ms' }}
            />
            <div 
              className="w-1 h-1 rounded-full animate-pulse"
              style={{ backgroundColor: 'var(--accent-primary)', animationDelay: '150ms' }}
            />
            <div 
              className="w-1 h-1 rounded-full animate-pulse"
              style={{ backgroundColor: 'var(--accent-primary)', animationDelay: '300ms' }}
            />
          </div>
        </div>
      </div>

      {/* Glow effect overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(0,255,136,0.3) 0%, transparent 70%)'
        }}
      />
    </div>
  );
}
