import { ComponentItem } from './index';

export const buttons: ComponentItem[] = [
  {
    id: 'magnetic-button',
    name: 'Magnetic Button',
    description: 'Button that snaps to the cursor within a radius.',
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
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.magnetic-btn:hover {
  transform: scale(1.1);
  transition: transform 0.1s linear;
}
.magnetic-text {
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}`,
      js: `const btn = document.getElementById('mag-btn');
const text = btn.querySelector('.magnetic-text');

btn.addEventListener('mousemove', (e) => {
  const rect = btn.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  
  btn.style.transform = \`translate(\${x * 0.3}px, \${y * 0.3}px) scale(1.1)\`;
  text.style.transform = \`translate(\${x * 0.2}px, \${y * 0.2}px)\`;
});

btn.addEventListener('mouseleave', () => {
  btn.style.transform = 'translate(0px, 0px) scale(1)';
  text.style.transform = 'translate(0px, 0px)';
});`
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
  { id: 'confetti-btn', name: 'Confetti Fire', description: 'Burst of particles on click.', category: 'Buttons', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'liquid-button', name: 'Liquid Button', description: 'Gooey blob hover effect.', category: 'Buttons', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'glitch-button', name: 'Glitch Effect', description: 'Cyberpunk style text glitch.', category: 'Buttons', code: { html: '<!-- implementation soon -->', css: '', js: '' } }
];
