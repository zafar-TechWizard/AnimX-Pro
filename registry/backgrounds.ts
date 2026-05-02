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
  { id: 'dot-matrix', name: 'Dot Matrix', description: 'Radial gradient dot fade out.', category: 'Backgrounds', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'vanta-waves', name: 'Vanta Waves', description: 'WebGL based flowing waves.', category: 'Backgrounds', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'particles-js', name: 'Constellation', description: 'Connecting nodes on mouse move.', category: 'Backgrounds', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'retro-grid', name: 'Retro Synthwave', description: '3D perspective plane moving forward.', category: 'Backgrounds', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'noise-grain', name: 'Film Grain', description: 'SVG static noise overlay.', category: 'Backgrounds', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'meteor-shower', name: 'Meteor Shower', description: 'CSS falling shooting stars.', category: 'Backgrounds', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'fluid-gradient', name: 'Fluid Mesh', description: 'Interwoven colorful mesh.', category: 'Backgrounds', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'binary-rain', name: 'Matrix Rain', description: 'Falling green code letters.', category: 'Backgrounds', code: { html: '<!-- implementation soon -->', css: '', js: '' } }
];
