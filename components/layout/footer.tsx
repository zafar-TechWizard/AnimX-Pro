import { Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#050505] py-12 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-zinc-400">
            <Sparkles className="w-4 h-4 text-zinc-500" />
            <span className="font-semibold text-white">AnimX Pro</span>
        </div>
        <p className="text-sm text-zinc-600">
          Beautifully crafted UI components. Shipped to production.
        </p>
      </div>
    </footer>
  );
}
