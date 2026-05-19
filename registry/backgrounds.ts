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
  { id: 'vanta-waves', name: 'Vanta Waves', description: 'WebGL based flowing waves.', category: 'Backgrounds', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'particles-js', name: 'Constellation', description: 'Connecting nodes on mouse move.', category: 'Backgrounds', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'retro-grid', name: 'Retro Synthwave', description: '3D perspective plane moving forward.', category: 'Backgrounds', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'meteor-shower', name: 'Meteor Shower', description: 'CSS falling shooting stars.', category: 'Backgrounds', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'binary-rain', name: 'Matrix Rain', description: 'Falling green code letters.', category: 'Backgrounds', code: { html: '<!-- implementation soon -->', css: '', js: '' } }
];
