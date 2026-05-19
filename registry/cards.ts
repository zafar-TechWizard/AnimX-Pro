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
    description: 'Interactive 3D rotation based on mouse hover with shifting glare.',
    category: 'Cards',
    code: {
      html: `<div class="tilt-container" id="tilt-box">
  <div class="tilt-content">
    <div class="glare" id="glare"></div>
    Hover me naturally
  </div>
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
  color: white; font-weight: bold; font-size: 1.5rem;
  transition: transform 0.1s ease;
  transform-style: preserve-3d;
  position: relative;
  overflow: hidden;
}
.glare {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4), transparent 50%);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}`,
      js: `const el = document.getElementById('tilt-box');
const content = el.querySelector('.tilt-content');
const glare = document.getElementById('glare');
el.addEventListener('mousemove', (e) => {
  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * -15;
  const rotateY = ((x - centerX) / centerX) * 15;
  
  content.style.transform = \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
  glare.style.opacity = '1';
  glare.style.background = \`radial-gradient(circle at \${x}px \${y}px, rgba(255, 255, 255, 0.3), transparent 60%)\`;
});
el.addEventListener('mouseleave', () => {
  content.style.transform = 'rotateX(0) rotateY(0)';
  content.style.transition = 'transform 0.5s ease';
  glare.style.opacity = '0';
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
  {
    id: 'pricing-toggle-card',
    name: 'Pricing with Toggle',
    description: 'Pricing card with animated billing cycle toggle.',
    category: 'Cards',
    code: {
      html: `<div class="pricing-card">
  <div class="pricing-header">
    <h3>Pro Plan</h3>
    <div class="toggle-container">
      <span class="cycle active">Monthly</span>
      <div class="toggle-switch" id="billing-toggle">
        <div class="toggle-knob"></div>
      </div>
      <span class="cycle">Yearly</span>
    </div>
  </div>
  <div class="pricing-price">
    <span class="currency">$</span>
    <span class="amount" id="price-amount">29</span>
    <span class="period">/mo</span>
  </div>
  <ul class="pricing-features">
    <li>Unlimited projects</li>
    <li>Priority support</li>
    <li>Advanced analytics</li>
  </ul>
  <button class="pricing-btn">Get Started</button>
</div>`,
      css: `.pricing-card {
  background: #111;
  border-radius: 16px;
  border: 1px solid #333;
  padding: 32px;
  width: 100%;
  max-width: 350px;
  color: white;
  transition: transform 0.3s, border-color 0.3s;
}
.pricing-card:hover {
  transform: translateY(-5px);
  border-color: #6366f1;
}
.pricing-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.pricing-header h3 { margin: 0; font-size: 1.25rem; font-weight: 600; }
.toggle-container {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  color: #888;
}
.toggle-container .active { color: white; transition: color 0.3s; }
.toggle-switch {
  width: 40px; height: 20px;
  background: #333;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  transition: background 0.3s;
}
.toggle-knob {
  width: 16px; height: 16px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 2px; left: 2px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.toggle-switch.yearly { background: #6366f1; }
.toggle-switch.yearly .toggle-knob { transform: translateX(20px); }
.pricing-price {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 24px;
  display: flex;
  align-items: baseline;
}
.currency, .period { font-size: 1rem; color: #888; font-weight: 500; }
.amount { position: relative; overflow: hidden; display: inline-block; }
.amount-inner { display: inline-block; transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
.pricing-features { padding: 0; margin: 0 0 32px 0; list-style: none; }
.pricing-features li {
  margin-bottom: 12px;
  color: #ccc;
  display: flex;
  align-items: center;
  gap: 8px;
}
.pricing-features li::before {
  content: "✓";
  color: #6366f1;
  font-weight: bold;
}
.pricing-btn {
  width: 100%;
  padding: 14px;
  border-radius: 8px;
  border: none;
  background: white;
  color: black;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}
.pricing-btn:hover { background: #ddd; }`,
      js: `const toggle = document.getElementById('billing-toggle');
const amount = document.getElementById('price-amount');
const cycles = document.querySelectorAll('.toggle-container .cycle');
let isYearly = false;

// Create inner wrapper for sliding animation
amount.innerHTML = \`<span class="amount-inner">\${amount.textContent}</span>\`;
const inner = amount.querySelector('.amount-inner');

toggle.addEventListener('click', () => {
  isYearly = !isYearly;
  
  // Animation classes
  if(isYearly) {
    toggle.classList.add('yearly');
    cycles[0].classList.remove('active');
    cycles[1].classList.add('active');
  } else {
    toggle.classList.remove('yearly');
    cycles[0].classList.add('active');
    cycles[1].classList.remove('active');
  }
  
  // Slide out old price
  inner.style.transform = 'translateY(-100%)';
  inner.style.opacity = '0';
  
  setTimeout(() => {
    inner.style.transition = 'none';
    inner.textContent = isYearly ? '290' : '29';
    inner.style.transform = 'translateY(100%)';
    
    // Force reflow
    void inner.offsetWidth;
    
    inner.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s';
    inner.style.transform = 'translateY(0)';
    inner.style.opacity = '1';
  }, 400);
});`
    }
  },
  {
    id: 'expandable-bento',
    name: 'Expandable Bento',
    description: 'Grid layout that expands seamlessly into modals using CSS transitions.',
    category: 'Cards',
    code: {
      html: `<div class="bento-container" id="bento-grid">
  <div class="bento-card" data-index="0">
    <h3>Design</h3>
    <div class="bento-content">Detailed design specs...</div>
  </div>
  <div class="bento-card" data-index="1">
    <h3>Development</h3>
    <div class="bento-content">Engineering guidelines...</div>
  </div>
</div>
<div class="bento-overlay" id="bento-overlay"></div>`,
      css: `.bento-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  width: 100%;
  max-width: 500px;
  position: relative;
  z-index: 10;
}
.bento-card {
  background: #18181b;
  border-radius: 16px;
  padding: 24px;
  color: white;
  cursor: pointer;
  border: 1px solid #27272a;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.bento-card h3 { margin: 0; font-size: 1.25rem; font-weight: 600; }
.bento-content {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  margin-top: 16px;
  color: #a1a1aa;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.bento-card.expanded {
  position: fixed;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 90%; max-width: 600px;
  height: auto; min-height: 300px;
  z-index: 100;
  cursor: default;
  background: #111;
  border-color: #333;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
}
.bento-card.expanded .bento-content {
  opacity: 1;
  max-height: 300px;
}
.bento-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(4px);
  z-index: 50;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
}
.bento-overlay.active {
  opacity: 1;
  pointer-events: auto;
}`,
      js: `const cards = document.querySelectorAll('.bento-card');
const overlay = document.getElementById('bento-overlay');
let activeCard = null;
let originalRects = new Map();

cards.forEach(card => {
  card.addEventListener('click', (e) => {
    if (activeCard === card) return; // Already expanded
    
    // Save original position for a clean FLIP animation (simulated here via fixed positioning)
    const rect = card.getBoundingClientRect();
    originalRects.set(card, rect);
    
    // Apply dummy explicit dimensions to smooth the transition (Optional FLIP technique)
    // For simplicity, we rely on CSS transitions of pos/size here
    
    activeCard = card;
    card.classList.add('expanded');
    overlay.classList.add('active');
  });
});

overlay.addEventListener('click', () => {
  if (activeCard) {
    activeCard.classList.remove('expanded');
    overlay.classList.remove('active');
    activeCard = null;
  }
});`
    }
  },
  { id: 'glare-effect', name: 'Glare Effect', description: 'Moving reflection glare on surface.', category: 'Cards', code: { html: '<!-- implementation soon -->', css: '', js: '' } }
];
