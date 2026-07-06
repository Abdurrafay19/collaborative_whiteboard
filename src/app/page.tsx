import Whiteboard from "@/components/Whiteboard";

export default function Home() {
  return (
    <main className="relative flex min-h-[100dvh] overflow-hidden bg-background">
      <Whiteboard />
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5">
        <div className="pointer-events-auto rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur">
          Collaborative Whiteboard
        </div>
        <div className="pointer-events-auto rounded-full border border-border/70 bg-background/80 px-4 py-2 text-xs text-muted-foreground shadow-sm backdrop-blur">
          Shared real-time drawing
        </div>
      </div>
    </main>
  );
}
