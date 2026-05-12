import Link from "next/link";
import { navigation, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight text-slate-950">
          {site.name}
        </Link>
        <nav className="flex flex-wrap gap-2 text-sm font-medium text-slate-600">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
