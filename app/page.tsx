import { SpotlightPlayground } from '@/components/playground/spotlight-playground';
import { Sparkles, Code2, Cpu, ArrowRight, Zap, Layers, Puzzle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      <main className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center pt-24 pb-24">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center max-w-4xl mb-40 relative mt-12">
          {/* Decorative Glowing Orbs behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-medium text-indigo-300 mb-8 tracking-wide animate-fade-in shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>v2.0 is out now. Faster. Smoother. Framework Agnostic.</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8 leading-[1.05] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 animate-slide-up [animation-delay:100ms] opacity-0">
            Beautiful animations. <br />
            <span className="font-serif italic font-normal tracking-normal text-zinc-400">Zero dependencies.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10 animate-slide-up [animation-delay:200ms] opacity-0">
            The ultimate copy-and-paste animation library. Designed for the modern web.
            Drop them into any stack instantly. No heavy npm packages, just pure vanilla magic.
          </p>
          
          <div className="flex items-center gap-4 animate-slide-up [animation-delay:300ms] opacity-0">
            <Link href="/components" className="px-6 py-3 bg-white text-black rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Browse Components <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/docs" className="px-6 py-3 bg-zinc-900/80 backdrop-blur-md text-white border border-white/10 rounded-xl font-medium flex items-center gap-2 hover:bg-zinc-800 transition-colors">
              <Code2 className="w-4 h-4" /> Read the Docs
            </Link>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-40 animate-slide-up [animation-delay:500ms] opacity-0">
          <div className="flex flex-col gap-3 p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-2">
              <Cpu className="w-5 h-5 text-indigo-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Framework Agnostic</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">Runs anywhere. Vue, Svelte, React, Angular or just standard HTML strings. We don't discriminate.</p>
          </div>
          <div className="flex flex-col gap-3 p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-2">
              <Zap className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Zero JS Bloat</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">We utilize modern CSS features like scroll-driven animations and @property, minimizing JS payloads.</p>
          </div>
          <div className="flex flex-col gap-3 p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-2">
              <Layers className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">a11y First</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">Prefers-reduced-motion, proper ARIA labels, and high-contrast modes are supported perfectly out of the box.</p>
          </div>
        </section>

        {/* Feature Component: Spotlight Card */}
        <section className="w-full flex flex-col items-start gap-8 relative" id="playground">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="flex flex-col gap-3 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Interactive Playgrounds</h2>
            <p className="text-zinc-400 text-lg">
              Don't guess what the code does. Tweak the physics, lighting, and colors before you copy a single line of code.
            </p>
          </div>
          <SpotlightPlayground />
        </section>

        {/* Bento Grid Showcase */}
        <section className="w-full flex flex-col items-start gap-12 mt-40 pt-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
          <div className="flex flex-col gap-2 relative z-10 text-center items-center w-full mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Premium Collection</h2>
            <p className="text-zinc-400 text-lg max-w-2xl">
              Micro-interactions that turn boring dashboards into multi-million dollar SaaS products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full h-[600px]">
            {/* Bento Box 1 - Large Left */}
            <div className="col-span-1 border border-white/10 md:col-span-8 rounded-3xl bg-[#080808] overflow-hidden group relative flex flex-col justify-end p-8">
               <div className="absolute inset-0 bg-grid-white/[0.02]" />
               <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   {/* Cool magnetic button mockup inside */}
                   <button className="px-8 py-4 bg-zinc-900 border border-zinc-700 text-white rounded-full font-medium transition-all group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] relative overflow-hidden flex items-center justify-center">
                     <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                     <span className="relative z-10 font-mono tracking-tight text-sm flex gap-2"><Puzzle className="w-4 h-4"/> MAGNETIC_BTN</span>
                   </button>
               </div>
               <div className="relative z-20 mt-auto">
                 <h3 className="text-xl font-semibold text-white">Magnetic Elements</h3>
                 <p className="text-zinc-400 text-sm mt-1">Physics-based cursor attraction.</p>
               </div>
            </div>

            {/* Bento Box 2 - Top Right */}
            <div className="col-span-1 md:col-span-4 rounded-3xl bg-[#080808] border border-white/10 overflow-hidden group relative flex flex-col justify-end p-8">
               <div className="absolute inset-0 bg-dot-white/[0.05]" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/5 backdrop-blur-xl group-hover:rotate-12 transition-transform duration-500" />
               <div className="relative z-20 mt-auto">
                 <h3 className="text-xl font-semibold text-white">Glassmorphism</h3>
                 <p className="text-zinc-400 text-sm mt-1">Pure CSS frosted panels.</p>
               </div>
            </div>

            {/* Bento Box 3 - Bottom Right */}
            <div className="col-span-1 md:col-span-4 rounded-3xl bg-[#080808] border border-white/10 overflow-hidden group relative flex flex-col justify-end p-8">
               <div className="absolute inset-0 bg-gradient-to-bl from-zinc-900 via-black to-black opacity-50" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-8">
                 <div className="w-full h-8 bg-zinc-900 border border-zinc-800 rounded-md overflow-hidden relative">
                    <div className="absolute left-0 top-0 h-full w-[0%] bg-white rounded-r-md group-hover:w-full transition-all duration-1000 ease-out" />
                 </div>
               </div>
               <div className="relative z-20 mt-auto">
                 <h3 className="text-xl font-semibold text-white">Fluid Progress</h3>
                 <p className="text-zinc-400 text-sm mt-1">Staggered CSS animations.</p>
               </div>
            </div>
          </div>
          
          <div className="w-full flex justify-center mt-8">
            <Link href="/components" className="px-6 py-3 border border-white/10 bg-white/5 hover:bg-white/10 rounded-full font-medium transition-colors text-sm text-zinc-300">
               View All 50+ Components
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
