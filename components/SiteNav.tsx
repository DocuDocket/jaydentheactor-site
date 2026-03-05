"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links=[{href:"/",label:"Home"},{href:"/media",label:"Media"},{href:"/resume",label:"Resume"}];

export default function SiteNav(){
  const pathname=usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur">
      <div className="container-pad flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight"><span className="gradient-text">Jayden E.</span></Link>
        <nav className="flex items-center gap-1">
          {links.map(l=>{
            const active=pathname===l.href;
            return (
              <Link key={l.href} href={l.href}
                className={[
                  "rounded-full px-4 py-2 text-sm transition",
                  active ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                ].join(" ")}>
                {l.label}
              </Link>
            );
          })}
          <a href="#contact" className="ml-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Book Jayden</a>
        </nav>
      </div>
    </header>
  );
}
