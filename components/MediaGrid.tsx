"use client";

import Image from "next/image";
import { mediaItems, type MediaItem } from "@/components/mediaData";
import { useEffect, useMemo, useState } from "react";

const filters: Array<MediaItem["tag"] | "All"> = [
  "All",
  "Headshot",
  "Full Body",
  "Lifestyle",
  "Character",
  "Stage",
];

export default function MediaGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items = useMemo(() => {
    if (active === "All") return mediaItems;
    return mediaItems.filter((i) => i.tag === active);
  }, [active]);

  const open = (index: number) => setLightboxIndex(index);
  const close = () => setLightboxIndex(null);

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + items.length) % items.length;
    });
  };

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % items.length;
    });
  };

  // Keyboard controls: ESC closes, arrows navigate
  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.addEventListener("keydown", onKeyDown);
    // Lock scroll while open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex, items.length]);

  const selected = lightboxIndex !== null ? items[lightboxIndex] : null;

  return (
    <div>
      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => {
              setActive(f);
              close();
            }}
            className={[
              "rounded-full px-4 py-2 text-sm transition",
              active === f
                ? "bg-slate-900 text-white"
                : "bg-white/70 border border-slate-200 text-slate-700 hover:bg-slate-50",
            ].join(" ")}
            type="button"
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <button
            key={item.src}
            type="button"
            onClick={() => open(idx)}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft text-left"
            aria-label={`Open ${item.tag} photo`}
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                priority={item.src === "/images/hero.jpg"}
              />
            </div>
            <div className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="font-medium">{item.tag}</span>
              <span className="text-slate-500">Jayden E.</span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected ? (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={close}
        >
          {/* Controls */}
          <div
            className="absolute top-4 right-4 flex items-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-white"
              aria-label="Close"
            >
              Close
            </button>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-sm font-medium text-slate-900 hover:bg-white"
            aria-label="Previous image"
          >
            ←
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-sm font-medium text-slate-900 hover:bg-white"
            aria-label="Next image"
          >
            →
          </button>

          {/* Image container */}
          <div
            className="absolute inset-0 flex items-center justify-center p-4 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[80vh] w-[92vw] max-w-5xl overflow-hidden rounded-2xl bg-black">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Caption */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-sm text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="font-medium">{selected.tag}</span> •{" "}
            <span className="text-slate-700">{selected.alt}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
