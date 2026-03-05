export type MediaItem = {
  src: string;
  alt: string;
  tag: "Headshot" | "Lifestyle" | "Stage" | "Character" | "Full Body";
};

export const mediaItems: MediaItem[] = [
  { src: "/images/hero.jpg", alt: "Jayden E. portrait (hero)", tag: "Headshot" },
  { src: "/images/headshot-1.jpeg", alt: "Jayden E. headshot", tag: "Headshot" },
  { src: "/images/fullbody-1.png", alt: "Jayden E. full body", tag: "Full Body" },
  { src: "/images/lifestyle-1.jpeg", alt: "Jayden E. lifestyle photo", tag: "Lifestyle" },
  { src: "/images/lifestyle-2.jpeg", alt: "Jayden E. lifestyle photo", tag: "Lifestyle" },
  { src: "/images/lifestyle-3.jpeg", alt: "Jayden E. lifestyle photo", tag: "Lifestyle" },
  { src: "/images/theatrical-1.jpeg", alt: "Jayden E. theatrical portrait", tag: "Character" },
  { src: "/images/comedy-1.jpg", alt: "Jayden E. character/comedy photo", tag: "Character" },
  { src: "/images/stage-1.jpeg", alt: "Jayden E. on stage", tag: "Stage" },
];
