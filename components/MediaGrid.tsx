"use client";
import Image from "next/image";
import { mediaItems, type MediaItem } from "@/components/mediaData";
import { useMemo, useState } from "react";

const filters: Array<MediaItem["tag"] | "All"> = ["All","Headshot","Full Body","Lifestyle","Character","Stage"];

export default function MediaGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const items = useMemo(() => active==="All" ? mediaItems : mediaItems.filter(i=>i.tag===active), [active]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button key={f} onClick={() => setActive(f)} type="button"
            className={[
              "rounded-full px-4 py-2 text-sm transition",
              active===f ? "bg-slate-900 text-white" : "bg-white/70 border border-slate-200 text-slate-700 hover:bg-slate-50",
            ].join(" ")}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <figure key={item.src} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
            <div className="relative aspect-[4/5] w-full">
              <Image src={item.src} alt={item.alt} fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                priority={item.src==="/images/hero.jpg"}
              />
            </div>
            <figcaption className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="font-medium">{item.tag}</span>
              <span className="text-slate-500">Jayden E.</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
