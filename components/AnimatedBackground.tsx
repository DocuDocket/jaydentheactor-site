"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50" />

      <motion.div
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{background:"radial-gradient(circle at 30% 30%, rgba(37,99,235,0.26), rgba(168,85,247,0.18), rgba(255,255,255,0) 70%)"}}
        animate={{ x:[0,40,0], y:[0,30,0], rotate:[0,8,0] }}
        transition={{ duration:16, repeat:Infinity, ease:"easeInOut" }}
      />
      <motion.div
        className="absolute top-24 -right-48 h-[560px] w-[560px] rounded-full blur-3xl"
        style={{background:"radial-gradient(circle at 40% 40%, rgba(249,115,22,0.22), rgba(34,197,94,0.14), rgba(255,255,255,0) 70%)"}}
        animate={{ x:[0,-55,0], y:[0,35,0], rotate:[0,-10,0] }}
        transition={{ duration:18, repeat:Infinity, ease:"easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-56 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full blur-3xl"
        style={{background:"radial-gradient(circle at 50% 50%, rgba(16,185,129,0.18), rgba(59,130,246,0.14), rgba(255,255,255,0) 70%)"}}
        animate={{ y:[0,-40,0], scale:[1,1.05,1] }}
        transition={{ duration:20, repeat:Infinity, ease:"easeInOut" }}
      />
      <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
        style={{backgroundImage:"url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E")"}} />
    </div>
  );
}
