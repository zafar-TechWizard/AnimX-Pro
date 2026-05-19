import { ComponentItem } from './index';

export const dataViz: ComponentItem[] = [
  {
    id: 'animated-sparkline',
    name: 'Animated Sparkline',
    description: 'Tiny, animated inline chart for trends using SVG.',
    category: 'Data Visualization',
    new: true,
    code: {
      html: `<div class="sparkline-wrapper">
  <svg class="sparkline" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
    <path class="sparkline-path" d="M0 30 L10 25 L20 28 L30 15 L40 22 L50 10 L60 12 L70 5 L80 15 L90 2 L100 8" fill="none" stroke="url(#gradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#3b82f6" />
        <stop offset="100%" stop-color="#10b981" />
      </linearGradient>
    </defs>
  </svg>
</div>`,
      css: `.sparkline-wrapper {
  width: 150px;
  height: 45px;
  background: #18181b;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #27272a;
}
.sparkline {
  width: 100%;
  height: 100%;
  overflow: visible;
}
.sparkline-path {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: draw 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}`,
      js: ``
    }
  },
  {
    id: 'progress-ring',
    name: 'Progress Ring',
    description: 'Circular animated progress indicator with percentage counter.',
    category: 'Data Visualization',
    code: {
      html: `<div class="progress-ring-container">
  <svg class="progress-ring" width="120" height="120">
    <circle class="ring-bg" stroke="#27272a" stroke-width="8" fill="transparent" r="52" cx="60" cy="60"/>
    <circle class="ring-progress" stroke="#8b5cf6" stroke-width="8" fill="transparent" r="52" cx="60" cy="60"/>
  </svg>
  <div class="ring-text" id="ring-pct">0%</div>
</div>`,
      css: `.progress-ring-container {
  position: relative;
  width: 120px;
  height: 120px;
}
.progress-ring { transform: rotate(-90deg); }
.ring-progress {
  stroke-dasharray: 326.72; /* 2 * PI * r */
  stroke-dashoffset: 326.72;
  stroke-linecap: round;
  transition: stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.ring-text {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}`,
      js: `const circle = document.querySelector('.ring-progress');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = \`\${circumference} \${circumference}\`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
  
  // Animate number
  const el = document.getElementById('ring-pct');
  let start = 0;
  const duration = 1500;
  const startTime = performance.now();
  
  function animateNumber(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * percent) + '%';
    
    if (progress < 1) {
      requestAnimationFrame(animateNumber);
    }
  }
  requestAnimationFrame(animateNumber);
}

// Trigger animation after brief delay
setTimeout(() => {
  setProgress(85);
}, 300);`
    }
  }
];
