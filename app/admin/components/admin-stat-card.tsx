import type { LucideIcon } from "lucide-react";

export function AdminStatCard({ label, value, detail, icon: Icon }: { label: string; value: number; detail: string; icon: LucideIcon }) {
  return (
    <article className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-[#64748B]">{label}</p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-[#17212B]">{value}</p>
          <p className="mt-2 text-xs leading-5 text-[#64748B]">{detail}</p>
        </div>
        <span className="rounded-xl bg-[#EAF2FF] p-3 text-[#102A43]">
          <Icon aria-hidden="true" className="size-5" />
        </span>
      </div>
    </article>
  );
}
