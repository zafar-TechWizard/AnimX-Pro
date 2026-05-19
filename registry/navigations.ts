import { ComponentItem } from './index';

export const navigations: ComponentItem[] = [
  {
    id: 'floating-dock',
    name: 'macOS Floating Dock',
    description: 'A floating menu dock with magnification effect on hover.',
    category: 'Navigations',
    new: true,
    code: {
      html: `<div class="dock-container">
  <div class="dock">
    <div class="dock-item"><div class="dock-icon" style="background: #3b82f6;"></div></div>
    <div class="dock-item"><div class="dock-icon" style="background: #10b981;"></div></div>
    <div class="dock-item"><div class="dock-icon" style="background: #f59e0b;"></div></div>
    <div class="dock-item"><div class="dock-icon" style="background: #ef4444;"></div></div>
    <div class="dock-item"><div class="dock-icon" style="background: #8b5cf6;"></div></div>
  </div>
</div>`,
      css: `.dock-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 200px;
  padding-bottom: 20px;
}
.dock {
  display: flex;
  gap: 12px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
  align-items: flex-end;
}
.dock-item {
  width: 48px;
  height: 48px;
  cursor: pointer;
  transition: width 0.2s cubic-bezier(0.2, 1, 0.2, 1), height 0.2s cubic-bezier(0.2, 1, 0.2, 1), margin 0.2s cubic-bezier(0.2, 1, 0.2, 1);
  transform-origin: bottom center;
}
.dock-icon {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  transition: transform 0.2s;
}
.dock-item:hover {
  width: 80px;
  height: 80px;
  margin: 0 10px;
}
.dock-item:hover + .dock-item {
  width: 60px;
  height: 60px;
}
.dock-item:has(+ .dock-item:hover) {
  width: 60px;
  height: 60px;
}
/* For older browsers not supporting :has, you'd use JS closely. But :has is widely supported now! */`,
      js: ``
    }
  },
  {
    id: 'magnetic-tabs',
    name: 'Magnetic Tab Indicator',
    description: 'Sliding background indicator that snaps to the active tab.',
    category: 'Navigations',
    code: {
      html: `<div class="tabs-container">
  <div class="tab pointer">Home</div>
  <div class="tab">Products</div>
  <div class="tab">Pricing</div>
  <div class="tab">About</div>
  <div class="tab-indicator" id="indicator"></div>
</div>`,
      css: `.tabs-container {
  display: inline-flex;
  position: relative;
  background: #18181b;
  padding: 8px;
  border-radius: 99px;
  border: 1px solid #27272a;
}
.tab {
  padding: 8px 20px;
  color: #a1a1aa;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: color 0.3s;
}
.tab:hover, .tab.active {
  color: #fff;
}
.tab-indicator {
  position: absolute;
  top: 8px; left: 8px;
  height: calc(100% - 16px);
  background: #3f3f46;
  border-radius: 99px;
  z-index: 1;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}`,
      js: `const tabs = document.querySelectorAll('.tab');
const indicator = document.getElementById('indicator');
let activeIndex = 0;

function updateIndicator() {
  const activeTab = tabs[activeIndex];
  indicator.style.width = \`\${activeTab.offsetWidth}px\`;
  indicator.style.left = \`\${activeTab.offsetLeft}px\`;
}

tabs.forEach((tab, index) => {
  tab.addEventListener('mouseenter', () => {
    indicator.style.width = \`\${tab.offsetWidth}px\`;
    indicator.style.left = \`\${tab.offsetLeft}px\`;
  });
  
  tab.addEventListener('mouseleave', () => {
    updateIndicator();
  });
  
  tab.addEventListener('click', () => {
    activeIndex = index;
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    updateIndicator();
  });
});

// Init
tabs[0].classList.add('active');
updateIndicator();`
    }
  }
];
