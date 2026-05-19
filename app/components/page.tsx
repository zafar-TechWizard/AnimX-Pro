import { Cpu, Move, Zap, Palette, Fingerprint, Maximize, MousePointer2, Scan, Smartphone, Layers, Loader2, Type, Box, Navigation, TextCursorInput, PieChart } from 'lucide-react';
import Link from 'next/link';
import { getComponentsByCategory, Category } from '@/registry';
import { ComponentViewer } from '@/components/playground/component-viewer';

const ICONS: Record<Category, React.ReactNode> = {
  Cards: <Box className="w-5 h-5 text-indigo-400" />,
  Buttons: <Move className="w-5 h-5 text-emerald-400" />,
  Cursors: <MousePointer2 className="w-5 h-5 text-pink-400" />,
  Backgrounds: <Layers className="w-5 h-5 text-blue-400" />,
  Loaders: <Loader2 className="w-5 h-5 text-amber-400" />,
  Typography: <Type className="w-5 h-5 text-cyan-400" />,
  Navigations: <Navigation className="w-5 h-5 text-purple-400" />,
  Inputs: <TextCursorInput className="w-5 h-5 text-yellow-400" />,
  'Data Visualization': <PieChart className="w-5 h-5 text-orange-400" />,
};

export default function ComponentsPage() {
  const groupedComponents = getComponentsByCategory();
  const categories = Object.keys(groupedComponents) as Category[];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24 flex flex-col items-start min-h-screen">
      <div className="flex flex-col max-w-3xl mb-16 animate-slide-up opacity-0">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-white">Component Registry</h1>
        <p className="text-lg text-zinc-400 leading-relaxed font-medium">
          Premium, zero-dependency UI interactions. Ready to copy into any vanilla HTML or modern framework project.
        </p>
      </div>

      <div className="w-full flex flex-col gap-24">
        {categories.map((category, idx) => (
          <section key={category} className="w-full flex flex-col gap-8 animate-slide-up" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                 {ICONS[category]}
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">{category}</h2>
            </div>
            
            <div className="w-full flex flex-col gap-12">
               {groupedComponents[category].map((comp) => {
                 // Only show full viewer if the component has been implemented (not just placeholder HTML)
                 if (comp.code.html === '<!-- implementation soon -->') {
                    return (
                      <div key={comp.id} className="w-full border border-white/5 border-dashed rounded-2xl p-6 flex flex-col bg-[#050505]/50">
                        <div className="flex items-center gap-3 mb-2">
                           <h3 className="font-semibold text-lg text-zinc-300">{comp.name}</h3>
                           <span className="px-2 py-0.5 bg-zinc-800 text-zinc-500 text-[10px] uppercase font-bold rounded">Coming Soon</span>
                        </div>
                        <p className="text-sm text-zinc-500">{comp.description}</p>
                      </div>
                    )
                 }

                 return <ComponentViewer key={comp.id} item={comp} />
               })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
