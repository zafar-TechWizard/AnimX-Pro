import { ComponentItem } from './index';

export const cursors: ComponentItem[] = [
  {
    id: 'custom-dot',
    name: 'Inverted Dot',
    description: 'Custom dot cursor that inverts colors underneath.',
    category: 'Cursors',
    new: true,
    code: {
      html: `<div class="cursor-dot" id="cursor-dot"></div>
<p style="color: white; margin: 100px;">Hover over this text.</p>`,
      css: `body { cursor: none; }
.cursor-dot {
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
  position: fixed;
  top: 0; left: 0;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transform: translate(-50%, -50%);
  transition: width 0.2s, height 0.2s;
}`,
      js: `const dot = document.getElementById('cursor-dot');
document.addEventListener('mousemove', (e) => {
  dot.style.left = e.clientX + 'px';
  dot.style.top = e.clientY + 'px';
});
document.addEventListener('mousedown', () => {
  dot.style.width = '12px';
  dot.style.height = '12px';
});
document.addEventListener('mouseup', () => {
  dot.style.width = '24px';
  dot.style.height = '24px';
});`
    }
  },
  { id: 'trailing-cursor', name: 'Trailing Outline', description: 'Smooth trailing circle behind cursor.', category: 'Cursors', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'text-reveal-cursor', name: 'Text Reveal', description: 'Cursor reveals hidden text mask.', category: 'Cursors', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'magnetic-cursor', name: 'Magnetic Lock', description: 'Cursor snaps to nearest link.', category: 'Cursors', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'emoji-trail', name: 'Emoji Trail', description: 'Leaves fading emojis behind.', category: 'Cursors', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'paint-drip', name: 'Paint Drip', description: 'Cursor acts as a leaking brush.', category: 'Cursors', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  {
    id: 'spotlight-cursor',
    name: 'Spotlight Screen',
    description: 'Dims entire screen except cursor radius.',
    category: 'Cursors',
    code: {
      html: `<div class="spotlight-overlay" id="spotlight"></div>
<p style="color: white; margin: 100px; position: relative; z-index: -1;">Move cursor to see the hidden text perfectly illuminated.</p>`,
      css: `.spotlight-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(circle 100px at var(--x, 50%) var(--y, 50%), transparent 0%, rgba(0,0,0,0.95) 150px);
  z-index: 9998;
}`,
      js: `const spotlight = document.getElementById('spotlight');
document.addEventListener('mousemove', (e) => {
  spotlight.style.setProperty('--x', e.clientX + 'px');
  spotlight.style.setProperty('--y', e.clientY + 'px');
});`
    }
  },
  {
    id: 'crosshair',
    name: 'Sniper Crosshair',
    description: 'Tech style crosshair.',
    category: 'Cursors',
    code: {
      html: `<div class="crosshair-container" id="crosshair">
  <div class="line horizontal"></div>
  <div class="line vertical"></div>
  <div class="center-dot"></div>
</div>`,
      css: `body { cursor: none; }
.crosshair-container {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: exclusion;
  transform: translate(-50%, -50%);
  transition: transform 0.05s linear;
}
.crosshair-container .line {
  position: absolute;
  background: #fff;
}
.crosshair-container .horizontal {
  width: 40px; height: 1px;
  top: 50%; left: -20px;
}
.crosshair-container .vertical {
  width: 1px; height: 40px;
  left: 50%; top: -20px;
}
.crosshair-container .center-dot {
  position: absolute;
  width: 4px; height: 4px;
  background: #f00;
  border-radius: 50%;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}`,
      js: `const crosshair = document.getElementById('crosshair');
document.addEventListener('mousemove', (e) => {
  crosshair.style.left = e.clientX + 'px';
  crosshair.style.top = e.clientY + 'px';
});`
    }
  },
  { id: 'gooey-cursor', name: 'Gooey Tracker', description: 'SVG filter gooey effect.', category: 'Cursors', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'blend-mode-cursor', name: 'Color Burn', description: 'Uses mix-blend-mode for burn effect.', category: 'Cursors', code: { html: '<!-- implementation soon -->', css: '', js: '' } }
];
