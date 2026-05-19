import { ComponentItem } from './index';

export const backgrounds: ComponentItem[] = [
  {
    id: 'animated-grid',
    name: 'Moving Grid',
    description: 'Subtle panning grid background.',
    category: 'Backgrounds',
    code: {
       html: `<div class="moving-grid"></div>`,
       css: `.moving-grid {
  position: absolute;
  inset: 0;
  background-size: 40px 40px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  animation: pan 20s linear infinite;
}
@keyframes pan {
  0% { transform: translateY(0) translateX(0); }
  100% { transform: translateY(-40px) translateX(-40px); }
}`,
       js: ``
    }
  },
  {
    id: 'aurora-blur',
    name: 'Aurora Borealis',
    description: 'Slow moving blurred color blobs.',
    category: 'Backgrounds',
    new: true,
    code: {
      html: `<div class="aurora-container">
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
</div>`,
      css: `.aurora-container {
  position: absolute; inset: 0;
  overflow: hidden; background: #000;
  filter: blur(60px); opacity: 0.5;
}
.blob {
  position: absolute; border-radius: 50%;
  animation: move 10s infinite alternate;
}
.blob-1 {
  width: 400px; height: 400px;
  background: #6366f1; top: -10%; left: -10%;
}
.blob-2 {
  width: 500px; height: 500px;
  background: #a855f7; bottom: -20%; right: -10%;
  animation-delay: -5s;
}
@keyframes move {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(100px, 50px) scale(1.2); }
}`,
      js: ``
    }
  },
  {
    id: 'dot-matrix',
    name: 'Dot Matrix',
    description: 'Radial gradient dot fade out.',
    category: 'Backgrounds',
    code: {
      html: `<div class="dot-matrix-bg"></div>`,
      css: `.dot-matrix-bg {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.2) 2px, transparent 2px);
  background-size: 24px 24px;
  mask-image: radial-gradient(ellipse at center, black 10%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 10%, transparent 70%);
}`,
      js: ``
    }
  },
  {
    id: 'noise-grain',
    name: 'Film Grain',
    description: 'SVG static noise overlay.',
    category: 'Backgrounds',
    code: {
      html: `<div class="noise-bg"></div>`,
      css: `.noise-bg {
  position: absolute;
  inset: 0;
  opacity: 0.05;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}`,
      js: ``
    }
  },
  {
    id: 'fluid-gradient',
    name: 'Fluid Mesh',
    description: 'Interwoven colorful mesh.',
    category: 'Backgrounds',
    code: {
      html: `<div class="fluid-mesh"></div>`,
      css: `.fluid-mesh {
  position: absolute;
  inset: 0;
  background: radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
              radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
              radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%);
  filter: blur(40px);
  animation: pulseMesh 5s infinite alternate;
}
@keyframes pulseMesh {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}`,
      js: ``
    }
  },
  {
    id: 'particles-js',
    name: 'Constellation Nodes',
    description: 'Canvas-based particle webs that connect to your cursor.',
    category: 'Backgrounds',
    code: {
      html: `<canvas id="constellation" class="constellation-canvas"></canvas>`,
      css: `.constellation-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: #050505;
}`,
      js: `const canvas = document.getElementById('constellation');
const ctx = canvas.getContext('2d');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

let particlesArray = [];
const mouse = { x: null, y: null, radius: 100 };

window.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});
window.addEventListener('mouseout', () => {
  mouse.x = undefined; mouse.y = undefined;
});

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.dx = (Math.random() - 0.5) * 1;
    this.dy = (Math.random() - 0.5) * 1;
  }
  update() {
    if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
    if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.fill();
  }
}

function init() {
  particlesArray = [];
  let numberOfParticles = (canvas.width * canvas.height) / 9000;
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function connect() {
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      let distance = ((particlesArray[a].x - particlesArray[b].x) ** 2) + ((particlesArray[a].y - particlesArray[b].y) ** 2);
      if (distance < (canvas.width / 10) * (canvas.height / 10)) {
        let opacityValue = 1 - (distance / 10000);
        ctx.strokeStyle = 'rgba(255,255,255,' + opacityValue + ')';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
    // Connect to mouse
    if (mouse.x && mouse.y) {
      let distance = ((particlesArray[a].x - mouse.x) ** 2) + ((particlesArray[a].y - mouse.y) ** 2);
      if (distance < mouse.radius ** 2) {
        ctx.strokeStyle = 'rgba(100,200,255,' + (1 - distance / (mouse.radius ** 2)) + ')';
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
  connect();
}

init();
animate();

window.addEventListener('resize', () => {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  init();
});`
    }
  },
  {
    id: 'retro-grid',
    name: 'Retro Synthwave Grid',
    description: '3D perspective plane moving forward.',
    category: 'Backgrounds',
    code: {
      html: `<div class="retro-bg">
  <div class="retro-grid"></div>
</div>`,
      css: `.retro-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, #000 40%, #1a0033 100%);
  overflow: hidden;
  perspective: 600px;
}
.retro-grid {
  position: absolute;
  width: 200%;
  height: 150%;
  bottom: -30%;
  left: -50%;
  background-image: 
    linear-gradient(rgba(255, 0, 255, 0.4) 2px, transparent 2px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.4) 2px, transparent 2px);
  background-size: 40px 40px;
  transform: rotateX(75deg);
  transform-origin: center top;
  animation: bg-scroll 2s linear infinite;
  box-shadow: inset 0 100px 100px #000;
}
@keyframes bg-scroll {
  from { transform: rotateX(75deg) translateY(0); }
  to { transform: rotateX(75deg) translateY(40px); }
}`,
      js: ``
    }
  },
  {
    id: 'css-mesh',
    name: 'CSS Mesh Gradient',
    description: 'Wavy organic animated blobs using blend modes.',
    category: 'Backgrounds',
    code: {
      html: `<div class="mesh-bg">
  <div class="mesh-blob mesh-c1"></div>
  <div class="mesh-blob mesh-c2"></div>
  <div class="mesh-blob mesh-c3"></div>
</div>`,
      css: `.mesh-bg {
  position: absolute;
  inset: 0;
  background: #0f172a;
  overflow: hidden;
  filter: blur(40px);
}
.mesh-blob {
  position: absolute;
  border-radius: 50%;
  mix-blend-mode: color-dodge;
  animation: float-mesh 10s infinite alternate;
  opacity: 0.8;
}
.mesh-c1 {
  width: 60%; height: 60%;
  background: #3b82f6;
  top: -10%; left: -10%;
  animation-duration: 12s;
}
.mesh-c2 {
  width: 50%; height: 50%;
  background: #a855f7;
  top: 40%; right: -20%;
  animation-duration: 15s;
  animation-direction: alternate-reverse;
}
.mesh-c3 {
  width: 40%; height: 40%;
  background: #14b8a6;
  bottom: -10%; left: 20%;
  animation-duration: 9s;
}
@keyframes float-mesh {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(10%, 20%) scale(1.1); }
  100% { transform: translate(-10%, -10%) scale(0.9); }
}`,
      js: ``
    }
  },
  { id: 'meteor-shower', name: 'Meteor Shower', description: 'CSS falling shooting stars.', category: 'Backgrounds', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'binary-rain', name: 'Matrix Rain', description: 'Falling green code letters.', category: 'Backgrounds', code: { html: '<!-- implementation soon -->', css: '', js: '' } }
];
