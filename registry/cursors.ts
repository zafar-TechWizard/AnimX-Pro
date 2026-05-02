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
  { id: 'spotlight-cursor', name: 'Spotlight Screen', description: 'Dims entire screen except cursor radius.', category: 'Cursors', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'crosshair', name: 'Sniper Crosshair', description: 'Tech style crosshair.', category: 'Cursors', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'gooey-cursor', name: 'Gooey Tracker', description: 'SVG filter gooey effect.', category: 'Cursors', code: { html: '<!-- implementation soon -->', css: '', js: '' } },
  { id: 'blend-mode-cursor', name: 'Color Burn', description: 'Uses mix-blend-mode for burn effect.', category: 'Cursors', code: { html: '<!-- implementation soon -->', css: '', js: '' } }
];
