import { StaticImageData } from "next/image";
import prabhashImage from "../../asset/downloads/officers/Prabhash Liyanage.jpg";
import regionDirectorA from "../../public/images/leaders/Region and Zone Directors/Region Director Region A.jpg";
import regionDirectorB from "../../public/images/leaders/Region and Zone Directors/Region Director Region B.jpg";
import regionDirectorC from "../../public/images/leaders/Region and Zone Directors/Region Director Region C.jpg";
import zoneDirectorA1 from "../../public/images/leaders/Region and Zone Directors/Zone Director Zone A1.jpg";
import zoneDirectorA2 from "../../public/images/leaders/Region and Zone Directors/Zone Director Zone A2.jpg";
import zoneDirectorB1 from "../../public/images/leaders/Region and Zone Directors/Zone Director Zone B1.jpg";
import zoneDirectorB2 from "../../public/images/leaders/Region and Zone Directors/Zone Director Zone B2.jpg";
import zoneDirectorC1 from "../../public/images/leaders/Region and Zone Directors/Zone Director Zone C1.jpg";
import districtDirectorAdmin from "../../public/images/leaders/District Directors/Administration and Reporting.jpg";
import districtDirectorFundraising from "../../public/images/leaders/District Directors/District Director Fundraising .png";
import districtDirectorIT from "../../public/images/leaders/District Directors/District Director IT.jpg";
import districtDirectorSports from "../../public/images/leaders/District Directors/District Director Sports.jpg";
import districtDirectorLeoLion from "../../public/images/leaders/District Directors/District Director Leo Lion.jpg";
import districtSecretary from "../../public/images/leaders/Key Council Officers/District Secretary.jpg";
import assistantDistrictSecretary from "../../public/images/leaders/Key Council Officers/Assistant District Secretary.jpg";
import immediatePastDistrictPresident from "../../public/images/leaders/District Executive Officers/Immediate Past District President.jpg";

export interface OfficerCardProps {
  name: string;
  profileImage: StaticImageData;
  position: string;
  pdfUrl: string;
  pdfTitle: string;
  type: string;
  size: string;
  date: string;
}

