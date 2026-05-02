import { Code2, ChevronRight, LayoutTemplate, Zap, FileCode } from 'lucide-react';
import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 flex items-start gap-12 min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="hidden md:flex flex-col w-64 shrink-0 sticky top-24 gap-8">
        <div className="flex flex-col gap-3">
           <h4 className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Getting Started</h4>
           <div className="flex flex-col gap-2 border-l border-white/10 ml-2 pl-4">
             <Link href="#" className="text-sm font-medium text-white">Introduction</Link>
             <Link href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Installation</Link>
             <Link href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Core Concepts</Link>
           </div>
        </div>
        <div className="flex flex-col gap-3">
           <h4 className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Frameworks</h4>
           <div className="flex flex-col gap-2 border-l border-white/10 ml-2 pl-4">
             <Link href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Vanilla HTML/JS</Link>
             <Link href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">React / Next.js</Link>
             <Link href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Vue / Nuxt</Link>
             <Link href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Svelte</Link>
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-start gap-10 max-w-3xl pb-32 animate-slide-up opacity-0">
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-semibold text-zinc-300 w-fit">
            <Code2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Documentation v2.1</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2">Introduction</h1>
          <p className="text-lg text-zinc-400 leading-relaxed font-medium">
            AnimX Pro is a copy-and-paste platform. You don&apos;t need to install any heavy npm packages. 
            Just browse the catalog, tweak the properties, and paste the resulting HTML, CSS, and JavaScript directly into your app.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4">
           <div className="p-5 rounded-2xl border border-white/5 bg-[#050505] hover:bg-[#0a0a0a] transition-colors flex flex-col gap-2 group cursor-pointer">
              <LayoutTemplate className="w-5 h-5 text-indigo-400 mb-1" />
              <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">Browse Components</h3>
              <p className="text-sm text-zinc-500">Explore over 200+ premium interactions.</p>
           </div>
           <div className="p-5 rounded-2xl border border-white/5 bg-[#050505] hover:bg-[#0a0a0a] transition-colors flex flex-col gap-2 group cursor-pointer">
              <Zap className="w-5 h-5 text-amber-400 mb-1" />
              <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors">Performance Guide</h3>
              <p className="text-sm text-zinc-500">Learn how we achieve 60fps animations.</p>
           </div>
        </div>

        <div className="w-full border-t border-white/10 pt-10 flex flex-col gap-12 mt-4">
          <section className="flex flex-col gap-5">
             <div className="flex items-center gap-4">
               <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold font-mono text-sm">1</div>
               <h2 className="text-2xl font-bold text-white">Choose a component</h2>
             </div>
             <div className="ml-12">
               <p className="text-zinc-400 leading-relaxed">Head over to the Components tab and select a micro-interaction or layout component. We have categorized them carefully.</p>
             </div>
          </section>

          <section className="flex flex-col gap-5">
             <div className="flex items-center gap-4">
               <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold font-mono text-sm">2</div>
               <h2 className="text-2xl font-bold text-white">Tweak Attributes & Config</h2>
             </div>
             <div className="ml-12">
               <p className="text-zinc-400 leading-relaxed">Use the interactive playground to adjust colors, sizes, and physics. The code snippet will update automatically to reflect your changes in CSS custom properties.</p>
             </div>
          </section>

          <section className="flex flex-col gap-5">
             <div className="flex items-center gap-4">
               <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold font-mono text-sm">3</div>
               <h2 className="text-2xl font-bold text-white">Copy, Paste & Ship</h2>
             </div>
             <div className="ml-12 flex flex-col gap-4">
               <p className="text-zinc-400 leading-relaxed">Since everything is Vanilla JS and pure CSS, it works equally well in React, Astro, Next.js, HTML, and more. No Webpack configuration needed.</p>
               
               <div className="relative group">
                 <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                 <div className="relative rounded-2xl bg-[#080808] border border-white/10 overflow-hidden">
                   <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#030303]">
                     <div className="flex gap-1.5">
                       <div className="w-3 h-3 rounded-full bg-red-500/50" />
                       <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                       <div className="w-3 h-3 rounded-full bg-green-500/50" />
                     </div>
                     <span className="text-xs font-mono text-zinc-500 ml-4">index.html</span>
                   </div>
                   <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto custom-scrollbar">
                     <code className="text-zinc-300">
<span className="text-zinc-500">&lt;!-- No setup required, just drop it in --&gt;</span>
<span className="text-blue-400">&lt;div</span> <span className="text-indigo-300">class</span>=<span className="text-emerald-300">&quot;animx-component-wrapper&quot;</span><span className="text-blue-400">&gt;</span>
  <span className="text-blue-400">&lt;div</span> <span className="text-indigo-300">class</span>=<span className="text-emerald-300">&quot;animx-spotlight-card&quot;</span><span className="text-blue-400">&gt;</span>
    <span className="text-zinc-500">&lt;!-- Your content here --&gt;</span>
  <span className="text-blue-400">&lt;/div&gt;</span>
<span className="text-blue-400">&lt;/div&gt;</span>
                     </code>
                   </pre>
                 </div>
               </div>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
}
