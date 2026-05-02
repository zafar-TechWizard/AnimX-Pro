import { Cpu, Move, Zap, Palette, Fingerprint, Maximize, MousePointer2, Scan, Smartphone } from 'lucide-react';
import Link from 'next/link';

const COMPONENTS = [
  {
    id: 'spotlight-card',
    name: 'Spotlight Card',
    description: 'Dynamic gradient that follows cursor.',
    icon: <MousePointer2 className="w-4 h-4 text-indigo-400" />,
    new: true,
  },
  {
    id: 'magnetic-button',
    name: 'Magnetic Button',
    description: 'Attracts cursor precisely.',
    icon: <Move className="w-4 h-4 text-emerald-400" />,
  },
  {
    id: 'terminal-loader',
    name: 'Terminal Output',
    description: 'Vintage typewriter text effect.',
    icon: <Cpu className="w-4 h-4 text-zinc-400" />,
  },
  {
    id: 'glass-panel',
    name: 'Frosted Glass',
    description: 'Pure CSS backdrop blur techniques.',
    icon: <Palette className="w-4 h-4 text-pink-400" />,
  },
  {
    id: 'swipe-card',
    name: 'Tinder Swipe',
    description: 'Mobile-first swipeable cards.',
    icon: <Fingerprint className="w-4 h-4 text-orange-400" />,
  },
  {
    id: 'bento-grid',
    name: 'Bento Grid',
    description: 'Auto-layout bento boxes.',
    icon: <Maximize className="w-4 h-4 text-blue-400" />,
  },
  {
    id: 'barcode-scanner',
    name: 'Scanner Line',
    description: 'Animated scanning effect.',
    icon: <Scan className="w-4 h-4 text-red-400" />,
  },
  {
    id: 'fluid-tabs',
    name: 'Fluid Tabs',
    description: 'Morphing background indicators.',
    icon: <Smartphone className="w-4 h-4 text-cyan-400" />,
  },
  {
    id: 'electric-border',
    name: 'Electric Border',
    description: 'SVG moving border paths.',
    icon: <Zap className="w-4 h-4 text-yellow-400" />,
    new: true,
  }
];

export default function ComponentsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24 flex flex-col items-start min-h-screen">
      <div className="flex flex-col max-w-3xl mb-16 animate-slide-up opacity-0">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-white">Component Registry</h1>
        <p className="text-lg text-zinc-400 leading-relaxed font-medium">
          Premium, zero-dependency UI interactions. Ready to copy into any vanilla HTML or modern framework project.
        </p>
      </div>

      <div className="w-full mb-8 border-b border-white/5 pb-4 flex gap-4 overflow-x-auto custom-scrollbar animate-slide-up [animation-delay:100ms] opacity-0">
         <button className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-semibold whitespace-nowrap">All Components</button>
         <button className="px-4 py-1.5 rounded-full text-zinc-400 text-sm font-medium hover:text-white transition-colors whitespace-nowrap">Micro-interactions</button>
         <button className="px-4 py-1.5 rounded-full text-zinc-400 text-sm font-medium hover:text-white transition-colors whitespace-nowrap">Layouts</button>
         <button className="px-4 py-1.5 rounded-full text-zinc-400 text-sm font-medium hover:text-white transition-colors whitespace-nowrap">Typography</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full animate-slide-up [animation-delay:200ms] opacity-0">
        {COMPONENTS.map((comp) => (
          <Link href={`#`} key={comp.id} className="flex flex-col group block">
            <div className="w-full h-48 bg-[#050505] border border-white/5 rounded-t-2xl flex items-center justify-center p-6 relative overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:bg-[#080808]">
              {/* Abstract Preview */}
              <div className="absolute inset-0 bg-grid-small-white/[0.02]" />
              <div className="w-16 h-16 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-black/50">
                 {comp.icon}
              </div>
            </div>
            <div className="flex flex-col gap-1 p-5 border border-tx bg-[#0a0a0a] border-white/5 border-t-0 rounded-b-2xl group-hover:border-white/20 transition-all duration-500">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-white tracking-tight text-sm">{comp.name}</h3>
                {comp.new && <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-bold tracking-wider uppercase">New</span>}
              </div>
              <p className="text-xs text-zinc-500">{comp.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
