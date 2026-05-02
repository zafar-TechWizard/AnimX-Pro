'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Check, Copy, SlidersHorizontal, MousePointerClick, RefreshCw } from 'lucide-react';

export function SpotlightPlayground() {
  const [size, setSize] = useState(300);
  const [intensity, setIntensity] = useState(0.15);
  const [color, setColor] = useState('255, 255, 255');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');

  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const copyToClipboard = () => {
    const code = getCode(activeTab);
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCode = (tab: 'html' | 'css' | 'js') => {
    if (tab === 'html') {
      return `<div class="spotlight-card" id="spotlight-card">
  <div class="spotlight-card-content">
    <h3>Premium Asset</h3>
    <p>Hover over this card to see the spotlight effect in action.</p>
  </div>
</div>`;
    }
    if (tab === 'css') {
      return `.spotlight-card {
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
    circle ${size}px at var(--mouse-x, 0) var(--mouse-y, 0),
    rgba(${color}, ${intensity}),
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

.spotlight-card-content h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
}

.spotlight-card-content p {
  color: #888;
  line-height: 1.5;
}`;
    }
    if (tab === 'js') {
      return `const card = document.getElementById('spotlight-card');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  card.style.setProperty('--mouse-x', x + 'px');
  card.style.setProperty('--mouse-y', y + 'px');
});`;
    }
    return '';
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
      {/* Visual Workspace */}
      <div className="lg:col-span-7 flex flex-col gap-4">
        {/* Playground Area */}
        <div className="w-full h-[500px] bg-[#0c0c0c] border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group">
          {/* Grid Background in preview */}
          <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:20px_20px]" />
          
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative w-full max-w-[360px] h-[260px] bg-zinc-900/40 backdrop-blur-sm border border-white/10 rounded-2xl flex flex-col justify-end p-8 overflow-hidden transition-colors duration-500 cursor-default"
          >
             {/* Actual Spotlight Effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ opacity: isHovering ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              style={{
                background: `radial-gradient(circle ${size}px at ${mousePosition.x}px ${mousePosition.y}px, rgba(${color}, ${intensity}), transparent 80%)`,
              }}
            />
            
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6 border border-white/5">
                <MousePointerClick className="w-5 h-5 text-white/80" />
              </div>
              <h3 className="text-xl font-semibold mb-2 tracking-tight text-white/90">Hover Over Me</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                The gradient tracks your mouse seamlessly, illuminating the card with a soft, natural glow.
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="w-full bg-[#111] border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-6 text-sm font-medium text-zinc-300">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Properties</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400 font-medium tracking-wide">SPOTLIGHT SIZE</span>
                <span className="text-zinc-500 font-mono">{size}px</span>
              </div>
              <input 
                type="range" 
                min="100" 
                max="800" 
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
              />
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400 font-medium tracking-wide">GLOW INTENSITY</span>
                <span className="text-zinc-500 font-mono">{(intensity * 100).toFixed(0)}%</span>
              </div>
              <input 
                type="range" 
                min="0.05" 
                max="0.5" 
                step="0.01"
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
              />
            </div>

            <div className="flex flex-col gap-3 md:col-span-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400 font-medium tracking-wide">COLOR THEME</span>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => setColor('255, 255, 255')} 
                  className={`w-8 h-8 rounded-full bg-white border-2 ${color === '255, 255, 255' ? 'border-zinc-500 scale-110' : 'border-transparent'} transition-all`} 
                />
                <button 
                  onClick={() => setColor('99, 102, 241')} 
                  className={`w-8 h-8 rounded-full bg-indigo-500 border-2 ${color === '99, 102, 241' ? 'border-white scale-110' : 'border-transparent'} transition-all`} 
                />
                <button 
                  onClick={() => setColor('34, 197, 94')} 
                  className={`w-8 h-8 rounded-full bg-green-500 border-2 ${color === '34, 197, 94' ? 'border-white scale-110' : 'border-transparent'} transition-all`} 
                />
                 <button 
                  onClick={() => setColor('249, 115, 22')} 
                  className={`w-8 h-8 rounded-full bg-orange-500 border-2 ${color === '249, 115, 22' ? 'border-white scale-110' : 'border-transparent'} transition-all`} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Code Area */}
      <div className="lg:col-span-5 h-[800px] flex flex-col bg-[#050505] border border-white/10 rounded-2xl overflow-hidden relative">
        <div className="flex items-center justify-between border-b border-white/10 p-2 bg-[#0a0a0a]">
          <div className="flex gap-1 bg-black/40 p-1 rounded-lg border border-white/5">
            <button 
              onClick={() => setActiveTab('html')}
              className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${activeTab === 'html' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              index.html
            </button>
            <button 
              onClick={() => setActiveTab('css')}
              className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${activeTab === 'css' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              styles.css
            </button>
            <button 
              onClick={() => setActiveTab('js')}
              className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${activeTab === 'js' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              script.js
            </button>
          </div>
          <button 
            onClick={copyToClipboard}
            className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-zinc-800 transition-colors mr-1"
            title="Copy Code"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
          </button>
        </div>
        <div className="flex-1 overflow-auto p-4 custom-scrollbar">
          <pre className="text-[13px] font-mono leading-relaxed text-zinc-300">
            <code>
              {getCode(activeTab)}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
