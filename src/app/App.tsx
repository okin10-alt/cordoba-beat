import { BrowserRouter, Routes, Route } from 'react-router';
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ChatWindow } from './components/ChatWindow';
import { ChatWidget } from './components/ChatWidget';
import { Home } from './pages/Home';
import { Eventos } from './pages/Eventos';
import { DJs } from './pages/DJs';
import { Sets } from './pages/Sets';
import { PerfilDJ } from './pages/PerfilDJ';
import { DetalleEvento } from './pages/DetalleEvento';
import { Login } from './pages/Login';

export default function App() {
  const [chatMode, setChatMode] = useState<'widget' | 'full'>('widget');

  // Mock messages para el preview
  const mockMessages = [
    {
      id: '1',
      timestamp: '20:16',
      username: 'DJ_Pulse',
      message: '¡Qué onda gente! ¿Listos para el evento del sábado?',
      userColor: '#00FF88'
    },
    {
      id: '2',
      timestamp: '20:17',
      username: 'TechnoLover',
      message: 'Ya tengo mi entrada! 🔥',
      userColor: '#4ECDC4'
    },
    {
      id: '3',
      timestamp: '20:19',
      username: 'MarcoB',
      message: 'El lineup está increíble este mes',
      userColor: '#FF6B9D'
    }
  ];

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/evento/:id" element={<DetalleEvento />} />
            <Route path="/djs" element={<DJs />} />
            <Route path="/dj/:id" element={<PerfilDJ />} />
            <Route path="/sets" element={<Sets />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>

      {/* Chat System */}
      {chatMode === 'full' ? (
        <ChatWindow 
          onClose={() => setChatMode('widget')}
          onMinimize={() => setChatMode('widget')}
        />
      ) : (
        <ChatWidget 
          onExpand={() => setChatMode('full')}
          messages={mockMessages}
          usersCount={6}
        />
      )}
    </BrowserRouter>
  );
}