const officers: OfficerCardProps[] = [
  {
    name: "Leo Aditha Udara",
    profileImage: regionDirectorA,
    position: "Region Director Region A",
    pdfUrl: "/downloads/officers/Leo Aditha Udara - Region Director Region B.pdf",
    pdfTitle: "Leo Aditha Udara - Region Director",
    type: "PDF",
    size: "1.2MB",
    date: "January 15, 2024",
  },
  {
    name: "Leo Bimsara Alawathugoda",
    profileImage: regionDirectorB,
    position: "Region Director Region B",
    pdfUrl: "/downloads/officers/Leo Bimsara Alawathugoda - Region Director Region B.pdf",
    pdfTitle: "Leo Bimsara Alawathugoda - Region Director",
    type: "PDF",
    size: "1.1MB",
    date: "January 15, 2024",
  },
  {
    name: "Leo Buwanaji Munasinghe",
    profileImage: regionDirectorC,
    position: "Region Director Region C",
    pdfUrl: "/downloads/officers/Leo Buwanaji Munasinghe - Region Director Region C.pdf",
    pdfTitle: "Leo Buwanaji Munasinghe - Region Director",
    type: "PDF",
    size: "1.3MB",
    date: "January 15, 2024",
  },
  {
    name: "Leo Chamudini Fernando FLM",
    profileImage: districtDirectorLeoLion,
    position: "District Director Leo Lion Relationships / Fellowship",
    pdfUrl: "/downloads/officers/Leo Chamudini Fernando FLM District Director Leo Lion.pdf",
    pdfTitle: "Leo Chamudini Fernando FLM - Leo-Lion Relationships / Fellowship District Director",
    type: "PDF",
    size: "1.0MB",
    date: "January 15, 2024",
  },
  {
    name: "Leo Devinda Perera",
    profileImage: districtSecretary,
    position: "District Secretary",
    pdfUrl: "/downloads/officers/Leo Devinda Perera - District Secretary Leo District 306 D2.pdf",
    pdfTitle: "Leo Devinda Perera - District Secretary",
    type: "PDF",
    size: "1.4MB",
    date: "January 15, 2024",
  },
  {
    name: "Leo Dinithi Adithya",
    profileImage: assistantDistrictSecretary,
    position: "Assistant District Secretary",
    pdfUrl: "/downloads/officers/Leo Dinithi Adithya - Assistant District Secretary pdf.pdf",
    pdfTitle: "Leo Dinithi Adithya - Assistant District Secretary",
    type: "PDF",
    size: "1.1MB",
    date: "January 15, 2024",
  },
  {
    name: "Leo Duvindu Rajapaksha",
    profileImage: zoneDirectorC1,
    position: "Zone Director Zone C1",
    pdfUrl: "/downloads/officers/Leo Duvindu Rajapaksha - Zone Director Zone C1.pdf",
    pdfTitle: "Leo Duvindu Rajapaksha - Zone Director",
    type: "PDF",
    size: "1.2MB",
    date: "January 15, 2024",
  },
  {
    name: "Leo Enuk Dabare",
    profileImage: zoneDirectorB1,
    position: "Zone Director Zone B1",
    pdfUrl: "/downloads/officers/Leo Enuk Dabare - Zone Director Zone B1.pdf",
    pdfTitle: "Leo Enuk Dabare - Zone Director",
    type: "PDF",
    size: "1.1MB",
    date: "January 15, 2024",
  },
  {
    name: "Leo Eshan Kasturiarachchi",
    profileImage: immediatePastDistrictPresident,
    position: "Immediate Past District President",
    pdfUrl: "/downloads/officers/Leo Eshan Kasturiarachchi - Immediate Past District President.pdf",
    pdfTitle: "Leo Eshan Kasturiarachchi - Immediate Past District President",
    type: "PDF",
    size: "1.3MB",
    date: "January 15, 2024",
  },
  {
    name: "Leo Hansini Jayasinghe",
    profileImage: districtDirectorAdmin,
    position: "District Director Administration and Reporting",
    pdfUrl: "/downloads/officers/Leo Hansini Jayasinghe - District Director Administration and Reporting.pdf",
    pdfTitle: "Leo Hansini Jayasinghe - District Director",
    type: "PDF",
    size: "1.2MB",
    date: "January 15, 2024",
  },
  {
    name: "Leo Isuri Jayakodi",
    profileImage: zoneDirectorA2,
    position: "Zone Director Zone A2",
    pdfUrl: "/downloads/officers/Leo Isuri Jayakodi - Zone Director Zone A2.pdf",
    pdfTitle: "Leo Isuri Jayakodi - Zone Director",
    type: "PDF",
    size: "1.1MB",
    date: "January 15, 2024",
  },
  {
    name: "Leo Mindula Gunathilaka",
    profileImage: zoneDirectorB2,
    position: "Zone Director Zone B2",
    pdfUrl: "/downloads/officers/Leo Mindula Gunathilaka - Zone Director Zone B2 .pdf",
    pdfTitle: "Leo Mindula Gunathilaka - Zone Director",
    type: "PDF",
    size: "1.2MB",
    date: "January 15, 2024",
  },
  {
    name: "Leo Miyuru Sankalpa",
    profileImage: districtDirectorFundraising,
    position: "District Director Fundraising",
    pdfUrl: "/downloads/officers/Leo Miyuru - District Director Fundraising.pdf",
    pdfTitle: "Leo Miyuru - District Director Fundraising",
    type: "PDF",
    size: "1.1MB",
    date: "January 15, 2024",
  },
  {
    name: "Leo Prabhash Liyanage",
    profileImage: districtDirectorIT,
    position: "District Director IT",
    pdfUrl: "/downloads/officers/Leo Prabhash Liyanage - District Director IT.pdf",
    pdfTitle: "Leo Prabhash Liyanage - District Director IT",
    type: "PDF",
    size: "1.3MB",
    date: "January 15, 2024",
  },
  {
    name: "Leo Sanjeev Gunasekera",
    profileImage: zoneDirectorA1,
    position: "Zone Director Zone A1",
    pdfUrl: "/downloads/officers/Leo Sanjeev Gunasekera - Zone Director Zone A1.pdf",
    pdfTitle: "Leo Sanjeev Gunasekera - Zone Director",
    type: "PDF",
    size: "1.1MB",
    date: "January 15, 2024",
  },
  {
    name: "Leo Savindu Rajapaksha",
    profileImage: districtDirectorSports,
    position: "District Director Sports",
    pdfUrl: "/downloads/officers/Leo Savindu Rajapaksha - District Director Sports.pdf",
    pdfTitle: "Leo Savindu Rajapaksha - District Director Sports",
    type: "PDF",
    size: "1.2MB",
    date: "January 15, 2024",
  },
];

export default officers;
