import { ComponentItem } from './index';

export const buttons: ComponentItem[] = [
  {
    id: 'magnetic-button',
    name: 'Magnetic Button',
    description: 'Attracts cursor precisely with smooth spring-like physics.',
    category: 'Buttons',
    new: true,
    code: {
      html: `<button class="magnetic-btn" id="mag-btn">
  <span class="magnetic-text">Hover Near Me</span>
</button>`,
      css: `.magnetic-btn {
  padding: 16px 32px;
  border-radius: 99px;
  background: #fff;
  color: #000;
  border: none;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  /* We remove CSS transform transitions and rely on JS for smooth lerping */
}
.magnetic-text {
  display: inline-block;
  pointer-events: none;
}`,
      js: `const btn = document.getElementById('mag-btn');
const text = btn.querySelector('.magnetic-text');

let bounds;
let mouseX = 0, mouseY = 0;
let btnX = 0, btnY = 0;
let textX = 0, textY = 0;
let isHovered = false;

// Simple linear interpolation for spring-like feel
const lerp = (start, end, factor) => start + (end - start) * factor;

btn.addEventListener('mouseenter', () => {
  bounds = btn.getBoundingClientRect();
  isHovered = true;
});

btn.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

btn.addEventListener('mouseleave', () => {
  isHovered = false;
});

function animate() {
  if (isHovered && bounds) {
    const x = mouseX - bounds.left - bounds.width / 2;
    const y = mouseY - bounds.top - bounds.height / 2;
    btnX = lerp(btnX, x * 0.4, 0.1);
    btnY = lerp(btnY, y * 0.4, 0.1);
    textX = lerp(textX, x * 0.2, 0.1);
    textY = lerp(textY, y * 0.2, 0.1);
  } else {
    btnX = lerp(btnX, 0, 0.1);
    btnY = lerp(btnY, 0, 0.1);
    textX = lerp(textX, 0, 0.1);
    textY = lerp(textY, 0, 0.1);
  }
  
  btn.style.transform = \`translate(\${btnX}px, \${btnY}px)\`;
  text.style.transform = \`translate(\${textX}px, \${textY}px)\`;
  
  requestAnimationFrame(animate);
}

animate();`
    }
  },
  {
    id: 'ripple-btn',
    name: 'Material Ripple',
    description: 'Modern recreation of the ink ripple effect.',
    category: 'Buttons',
    code: {
      html: `<button class="ripple-btn" onclick="createRipple(event)">
  Click Me
</button>`,
      css: `.ripple-btn {
  position: relative;
  overflow: hidden;
  padding: 16px 32px;
  border-radius: 8px;
  background: #6366f1;
  color: white;
  border: none;
  cursor: pointer;
}
.ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 0.6s linear;
  background-color: rgba(255, 255, 255, 0.7);
}
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}`,
      js: `function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  
  circle.style.width = circle.style.height = \`\${diameter}px\`;
  circle.style.left = \`\${event.clientX - button.offsetLeft - radius}px\`;
  circle.style.top = \`\${event.clientY - button.offsetTop - radius}px\`;
  circle.classList.add('ripple');
  
  const ripple = button.getElementsByClassName('ripple')[0];
  if (ripple) ripple.remove();
  button.appendChild(circle);
}`
    }
  },
  {
    id: 'gradient-border-btn',
    name: 'Gradient Border',
    description: 'Rotating gradient outline.',
    category: 'Buttons',
    code: {
      html: `<button class="gradient-border-btn">
  <span>Hover Me</span>
</button>`,
      css: `@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
.gradient-border-btn {
  position: relative;
  padding: 16px 32px;
  border-radius: 8px;
  background: #000;
  color: white;
  border: none;
  cursor: pointer;
  z-index: 1;
}
.gradient-border-btn::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: 10px;
  background: conic-gradient(from var(--angle), #ff4545, #00ff99, #006aff, #ff0095, #ff4545);
  animation: spin 3s linear infinite;
  z-index: -1;
}
.gradient-border-btn span {
  background: #111;
  display: block;
  padding: 16px 32px;
  border-radius: 6px;
  margin: -16px -32px;
}
@keyframes spin {
  from { --angle: 0deg; }
  to { --angle: 360deg; }
}`,
      js: ''
    }
  },
  {
    id: 'swipe-fill-btn',
    name: 'Swipe Fill',
    description: 'Background fills from direction of entry.',
    category: 'Buttons',
    code: {
      html: `<button class="swipe-fill-btn" id="swipe-btn">
  <span>Hover & Slide</span>
</button>`,
      css: `.swipe-fill-btn {
  position: relative;
  padding: 16px 32px;
  border: 2px solid #fff;
  background: transparent;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  font-weight: bold;
}
.swipe-fill-btn span {
  position: relative;
  z-index: 2;
  transition: color 0.3s;
}
.swipe-fill-btn::before {
  content: "";
  position: absolute;
  background: #fff;
  width: 100%;
  height: 100%;
  top: var(--y, 0);
  left: var(--x, 0);
  transition: transform 0.3s ease;
  transform: scale(0);
  border-radius: 50%;
  z-index: 1;
}
.swipe-fill-btn:hover::before {
  transform: scale(2);
}
.swipe-fill-btn:hover span {
  color: #000;
}`,
      js: `const btn = document.getElementById('swipe-btn');
btn.addEventListener('mouseenter', (e) => {
  const rect = btn.getBoundingClientRect();
  const relX = e.clientX - rect.left;
  const relY = e.clientY - rect.top;
  btn.style.setProperty('--x', relX + 'px');
  btn.style.setProperty('--y', relY + 'px');
});
btn.addEventListener('mouseleave', (e) => {
  const rect = btn.getBoundingClientRect();
  const relX = e.clientX - rect.left;
  const relY = e.clientY - rect.top;
  btn.style.setProperty('--x', relX + 'px');
  btn.style.setProperty('--y', relY + 'px');
});`
    }
  },
  {
    id: 'shimmer-btn',
    name: 'Shimmer Button',
    description: 'Subtle shine sweeps across.',
    category: 'Buttons',
    code: {
      html: `<button class="shimmer-btn">Shiny Action</button>`,
      css: `.shimmer-btn {
  position: relative;
  padding: 16px 32px;
  border-radius: 8px;
  background: #18181b;
  color: #fafafa;
  border: 1px solid #3f3f46;
  cursor: pointer;
  overflow: hidden;
}
.shimmer-btn::after {
  content: "";
  position: absolute;
  top: 0; left: -100%; width: 50%; height: 100%;
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
  transform: skewX(-20deg);
  animation: shimmer 3s infinite;
}
@keyframes shimmer {
  0% { left: -100%; }
  20% { left: 200%; }
  100% { left: 200%; }
}`,
      js: ''
    }
  },
  {
    id: 'press-3d-btn',
    name: '3D Press',
    description: 'Push-down arcade style button.',
    category: 'Buttons',
    code: {
      html: `<button class="press-3d-btn">Press Me!</button>`,
      css: `.press-3d-btn {
  padding: 16px 32px;
  border-radius: 8px;
  background: #eab308;
  color: #000;
  border: none;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 6px 0 #a16207;
  transition: transform 0.1s, box-shadow 0.1s;
}
.press-3d-btn:active {
  transform: translateY(6px);
  box-shadow: 0 0 0 #a16207;
}`,
      js: ''
    }
  },
  {
    id: 'underline-grow',
    name: 'Underline Grow',
    description: 'Text link hover growth.',
    category: 'Buttons',
    code: {
      html: `<a href="#" class="underline-grow">Cool Link</a>`,
      css: `.underline-grow {
  position: relative;
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
}
.underline-grow::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: #3b82f6;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}
.underline-grow:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}`,
      js: ''
    }
  },
  {
    id: 'multi-state-btn',
    name: 'Multi-State Submit',
    description: 'Button with loading and success states built-in.',
    category: 'Buttons',
    code: {
      html: `<button class="multi-state-btn" id="multi-state-btn">
  <span class="btn-text default-text">Submit</span>
  <span class="btn-text loading-text"><div class="spinner"></div></span>
  <span class="btn-text success-text">✓ Success</span>
</button>`,
      css: `.multi-state-btn {
  position: relative;
  padding: 16px 32px;
  border-radius: 8px;
  background: #4f46e5;
  color: #fff;
  border: none;
  cursor: pointer;
  font-weight: bold;
  overflow: hidden;
  transition: background 0.3s ease;
  min-width: 140px;
  height: 52px;
}
.multi-state-btn.is-loading { background: #4338ca; pointer-events: none; }
.multi-state-btn.is-success { background: #10b981; pointer-events: none; }

.btn-text {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.default-text { opacity: 1; transform: translate(-50%, -50%) translateY(0); }
.multi-state-btn.is-loading .default-text, 
.multi-state-btn.is-success .default-text { opacity: 0; transform: translate(-50%, -50%) translateY(20px); }

.loading-text { opacity: 0; transform: translate(-50%, -50%) translateY(-20px); }
.multi-state-btn.is-loading .loading-text { opacity: 1; transform: translate(-50%, -50%) translateY(0); }
.multi-state-btn.is-success .loading-text { opacity: 0; transform: translate(-50%, -50%) translateY(20px); }

.success-text { opacity: 0; transform: translate(-50%, -50%) translateY(-20px); }
.multi-state-btn.is-success .success-text { opacity: 1; transform: translate(-50%, -50%) translateY(0); }

.spinner {
  width: 20px; height: 20px;
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 0.8s linear infinite;
}`,
      js: `const multiBtn = document.getElementById('multi-state-btn');
multiBtn.addEventListener('click', () => {
  if (multiBtn.classList.contains('is-loading') || multiBtn.classList.contains('is-success')) return;
  
  // Loading state
  multiBtn.classList.add('is-loading');
  
  // Simulate network request
  setTimeout(() => {
    multiBtn.classList.remove('is-loading');
    multiBtn.classList.add('is-success');
    
    // Reset after 2s
    setTimeout(() => {
      multiBtn.classList.remove('is-success');
    }, 2000);
  }, 1500);
});`
    }
  },
  {
    id: 'swipe-confirm-btn',
    name: 'Swipe to Confirm',
    description: 'Slide button thumb to right to activate.',
    category: 'Buttons',
    code: {
      html: `<div class="swipe-container" id="swipe-container">
  <div class="swipe-track">
    <span class="swipe-text">Slide to confirm</span>
    <div class="swipe-thumb" id="swipe-thumb">→</div>
  </div>
</div>`,
      css: `.swipe-container {
  width: 250px;
  height: 56px;
  background: #18181b;
  border-radius: 28px;
  position: relative;
  overflow: hidden;
  border: 1px solid #27272a;
}
.swipe-track {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.swipe-text {
  color: #a1a1aa;
  font-size: 14px;
  font-weight: 500;
  z-index: 1;
  transition: opacity 0.3s;
}
.swipe-thumb {
  position: absolute;
  left: 4px;
  top: 4px;
  width: 48px;
  height: 48px;
  background: #fff;
  color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: grab;
  z-index: 2;
  transition: background 0.3s;
}
.swipe-thumb:active { cursor: grabbing; }
.swipe-container.unlocked { background: #10b981; border-color: #10b981; }
.swipe-container.unlocked .swipe-text { opacity: 0; }
.swipe-container.unlocked .swipe-thumb { background: #fff; cursor: default; }`,
      js: `const container = document.getElementById('swipe-container');
const thumb = document.getElementById('swipe-thumb');
let isDragging = false;
let startX = 0;
let currentX = 0;
const maxSlide = container.clientWidth - thumb.clientWidth - 8;
let unlocked = false;

thumb.addEventListener('mousedown', (e) => {
  if (unlocked) return;
  isDragging = true;
  startX = e.clientX - currentX;
  thumb.style.transition = 'none';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  currentX = Math.max(0, Math.min(e.clientX - startX, maxSlide));
  thumb.style.transform = \`translateX(\${currentX}px)\`;
  
  if (currentX > maxSlide * 0.95) { // Unlocked
    unlocked = true;
    isDragging = false;
    currentX = maxSlide;
    thumb.style.transform = \`translateX(\${currentX}px)\`;
    thumb.innerHTML = '✓';
    container.classList.add('unlocked');
    // Option to reset
    setTimeout(() => {
      unlocked = false;
      currentX = 0;
      thumb.style.transition = 'transform 0.3s';
      thumb.style.transform = \`translateX(\${currentX}px)\`;
      thumb.innerHTML = '→';
      container.classList.remove('unlocked');
    }, 2000);
  }
});

document.addEventListener('mouseup', () => {
  if (!isDragging) return;
  isDragging = false;
  thumb.style.transition = 'transform 0.3s';
  if (!unlocked) {
    currentX = 0;
    thumb.style.transform = \`translateX(\${currentX}px)\`;
  }
});`
    }
  },
  { id: 'glitch-button', name: 'Glitch Effect', description: 'Cyberpunk style text glitch.', category: 'Buttons', code: { html: '<!-- implementation soon -->', css: '', js: '' } }
];
