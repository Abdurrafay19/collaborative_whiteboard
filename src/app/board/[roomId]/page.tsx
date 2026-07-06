import Whiteboard from "@/components/canvas/Whiteboard";
import { ArrowLeft, Users } from "lucide-react";
import Link from "next/link";

export default async function BoardPage({
	params,
}: {
	params: Promise<{ roomId: string }>;
}) {
	const { roomId } = await params;

	return (
		<main className="min-h-screen bg-slate-50 text-slate-900">
			<header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur md:px-6">
				<div className="min-w-0">
					<p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
						Board room
					</p>
					<h1 className="truncate text-sm font-semibold text-slate-900 md:text-base">
						{roomId}
					</h1>
				</div>

				<div className="flex items-center gap-3">
					<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-600">
						<Users className="h-4 w-4" />
						Ready for collaborators
					</div>
					<Link
						href="/"
						className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
					>
						<ArrowLeft className="h-4 w-4" />
						Back
					</Link>
				</div>
			</header>

			<section className="relative h-[calc(100vh-57px)] overflow-hidden">
				<Whiteboard />
			</section>
		</main>
	);
}
