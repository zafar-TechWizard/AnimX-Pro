import { Sparkles, Github, Twitter } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

export function Header() {
  return (
    <header className="w-full h-16 border-b border-white/[0.05] bg-black/50 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center shadow-lg group-hover:border-white/20 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="font-semibold tracking-tight text-lg text-white">AnimX Pro</span>
        </Link>
        <nav className="flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="/components" className="hover:text-white transition-colors">Components</Link>
          <Link href="/docs" className="hover:text-white transition-colors">Documentation</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="https://github.com" target="_blank" className="text-zinc-500 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </Link>
          <div className="w-px h-4 bg-white/10" />
          <button className="px-4 py-2 text-sm font-medium bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Get Access
          </button>
        </div>
      </div>
    </header>
  );
}
