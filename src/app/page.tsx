import { BackgroundGrid } from "@/components/landing/BackgroundGrid";
import { CreateBoardButton } from "@/components/landing/CreateBoardButton";
import { PenTool, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-hidden bg-slate-50 selection:bg-orange-200 selection:text-orange-950">
      <BackgroundGrid />

      {/* Top Navigation */}
      <header className="relative z-10 flex h-20 w-full items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-2 text-slate-900">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-orange-600 bg-orange-500 text-white">
            {/* Miniature Neutral Shadow for the Logo Icon */}
            <div 
              className="absolute -inset-1 rounded-lg border border-slate-900/10 bg-slate-900/5 blur-[3px]" 
              aria-hidden="true" 
            />
            <PenTool className="relative z-10 h-4 w-4" />
          </div>
          <span className="text-xl font-bold tracking-tight">Whiteboard</span>
        </div>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900"
        >
          GitHub
        </a>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        
        {/* Subtle floating badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-4 py-1.5 text-sm font-semibold text-slate-700 backdrop-blur-md">
          <Sparkles className="h-4 w-4 text-orange-500" />
          <span>Real-time vector synchronization</span>
        </div>

        {/* Solid Color Headline */}
        <h1 className="mb-6 max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
          Frictionless teamwork, <br className="hidden md:block" />
          <span className="text-orange-500">
            on an infinite canvas.
          </span>
        </h1>
        
        {/* Clean, readable subtext */}
        <p className="mb-10 max-w-2xl text-lg font-medium leading-relaxed text-slate-500 md:text-xl">
          Create a secure room. Share the link. Start drawing instantly. 
          No heavy sign-ups, no artificial limits—just your team and your ideas.
        </p>
        
        {/* Action Area */}
        <div className="flex flex-col items-center gap-5">
          <CreateBoardButton />
          <p className="text-sm font-semibold text-slate-400">
            Free forever. No account required.
          </p>
        </div>

      </main>
    </div>
  );
}