📋 COPIA ESTE ARCHIVO:
Archivo: src/app/components/ChatWindow.tsx

import { useState, useRef, useEffect } from 'react';
import { X, Minus, Send, Users, Hash } from 'lucide-react';
import { ChatMessage } from './ChatMessage';

interface ChatWindowProps {
  onClose: () => void;
  onMinimize: () => void;
}

interface Message {
  id: string;
  timestamp: string;
  username: string;
  message: string;
  type?: 'normal' | 'action' | 'system' | 'join' | 'leave';
  userColor?: string;
}

const userColors = [
  '#00FF88', '#FF6B6B', '#4ECDC4', '#FFD93D', '#FF6B9D', 
  '#95E1D3', '#F38181', '#AA96DA', '#FCBAD3', '#A8D8EA'
];

export function ChatWindow({ onClose, onMinimize }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      timestamp: '20:15',
      username: 'System',
      message: 'Welcome to #cordoba-beat',
      type: 'system'
    },
    {
      id: '2',
      timestamp: '20:15',
      username: 'System',
      message: 'Topic: La escena electrónica de Córdoba | Commands: /me /nick /help',
      type: 'system'
    },
    {
      id: '3',
      timestamp: '20:16',
      username: 'DJ_Pulse',
      message: '¡Qué onda gente! ¿Listos para el evento del sábado?',
      userColor: '#00FF88'
    },
    {
      id: '4',
      timestamp: '20:17',
      username: 'TechnoLover',
      message: 'Ya tengo mi entrada! 🔥',
      userColor: '#4ECDC4'
    },
    {
      id: '5',
      timestamp: '20:17',
      username: 'DJ_Pulse',
      message: 'está preparando el mejor set de su carrera',
      type: 'action'
    },
    {
      id: '6',
      timestamp: '20:18',
      username: 'BassHead92',
      message: 'has joined #cordoba-beat',
      type: 'join'
    },
    {
      id: '7',
      timestamp: '20:19',
      username: 'MarcoB',
      message: 'El lineup está increíble este mes',
      userColor: '#FF6B9D'
    }
  ]);

  const [inputValue, setInputValue] = useState('');
  const [currentUser] = useState('You');
  const [usersOnline] = useState([
    { nick: 'DJ_Pulse', status: 'online', color: '#00FF88' },
    { nick: 'TechnoLover', status: 'online', color: '#4ECDC4' },
    { nick: 'BassHead92', status: 'online', color: '#FFD93D' },
    { nick: 'MarcoB', status: 'online', color: '#FF6B9D' },
    { nick: 'EchoMind', status: 'idle', color: '#95E1D3' },
    { nick: 'MinimalKid', status: 'online', color: '#AA96DA' }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getCurrentTime = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const timestamp = getCurrentTime();
    const randomColor = userColors[Math.floor(Math.random() * userColors.length)];

    // Handle commands
    if (inputValue.startsWith('/me ')) {
      const actionText = inputValue.substring(4);
      const newMessage: Message = {
        id: Date.now().toString(),
        timestamp,
        username: currentUser,
        message: actionText,
        type: 'action'
      };
      setMessages([...messages, newMessage]);
    } else if (inputValue.startsWith('/help')) {
      const helpMessage: Message = {
        id: Date.now().toString(),
        timestamp,
        username: 'System',
        message: 'Commands: /me [action], /nick [name], /help',
        type: 'system'
      };
      setMessages([...messages, helpMessage]);
    } else {
      // Normal message
      const newMessage: Message = {
        id: Date.now().toString(),
        timestamp,
        username: currentUser,
        message: inputValue,
        type: 'normal',
        userColor: '#00FF88'
      };
      setMessages([...messages, newMessage]);
    }

    setInputValue('');
    inputRef.current?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div 
      className="fixed bottom-6 right-6 flex flex-col rounded-lg overflow-hidden shadow-2xl"
      style={{
        width: 'min(750px, calc(100vw - 48px))',
        height: 'min(550px, calc(100vh - 120px))',
        backgroundColor: '#000000',
        border: '2px solid var(--accent-primary)',
        fontFamily: 'monospace',
        zIndex: 9999
      }}
    >
      {/* Title Bar - Estilo Windows 95 */}
      <div 
        className="flex items-center justify-between px-3 py-2 cursor-move select-none"
        style={{
          background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)',
          borderBottom: '1px solid var(--accent-primary)'
        }}
      >
        <div className="flex items-center gap-2">
          <Hash className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
          <span className="font-mono font-bold text-sm" style={{ color: 'var(--accent-primary)' }}>
            mIRC - #cordoba-beat
          </span>
        </div>
        
        <div className="flex items-center gap-1">
          <button
            onClick={onMinimize}
            className="w-6 h-6 flex items-center justify-center rounded hover:bg-[rgba(255,255,255,0.1)] transition-colors"
            style={{ color: 'var(--text-primary)' }}
          >
            <Minus className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="w-6 h-6 flex items-center justify-center rounded hover:bg-[rgba(255,0,0,0.2)] transition-colors"
            style={{ color: '#FF6B6B' }}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Messages Area */}
        <div className="flex-1 flex flex-col">
          {/* Topic Bar */}
          <div 
            className="px-3 py-2 text-xs font-mono border-b"
            style={{ 
              backgroundColor: 'rgba(0, 255, 136, 0.05)',
              borderColor: 'rgba(0, 255, 136, 0.2)',
              color: 'var(--accent-primary)'
            }}
          >
            <span style={{ color: '#666' }}>Topic:</span> La escena electrónica de Córdoba 🎧 | Próximo evento: TECHNO NIGHT - 15 MAR
          </div>

          {/* Messages Container */}
          <div 
            className="flex-1 overflow-y-auto"
            style={{ 
              backgroundColor: '#0a0a0a',
              scrollbarWidth: 'thin',
              scrollbarColor: 'var(--accent-primary) #1a1a1a'
            }}
          >
            {messages.map((msg) => (
              <ChatMessage key={msg.id} {...msg} />
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div 
            className="flex items-center gap-2 p-3 border-t"
            style={{ 
              backgroundColor: '#141414',
              borderColor: 'rgba(0, 255, 136, 0.2)'
            }}
          >
            <span className="font-mono text-sm font-bold" style={{ color: 'var(--accent-primary)' }}>
              &gt;
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message... (try /me or /help)"
              className="flex-1 bg-transparent border-none outline-none font-mono text-sm"
              style={{ color: 'var(--text-primary)' }}
              autoFocus
            />
            <button
              onClick={handleSendMessage}
              className="px-3 py-1.5 rounded transition-all hover:opacity-80"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: '#000'
              }}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Users Sidebar */}
        <div 
          className="w-40 border-l overflow-y-auto hidden sm:block"
          style={{ 
            backgroundColor: '#0f0f0f',
            borderColor: 'rgba(0, 255, 136, 0.2)'
          }}
        >
          <div 
            className="px-3 py-2 border-b flex items-center gap-2"
            style={{ borderColor: 'rgba(0, 255, 136, 0.2)' }}
          >
            <Users className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
            <span className="font-mono text-xs font-bold" style={{ color: 'var(--accent-primary)' }}>
              USERS ({usersOnline.length})
            </span>
          </div>
          
          <div className="py-2">
            {usersOnline.map((user) => (
              <div 
                key={user.nick}
                className="px-3 py-1.5 hover:bg-[rgba(0,255,136,0.05)] cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ 
                      backgroundColor: user.status === 'online' ? '#00FF88' : '#666'
                    }}
                  />
                  <span 
                    className="font-mono text-xs truncate"
                    style={{ color: user.color }}
                  >
                    {user.nick}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div 
        className="px-3 py-1 flex items-center justify-between text-xs font-mono border-t"
        style={{ 
          backgroundColor: '#141414',
          borderColor: 'rgba(0, 255, 136, 0.2)',
          color: '#666'
        }}
      >
        <span>Connected to cordoba-beat.server</span>
        <span>Lag: 0ms</span>
      </div>
    </div>
  );
}
