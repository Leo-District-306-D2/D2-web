export interface AdministrativeCardProps {
  category: string;
  title: string;
  description: string;
  pdfUrl: string;
  pdfTitle: string;
  type: string;
  size: string;
  date: string;
}

const administratives: AdministrativeCardProps[] = [
  {
    category: "Constitution",
    title: "Standard Leo Club Constitution & By-laws",
    description:
      "Official constitution and by-laws document for Leo Clubs, outlining the fundamental rules and regulations.",
    pdfUrl: "/downloads/administrative/Standard Leo Club Constitution.pdf",
    pdfTitle: "Leo Club Constitution",
    type: "PDF",
    size: "2.3MB",
    date: "January 15, 2024",
  },
  {
    category: "Constitution",
    title: "සම්මත ලියෝ සමාජ ච්‍යවස්ථාව",
    description:
      "ලියෝ සමාජයේ සම්මත යවස්ථාව සහ නීති රීති - Official constitution in Sinhala language.",
    pdfUrl: "/downloads/administrative/සම්මත ලියෝ සමාජ ව්_යවස්ථාව.pdf",
    pdfTitle: "Leo Club Constitution Sinhala",
    type: "PDF",
    size: "2.1MB",
    date: "January 15, 2024",
  },
  {
    category: "Ceremony",
    title: "Installation Ceremony of Leo Club Officers",
    description:
      "Complete guide and procedures for conducting installation ceremonies of Leo Club officers and board members.",
    pdfUrl: "/downloads/administrative/Installation Ceremony of Leo Club Officers.pdf",
    pdfTitle: "Installation Ceremony Guide",
    type: "PDF",
    size: "1.8MB",
    date: "February 10, 2024",
  },
  {
    category: "Ceremony",
    title: "ලියෝ සමාජයේ නිලධාරීන් ස්ථාපනය කිරීම",
    description:
      "ලියෝ සමාජයේ නිලධාරීන් ස්ථාපනය කිරීමේ සම්පූර්ණ මාර්ගෝපදේශය - Installation ceremony guide in Sinhala.",
    pdfUrl: "/downloads/administrative/ලියෝ සමාජයේ නිලධාරීන් ස්ථාපනය කිරී1.pdf",
    pdfTitle: "Installation Ceremony Sinhala",
    type: "PDF",
    size: "1.7MB",
    date: "February 10, 2024",
  },
  {
    category: "Ceremony",
    title: "Initiation Ceremony of New Members",
    description:
      "Step-by-step procedures and guidelines for conducting initiation ceremonies for new Leo Club members.",
    pdfUrl: "/downloads/administrative/Initiation Ceremony of New Members.pdf",
    pdfTitle: "Initiation Ceremony Guide",
    type: "PDF",
    size: "1.5MB",
    date: "March 5, 2024",
  },
  {
    category: "Ceremony",
    title: "ලියෝ සමාජයේ නව සාමාජිකයින් ස්ථාපනය කිරීම",
    description:
      "ලියෝ සමාජයේ නව සාමාජිකයින් ස්ථාපනය කිරීමේ ක්‍රියා පටිපාටිය - Initiation ceremony guide in Sinhala.",
    pdfUrl: "/downloads/administrative/ලියෝ සමාජයේ නව සාමාජිකයින් ස්ථාපනය කිරීම.pdf",
    pdfTitle: "Initiation Ceremony Sinhala",
    type: "PDF",
    size: "1.4MB",
    date: "March 5, 2024",
  },
  {
    category: "Protocol",
    title: "Leo Club Protocol",
    description:
      "Official protocol guidelines and etiquette standards for Leo Club meetings, events, and official functions.",
    pdfUrl: "/downloads/administrative/Leo Club Protocol.pdf",
    pdfTitle: "Leo Club Protocol",
    type: "PDF",
    size: "1.2MB",
    date: "April 12, 2024",
  },
  {
    category: "Meeting",
    title: "General Meeting Agenda",
    description:
      "Standard template and guidelines for preparing and conducting general meetings of Leo Clubs.",
    pdfUrl: "/downloads/administrative/General Meeting Agenda.pdf",
    pdfTitle: "General Meeting Agenda",
    type: "PDF",
    size: "0.9MB",
    date: "May 20, 2024",
  },
  {
    category: "Meeting",
    title: "Board Meeting Agenda",
    description:
      "Template and procedures for board meetings, including agenda preparation and meeting conduct guidelines.",
    pdfUrl: "/downloads/administrative/Board Meeting Agenda.pdf",
    pdfTitle: "Board Meeting Agenda",
    type: "PDF",
    size: "0.8MB",
    date: "May 20, 2024",
  },
];

export default administratives;
