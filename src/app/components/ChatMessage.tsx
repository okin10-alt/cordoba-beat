interface ChatMessageProps {
  timestamp: string;
  username: string;
  message: string;
  type?: 'normal' | 'action' | 'system' | 'join' | 'leave';
  userColor?: string;
}

export function ChatMessage({ timestamp, username, message, type = 'normal', userColor = '#00FF88' }: ChatMessageProps) {
  const renderMessage = () => {
    switch (type) {
      case 'action':
        return (
          <div className="font-mono text-sm" style={{ color: '#FF00FF' }}>
            <span style={{ color: '#666' }}>[{timestamp}]</span>{' '}
            <span style={{ color: '#FF00FF' }}>* {username}</span>{' '}
            <span style={{ color: '#FF00FF' }}>{message}</span>
          </div>
        );
      
      case 'system':
        return (
          <div className="font-mono text-sm" style={{ color: '#FFD700' }}>
            <span style={{ color: '#666' }}>[{timestamp}]</span>{' '}
            <span style={{ color: '#FFD700' }}>*** {message}</span>
          </div>
        );
      
      case 'join':
        return (
          <div className="font-mono text-sm" style={{ color: '#00FF88' }}>
            <span style={{ color: '#666' }}>[{timestamp}]</span>{' '}
            <span style={{ color: '#00FF88' }}>→ {username} has joined #cordoba-beat</span>
          </div>
        );
      
      case 'leave':
        return (
          <div className="font-mono text-sm" style={{ color: '#FF6B6B' }}>
            <span style={{ color: '#666' }}>[{timestamp}]</span>{' '}
            <span style={{ color: '#FF6B6B' }}>← {username} has left #cordoba-beat</span>
          </div>
        );
      
      default:
        return (
          <div className="font-mono text-sm" style={{ color: '#E5E5E5' }}>
            <span style={{ color: '#666' }}>[{timestamp}]</span>{' '}
            <span style={{ color: userColor, fontWeight: 700 }}>&lt;{username}&gt;</span>{' '}
            <span>{message}</span>
          </div>
        );
    }
  };

  return (
    <div className="px-3 py-1 hover:bg-[rgba(0,255,136,0.05)]">
      {renderMessage()}
    </div>
  );
}
