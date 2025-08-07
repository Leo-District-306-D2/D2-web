import { StaticImageData } from "next/image";
import lionsLogo from "../../asset/downloads/logos/LCI_Logo.png";
import leoLogo from "../../public/images/logos/leo.png";
import sriLankaMaldivesLogo from "../../public/images/logos/Leos-Of-SriLanka-Maldives-Black-Version-1.png";
import d2Logo from "../../public/images/logos/DP logo 25_26_Final.png";

export interface LogoCardProps {
  title: string;
  description: string;
  src: StaticImageData;
  type: string;
  size: string;
  date: string;
}

const logos = [
  {
    title: "Lions Club International Logo",
    description: "Official logo of Lions Club International, representing global service and leadership.",
    src: lionsLogo,
    type: "PNG",
    size: "145KB",
    date: "January 15, 2024",
  },
  {
    title: "Leo Club International Logo",
    description: "Official Leo Club logo representing youth leadership and community service.",
    src: leoLogo,
    type: "PNG",
    size: "120KB",
    date: "January 15, 2024",
  },
  {
    title: "Leos of Sri Lanka and Maldives",
    description: "Official logo representing Leo Clubs across Sri Lanka and Maldives regions.",
    src: sriLankaMaldivesLogo,
    type: "PNG",
    size: "135KB",
    date: "January 15, 2024",
  },
  {
    title: "Leo District 306 D2 Logo",
    description: "Official logo of District 306 D2, representing our specific district's identity and mission.",
    src: d2Logo,
    type: "PNG",
    size: "110KB",
    date: "January 15, 2024",
  },
];

export default logos;
