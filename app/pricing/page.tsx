import { Sparkles, Check, Zap, Crown } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24 flex flex-col items-center min-h-screen">
      <div className="text-center max-w-2xl mb-16 animate-slide-up opacity-0">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-white">Simple, transparent pricing</h1>
        <p className="text-lg text-zinc-400 leading-relaxed font-medium">
          Get lifetime access to the entire UI component library, including all future updates. No recurring subscriptions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl animate-slide-up [animation-delay:200ms] opacity-0">
        {/* Basic Tier */}
        <div className="w-full border border-white/5 bg-[#050505] rounded-3xl p-8 flex flex-col relative overflow-hidden transition-all hover:border-white/10 group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
             <Zap className="w-32 h-32 text-zinc-500" />
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2 text-white">Starter</h2>
              <p className="text-zinc-400 text-sm">Perfect for hobbyists and side projects.</p>
            </div>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-bold text-white">$49</span>
              <span className="text-zinc-500 font-medium">USD</span>
            </div>
            
            <button className="w-full py-3.5 bg-[#111] text-white border border-white/10 rounded-xl font-semibold hover:bg-[#1a1a1a] hover:border-white/20 transition-all shadow-sm">
              Get Starter
            </button>
            
            <div className="flex flex-col gap-4 mt-10 pt-8 border-t border-white/5 flex-grow">
               {[
                 '100+ Basic UI Components',
                 'HTML & Tailwind snippets',
                 'Community Discord access',
                 'Personal projects only'
               ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                     <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                       <Check className="w-3 h-3 text-zinc-400" />
                     </div>
                     <span className="text-zinc-300 text-sm leading-relaxed">{feature}</span>
                  </div>
               ))}
            </div>
          </div>
        </div>

        {/* Pro Tier */}
        <div className="w-full border border-indigo-500/30 bg-[#0a0a0a] rounded-3xl p-8 flex flex-col relative overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.1)] transition-all hover:shadow-[0_0_80px_rgba(99,102,241,0.15)] group hover:-translate-y-1">
          {/* Glowing Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
             <Crown className="w-32 h-32 text-indigo-500" />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />

          <div className="relative z-10 flex flex-col h-full">
            <div className="mb-8 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-white">Pro Access</h2>
                <p className="text-zinc-400 text-sm">For serious design engineers & teams.</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-bold tracking-wider uppercase">Most Popular</span>
            </div>
            
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-bold text-white text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">$149</span>
              <span className="text-zinc-500 font-medium">USD</span>
            </div>
            
            <button className="w-full py-3.5 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 transition-colors mt-auto shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Get Pro Access
            </button>
            <p className="text-center text-xs text-zinc-500 mt-3 font-medium">Pay once. Yours forever.</p>
            
            <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-white/10 flex-grow">
               <p className="text-sm font-semibold text-white">Everything in Starter, plus:</p>
               {[
                 '200+ Premium UI Components',
                 'Vanilla JS, React, Vue, Svelte support',
                 'Advanced Micro-interactions',
                 'Figma design files included',
                 'Priority support',
                 'Commercial usage rights'
               ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                     <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                       <Check className="w-3 h-3 text-indigo-400" />
                     </div>
                     <span className="text-zinc-200 text-sm leading-relaxed font-medium">{feature}</span>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center animate-slide-up [animation-delay:400ms] opacity-0 flex flex-col items-center">
        <p className="text-zinc-400 mb-4 font-medium">Trusted by design engineers at</p>
        <div className="flex gap-8 items-center text-zinc-600 font-bold text-xl opacity-50 blur-[0.5px]">
          <span>Vercel</span>
          <span>Linear</span>
          <span>Stripe</span>
          <span>Figma</span>
        </div>
      </div>
    </div>
  );
}
