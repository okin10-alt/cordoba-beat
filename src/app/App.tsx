import { BrowserRouter, Routes, Route } from 'react-router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Eventos } from './pages/Eventos';
import { DJs } from './pages/DJs';
import { Sets } from './pages/Sets';
import { PerfilDJ } from './pages/PerfilDJ';
import { DetalleEvento } from './pages/DetalleEvento';
import { Login } from './pages/Login';

export default function App() {
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
    </BrowserRouter>
  );
}
