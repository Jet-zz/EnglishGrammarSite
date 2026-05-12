import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>{site.name}</p>
        <p>从句子主干开始，逐步理解英语语法。</p>
      </div>
    </footer>
  );
}
