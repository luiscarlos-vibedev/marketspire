import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

// --- COMPONENTE DO EFEITO DE TEIA ---
function ParticleTeia() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];
    const mouse: { x: number | null, y: number | null, radius: number } = { x: null, y: null, radius: 150 };

    let lastWidth = window.innerWidth;
    const resize = () => {
      if (canvas) {
        const w = window.innerWidth;
        const h = canvas.parentElement?.offsetHeight || 700;
        canvas.width = w;
        canvas.height = h;

        // Se a largura mudar significativamente (ex: redimensionamento ou rotação), redistribuímos
        if (Math.abs(w - lastWidth) > 50) {
          init();
          lastWidth = w;
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    class Particle {
      x: number; y: number; dx: number; dy: number; size: number;
      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.dx = (Math.random() - 0.5) * 1.2;
        this.dy = (Math.random() - 0.5) * 1.2;
        this.size = Math.random() * 2 + 1.5; // Aumentei o tamanho base
      }
      draw() {
        ctx!.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
      update() {
        if (this.x > canvas!.width || this.x < 0) this.dx = -this.dx;
        if (this.y > canvas!.height || this.y < 0) this.dy = -this.dy;
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }
    }

    const init = () => {
      if (!canvas) return;
      
      // Forçamos a captura das dimensões reais da janela e do container
      // Usamos window.innerWidth para largura pois o Hero é full-width
      const w = window.innerWidth;
      const h = canvas.parentElement?.offsetHeight || 700;

      canvas.width = w;
      canvas.height = h;
      
      particles = [];
      // Aumentamos para 220 partículas para uma distribuição mais densa e uniforme
      for (let i = 0; i < 220; i++) {
        particles.push(new Particle(w, h));
      }
    };

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance = ((particles[a].x - particles[b].x) ** 2 + (particles[a].y - particles[b].y) ** 2);
          if (distance < 18000) { // Aumentei levemente o alcance da teia
            let opacity = 1 - (distance / 18000);
            ctx!.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.15})`; // Mais sutil
            ctx!.lineWidth = 0.8;
            ctx!.beginPath();
            ctx!.moveTo(particles[a].x, particles[a].y);
            ctx!.lineTo(particles[b].x, particles[b].y);
            ctx!.stroke();
          }
        }
        // Interação com o Mouse (suave, sem "mancha")
        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - particles[a].x;
          let dy = mouse.y - particles[a].y;
          let distance = Math.sqrt(dx*dx + dy*dy);
          if (distance < 120) { // Reduzi o raio do mouse para não "manchar"
            ctx!.strokeStyle = `rgba(0, 209, 255, 0.3)`; // Azul mais suave
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(particles[a].x, particles[a].y);
            ctx!.lineTo(mouse.x, mouse.y);
            ctx!.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => p.update());
      connect();
      requestAnimationFrame(animate);
    };

    // Garantimos que o layout esteja pronto antes de iniciar
    const start = () => {
      resize();
      init();
      animate();
    };

    // Usamos um pequeno timeout além do requestAnimationFrame para garantir o cálculo do layout
    const timeoutId = setTimeout(() => {
      requestAnimationFrame(start);
    }, 150);

    window.addEventListener('resize', resize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
}

// --- COMPONENTE PRINCIPAL HERO ---
export default function Hero() {
  return (
    <section className="relative min-h-[700px] flex items-center pt-20 overflow-hidden bg-[#050029]">
      
      {/* 1. O Efeito de Teia (Fica ao fundo) */}
      <ParticleTeia />

      {/* 2. Imagem de Fundo e Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(https://i.imgur.com/i3DW9B4.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.6
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#050029] via-[#050029]/80 to-transparent" />
      </div>

      {/* 3. Conteúdo Principal */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-start text-left max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-[900] text-white leading-[1.1] mb-6 font-montserrat uppercase tracking-tight text-left"
          >
            AUMENTE SUAS VENDAS E ALCANCE MAIS CLIENTES COM UM <span className="text-[#00D1FF]">SITE PROFISSIONAL</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-lg md:text-xl lg:text-2xl mb-10 text-left max-w-3xl opacity-90 leading-relaxed"
          >
            Somos especialistas em criar sites personalizados que convertem visitantes em leads e clientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="https://wa.me/5543996550891?text=Quero%20um%20site%20que%20vende%20por%20mim!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#228A09] hover:bg-[#1a6a07] text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-green-900/20 uppercase tracking-wide"
            >
              <img 
                src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png" 
                alt="WhatsApp" 
                className="w-6 h-6 object-contain brightness-0 invert" 
                referrerPolicy="no-referrer" 
              />
              Solicitar Orçamento
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
