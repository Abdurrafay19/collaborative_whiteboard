"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export function CreateBoardButton() {
  const router = useRouter();

  const handleCreate = () => {
    const roomId = crypto.randomUUID();
    router.push(`/board/${roomId}`);
  };

  return (
    <div className="group relative inline-flex">
      {/* Serious, Neutral Shadow Technique: Dark blurred underlay with a thin border */}
      <div 
        className="absolute -inset-1 rounded-xl border border-slate-900/10 bg-slate-900/5 blur-md transition-all duration-300 group-hover:bg-slate-900/10 group-hover:blur-lg" 
        aria-hidden="true" 
      />
      
      {/* The solid button */}
      <button
        type="button"
        onClick={handleCreate}
        className="relative inline-flex h-12 items-center justify-center rounded-xl border border-orange-600 bg-orange-500 px-8 text-base font-bold text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <span>Start a Canvas</span>
        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
}