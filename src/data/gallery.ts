import type { GalleryItem } from "@/lib/types";

const P = "/images/projects";

export const galleryItems: GalleryItem[] = [
  { title: "A2 Classroom Session", category: "events", image: `${P}/A2-classroom.jpeg` },
  { title: "A2 Sajje Event", category: "events", image: `${P}/A2-sajje.jpg` },
  { title: "D2 Bodhi Pooja", category: "events", image: `${P}/bodipujawa.jpg` },
  { title: "D2 Business Session", category: "events", image: `${P}/D2-business-session.jpg` },
  { title: "Dawn Eight Event", category: "events", image: `${P}/dawn-eight.JPG` },
  { title: "Embolden 24", category: "events", image: `${P}/embolden-24.jpg` },
  { title: "Installation Ceremony", category: "events", image: `${P}/installation.jpg` },
  { title: "Jeewanayathra Project", category: "service", image: `${P}/jeewanayathra.jpg` },
  { title: "Numero Uno Event", category: "events", image: `${P}/numero-Uno.jpg` },
  { title: "Reflexion 25", category: "events", image: `${P}/reflexion'25.jpg` },
  { title: "Sports Day", category: "events", image: `${P}/sportsDay.jpg` },
  { title: "Youth Camp", category: "events", image: `${P}/youth-Camp.jpg` },
];

export const galleryStats = [
  { value: "500+", label: "Photos" },
  { value: "20+", label: "D2 Events" },
  { value: "200+", label: "Projects" },
  { value: "18", label: "Clubs" },
];
