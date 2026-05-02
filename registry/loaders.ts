import { ComponentItem } from './index';

export const loaders: ComponentItem[] = [
  {
    id: 'cosmic-ring',
    name: 'Cosmic Ring',
    description: 'Pulsing outer ring with a glowing core.',
    category: 'Loaders',
    code: {
      html: `<div class="cosmic-loader">
  <div class="core"></div>
  <div class="ring"></div>
</div>`,
      css: `.cosmic-loader {
  position: relative; width: 64px; height: 64px;
  display: flex; align-items: center; justify-content: center;
}
.core {
  width: 16px; height: 16px;
  background: #fff; border-radius: 50%;
  box-shadow: 0 0 20px #fff;
  animation: pulse 2s infinite ease-in-out;
}
.ring {
  position: absolute; inset: 0;
  border: 2px solid transparent;
  border-top-color: #6366f1; border-right-color: #a855f7;
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.5); opacity: 1; }
}
@keyframes spin {
  to { transform: rotate(360deg); }
}`,
      js: ``
    }
  },
  {
    id: 'bouncing-dots',
    name: 'Bouncing Dots',
    description: 'Staggered simple dot bounce.',
    category: 'Loaders',
    code: {
      html: `<div class="bouncing-dots">
  <span></span><span></span><span></span>
</div>`,
      css: `.bouncing-dots { display: flex; gap: 8px; }
.bouncing-dots span {
  width: 12px; height: 12px;
  background: #fff; border-radius: 50%;
  animation: bounce 0.5s infinite alternate;
}
.bouncing-dots span:nth-child(2) { animation-delay: 0.15s; }
.bouncing-dots span:nth-child(3) { animation-delay: 0.3s; }
@keyframes bounce {
  to { transform: translateY(-10px); opacity: 0.5; }
}`,
      js: ``
    }
  },
  { id: 'skeleton-wave', name: 'Skeleton Wave', description: 'Sweeping gradient shimmer.', category: 'Loaders', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'liquid-spinner', name: 'Liquid Spinner', description: 'Merging and splitting drops.', category: 'Loaders', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'wifi-search', name: 'Radar Sweep', description: 'Sonar style sweeping arc.', category: 'Loaders', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'cube-flip', name: 'Flipping Cubes', description: 'Grid of cubes folding over.', category: 'Loaders', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'morphing-shape', name: 'Morphing Shape', description: 'Circle transitions to square/triangle.', category: 'Loaders', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'progress-ring', name: 'SVG Progress Ring', description: 'Smooth stroke-dashoffset transition.', category: 'Loaders', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'typewriter-loader', name: 'Typewriter', description: 'Typing "Loading..." with cursor.', category: 'Loaders', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'infinity-loop', name: 'Infinity Trace', description: 'Path drawing in figure 8.', category: 'Loaders', code: { html: '<!-- implementation soon -->', css: '', js: '' } }
];
