'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ComponentItem } from '@/registry';
import { Check, Copy, Code, Eye, RefreshCw } from 'lucide-react';

export function ComponentViewer({ item }: { item: ComponentItem }) {
  const [activeView, setActiveView] = useState<'preview' | 'code'>('preview');
  const [activeCodeTab, setActiveCodeTab] = useState<'html' | 'css' | 'js'>('html');
  const [copied, setCopied] = useState(false);
  const [key, setKey] = useState(0); // For forcing re-render of pure HTML previews

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const copyToClipboard = () => {
    const text = item.code[activeCodeTab];
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // We build a full HTML document for the iframe
  const previewHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { 
            margin: 0; 
            padding: 0; 
            background-color: transparent; 
            color: white; 
            font-family: system-ui, -apple-system, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
          }
          /* Component CSS */
          ${item.code.css}
        </style>
      </head>
      <body>
        ${item.code.html}
        <script>
          // Wrap in try-catch to prevent iframe breaking silently
          try {
            ${item.code.js}
          } catch(e) {
            console.error('Component JS Error:', e);
          }
        </script>
      </body>
    </html>
  `;

  return (
    <div className="w-full flex flex-col border border-white/10 rounded-2xl overflow-hidden bg-[#0a0a0a] mt-6" id={item.id}>
      <div className="w-full flex items-center justify-between p-4 border-b border-white/10 bg-[#050505]">
        <div className="flex items-center gap-3">
          <h3 className="font-semibold text-lg">{item.name}</h3>
          {item.new && <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-400 text-[10px] uppercase tracking-wider font-bold rounded">New</span>}
        </div>
        <div className="flex items-center bg-black/50 border border-white/5 rounded-lg p-1">
           <button 
             onClick={() => setActiveView('preview')}
             className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${activeView === 'preview' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
           >
             <Eye className="w-4 h-4" /> Preview
           </button>
           <button 
             onClick={() => setActiveView('code')}
             className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${activeView === 'code' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
           >
             <Code className="w-4 h-4" /> Code
           </button>
        </div>
      </div>

      <div className="w-full min-h-[400px] relative bg-[#020202]">
        {activeView === 'preview' ? (
          <>
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
            <iframe 
              key={key}
              srcDoc={previewHtml}
              className="w-full h-[400px] border-none relative z-10"
              title={`${item.name} Preview`}
              sandbox="allow-scripts allow-same-origin"
            />
            <button 
              onClick={() => setKey(k => k + 1)}
              className="absolute bottom-4 right-4 z-20 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-sm"
              title="Restart Animation"
            >
              <RefreshCw className="w-4 h-4 text-white" />
            </button>
          </>
        ) : (
          <div className="flex flex-col h-[400px]">
             <div className="flex items-center justify-between px-4 py-2 bg-[#050505] border-b border-white/5">
                <div className="flex gap-1">
                   <button 
                     onClick={() => setActiveCodeTab('html')}
                     className={`px-3 py-1 text-xs font-mono rounded ${activeCodeTab === 'html' ? 'bg-white/10 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                   >index.html</button>
                   <button 
                     onClick={() => setActiveCodeTab('css')}
                     className={`px-3 py-1 text-xs font-mono rounded ${activeCodeTab === 'css' ? 'bg-white/10 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                   >styles.css</button>
                   <button 
                     onClick={() => setActiveCodeTab('js')}
                     className={`px-3 py-1 text-xs font-mono rounded ${activeCodeTab === 'js' ? 'bg-white/10 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                   >script.js</button>
                </div>
                <button 
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-2 py-1 hover:bg-white/10 rounded text-xs text-zinc-400 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
             </div>
             <div className="flex-1 overflow-auto bg-[#0a0a0a] p-4 custom-scrollbar">
                <pre className="text-sm font-mono text-zinc-300 leading-relaxed">
                   <code>{item.code[activeCodeTab] || '/* No code needed */'}</code>
                </pre>
             </div>
          </div>
        )}
      </div>
      <div className="p-4 border-t border-white/5 bg-[#050505]">
         <p className="text-sm text-zinc-400">{item.description}</p>
      </div>
    </div>
  );
}
