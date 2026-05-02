import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'AnimX Pro | Premium Vanilla UI Components',
  description: 'Zero-dependency UI component library and documentation engine. Premium interactions using pure HTML, CSS, and Vanilla JS.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`} style={{ colorScheme: 'dark' }}>
      <body className="font-sans antialiased bg-black text-white selection:bg-indigo-500/30 selection:text-white min-h-screen flex flex-col" suppressHydrationWarning>
        {/* Advanced Background Layering */}
        <div className="fixed inset-0 z-[-3] bg-black" />
        <div className="noise-overlay z-[-1]" />
        
        {/* Subtle Ambient Gradients */}
        <div className="fixed inset-0 z-[-2] overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[120px]" />
        </div>

        {/* Grid Pattern with mask */}
        <div className="fixed inset-0 z-[-2] bg-grid-white/[0.03] bg-[size:40px_40px] pointer-events-none" style={{ maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)' }} />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 shrink-0 flex flex-col min-h-0">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
