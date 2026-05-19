import { ComponentItem } from './index';

export const typography: ComponentItem[] = [
  {
    id: 'terminal-typewriter',
    name: 'Terminal Output',
    description: 'Reveals text character by character with a blinking block.',
    category: 'Typography',
    new: true,
    code: {
      html: `<div class="terminal-text" id="typewriter"></div>`,
      css: `.terminal-text {
  font-family: 'Courier New', Courier, monospace;
  color: #10b981;
  font-size: 1.2rem;
  background: #000;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #333;
}
.cursor {
  display: inline-block;
  width: 10px; height: 1.2em;
  background: #10b981;
  vertical-align: bottom;
  animation: blink 1s step-end infinite;
  margin-left: 2px;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}`,
      js: `const el = document.getElementById('typewriter');
const text = "> Initializing system...\\n> Access granted.";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    const char = text.charAt(i);
    if (char === '\\n') {
      el.innerHTML = el.innerHTML.replace('<span class="cursor"></span>', '') + '<br>';
    } else {
      el.innerHTML = el.innerHTML.replace('<span class="cursor"></span>', '') + char;
    }
    el.innerHTML += '<span class="cursor"></span>';
    i++;
    setTimeout(typeWriter, Math.random() * 50 + 30);
  }
}
typeWriter();`
    }
  },
  {
    id: 'gradient-reveal',
    name: 'Gradient Sweep',
    description: 'Color gradient sweeps across text.',
    category: 'Typography',
    code: {
      html: `<h1 class="gradient-reveal">Stunning Visuals</h1>`,
      css: `.gradient-reveal {
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(
    90deg,
    #52525b 0%,
    #fff 50%,
    #52525b 100%
  );
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: shine 3s linear infinite;
}
@keyframes shine {
  to { background-position: 200% center; }
}`,
      js: ``
    }
  },
  { id: 'scramble-text', name: 'Data Scramble', description: 'Decoder ring gibberish to text effect.', category: 'Typography', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  {
    id: 'stagger-fade',
    name: 'Staggered Fade',
    description: 'Letters fade in sequence.',
    category: 'Typography',
    code: {
      html: `<div class="stagger-container">
  <span>R</span><span>e</span><span>v</span><span>e</span><span>a</span><span>l</span>
</div>`,
      css: `.stagger-container { font-size: 3rem; font-weight: bold; }
.stagger-container span {
  opacity: 0;
  animation: fade-in 0.5s forwards;
}
.stagger-container span:nth-child(1) { animation-delay: 0.1s; }
.stagger-container span:nth-child(2) { animation-delay: 0.2s; }
.stagger-container span:nth-child(3) { animation-delay: 0.3s; }
.stagger-container span:nth-child(4) { animation-delay: 0.4s; }
.stagger-container span:nth-child(5) { animation-delay: 0.5s; }
.stagger-container span:nth-child(6) { animation-delay: 0.6s; }
@keyframes fade-in {
  to { opacity: 1; text-shadow: 0 0 10px rgba(255,255,255,0.5); }
}`,
      js: ``
    }
  },
  { id: 'blur-in', name: 'Blur Focus', description: 'Text comes out of focus into clarity.', category: 'Typography', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'highlight-marker', name: 'Marker Highlight', description: 'Yellow highlight draws behind text.', category: 'Typography', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'split-text', name: 'Vertical Split', description: 'Text halves slide together.', category: 'Typography', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'isometric-text', name: 'Isometric 3D', description: 'Shadow depth 3D text.', category: 'Typography', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  {
    id: 'neon-glow',
    name: 'Neon Flicker',
    description: 'Flickering neon sign text.',
    category: 'Typography',
    code: {
      html: `<h1 class="neon-text">OPEN</h1>`,
      css: `.neon-text {
  font-family: 'Arial', sans-serif;
  font-size: 5rem;
  font-weight: 900;
  color: #fff;
  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px #ff00de,
    0 0 82px #ff00de,
    0 0 92px #ff00de,
    0 0 102px #ff00de,
    0 0 151px #ff00de;
  animation: flicker 1.5s infinite alternate;
}
@keyframes flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% { text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #ff00de, 0 0 82px #ff00de, 0 0 92px #ff00de; }
  20%, 24%, 55% { text-shadow: none; color: #555; }
}`,
      js: ``
    }
  },
  { id: 'wave-text', name: 'Jumping Wave', description: 'Individual letters jump in a wave.', category: 'Typography', code: { html: '<!-- implementation soon -->', css: '', js: '' } }
];
