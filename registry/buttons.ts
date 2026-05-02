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
  { id: 'liquid-button', name: 'Liquid Button', description: 'Gooey blob hover effect.', category: 'Buttons', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'glitch-button', name: 'Glitch Effect', description: 'Cyberpunk style text glitch.', category: 'Buttons', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'gradient-border-btn', name: 'Gradient Border', description: 'Rotating gradient outline.', category: 'Buttons', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'swipe-fill-btn', name: 'Swipe Fill', description: 'Background fills from direction of entry.', category: 'Buttons', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'shimmer-btn', name: 'Shimmer Button', description: 'Subtle shine sweeps across.', category: 'Buttons', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'press-3d-btn', name: '3D Press', description: 'Push-down arcade style button.', category: 'Buttons', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'underline-grow', name: 'Underline Grow', description: 'Text link hover growth.', category: 'Buttons', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'confetti-btn', name: 'Confetti Fire', description: 'Burst of particles on click.', category: 'Buttons', code: { html: '<!-- implementation soon -->', css: '', js: '' } }
];
