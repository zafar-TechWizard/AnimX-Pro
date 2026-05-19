import { ComponentItem } from './index';

export const cards: ComponentItem[] = [
  {
    id: 'spotlight-card',
    name: 'Spotlight Card',
    description: 'Dynamic gradient spotlight that follows cursor locally.',
    category: 'Cards',
    new: true,
    code: {
      html: `<div class="spotlight-card" id="spotlight-card">
  <div class="spotlight-card-content">
    <h3>Premium Asset</h3>
    <p>Hover over this card to see the spotlight effect in action.</p>
  </div>
</div>`,
      css: `.spotlight-card {
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 300px;
  background: #111;
  border-radius: 16px;
  border: 1px solid #333;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  cursor: default;
}

.spotlight-card::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  pointer-events: none;
  background: radial-gradient(
    circle 300px at var(--mouse-x, 0) var(--mouse-y, 0),
    rgba(255, 255, 255, 0.15),
    transparent 80%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.spotlight-card:hover::before {
  opacity: 1;
}

.spotlight-card-content {
  position: relative;
  z-index: 10;
  color: #fff;
}
.spotlight-card-content h3 { font-size: 24px; margin-bottom: 8px; }
.spotlight-card-content p { color: #888; line-height: 1.5; }`,
      js: `const card = document.getElementById('spotlight-card');
card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
  card.style.setProperty('--mouse-y', (e.clientY - rect.top) + 'px');
});`
    }
  },
  {
    id: 'glass-card',
    name: 'Glassmorphism Card',
    description: 'Frosted glass effect with pure CSS backdrop-filter.',
    category: 'Cards',
    code: {
      html: `<div class="glass-card">
  <h3>Glass Panel</h3>
  <p>Frosty background using CSS backdrop-filter.</p>
</div>`,
      css: `.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 32px;
  color: #fff;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}`,
      js: ``
    }
  },
  {
    id: 'tilt-card',
    name: '3D Tilt Card',
    description: 'Interactive 3D rotation based on mouse hover.',
    category: 'Cards',
    code: {
      html: `<div class="tilt-container" id="tilt-box">
  <div class="tilt-content">Hover me naturally</div>
</div>`,
      css: `.tilt-container {
  perspective: 1000px;
  width: 300px;
  height: 400px;
}
.tilt-content {
  width: 100%; height: 100%;
  background: linear-gradient(135deg, #2a2a2a, #111);
  border-radius: 20px;
  border: 1px solid #333;
  display: flex; align-items: center; justify-content: center;
  color: white; font-weight: bold;
  transition: transform 0.1s ease;
  transform-style: preserve-3d;
}`,
      js: `const el = document.getElementById('tilt-box');
const content = el.querySelector('.tilt-content');
el.addEventListener('mousemove', (e) => {
  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * -15;
  const rotateY = ((x - centerX) / centerX) * 15;
  content.style.transform = \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
});
el.addEventListener('mouseleave', () => {
  content.style.transform = 'rotateX(0) rotateY(0)';
  content.style.transition = 'transform 0.5s ease';
});
el.addEventListener('mouseenter', () => {
  content.style.transition = 'transform 0.1s ease';
});`
    }
  },
  {
    id: 'neon-border-card',
    name: 'Neon Border Card',
    description: 'Animated glowing border.',
    category: 'Cards',
    code: {
      html: `<div class="neon-card">
  <div class="neon-card-inner">
    <h3>Cyberpunk API</h3>
    <p>Secure endpoint active.</p>
  </div>
</div>`,
      css: `@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
.neon-card {
  position: relative;
  width: 300px;
  height: 200px;
  border-radius: 12px;
  background: conic-gradient(from var(--angle), transparent 70%, #00ffcc, #ff00ff);
  animation: spin 4s linear infinite;
  padding: 2px; /* Border thickness */
}
.neon-card::before {
  content: "";
  position: absolute;
  inset: -5px;
  background: conic-gradient(from var(--angle), transparent 70%, #00ffcc, #ff00ff);
  filter: blur(10px);
  animation: spin 4s linear infinite;
  z-index: -1;
  opacity: 0.5;
}
.neon-card-inner {
  background: #09090b;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}
@keyframes spin {
  from { --angle: 0deg; }
  to { --angle: 360deg; }
}`,
      js: ``
    }
  },
  {
    id: 'flip-card',
    name: '3D Flip Card',
    description: 'Flips fully to reveal back content.',
    category: 'Cards',
    code: {
      html: `<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      Hover To Flip
    </div>
    <div class="flip-card-back">
      Secret Message
    </div>
  </div>
</div>`,
      css: `.flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
  perspective: 1000px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
}
.flip-card-front {
  background-color: #1a1a1a;
  color: white;
  border: 1px solid #333;
}
.flip-card-back {
  background-color: #4f46e5;
  color: white;
  transform: rotateY(180deg);
}`,
      js: ``
    }
  },
  { id: 'swipe-card', name: 'Tinder Swipe', description: 'Mobile-first swipeable gesture cards.', category: 'Cards', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'holographic-card', name: 'Holographic Card', description: 'Iridescent foil effect on hover.', category: 'Cards', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'expandable-card', name: 'Expandable Card', description: 'Smooth height expansion layout.', category: 'Cards', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'bento-grid', name: 'Bento Grid Focus', description: 'Grid layout that expands on hover.', category: 'Cards', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'glare-effect', name: 'Glare Effect', description: 'Moving reflection glare on surface.', category: 'Cards', code: { html: '<!-- implementation soon -->', css: '', js: '' } }
];
