import type { LeaderGroup } from "@/lib/types";

const EXEC = "/images/leaders/District Executive Officers";
const KCO = "/images/leaders/Key Council Officers";
const CC = "/images/leaders/Chief Coordinators";
const DIR = "/images/leaders/District Directors";
const RZD = "/images/leaders/Region and Zone Directors";
const PLACEHOLDER = "/images/unknown person.jpg";

// 2026/27 District Council. Photo filenames include the officer's name so that swapping a
// photo changes the URL  next/image caches by URL and would otherwise serve a stale image.
// Several officers moved up from a 2025/26 seat, so their existing photo is reused under its
// old filename (same person, same photo → no cache concern).
export const leaderGroups: LeaderGroup[] = [
  {
    section: "District Executive Officers",
    members: [
      {
        name: "Leo Lion Buddhika Abenayake",
        title: "District President",
        image: `${EXEC}/District President - Buddhika Abenayake.jpg`,
      },
      {
        name: "Leo Lion Thameera Dananjaya",
        title: "Immediate Past District President",
        image: `${EXEC}/Immediate Past District President - Thameera Dananjaya.jpg`,
      },
      {
        name: "Leo Lion Bonomi Tharinda",
        title: "District Vice President",
        image: `${EXEC}/District Vice President - Bonomi Tharinda.jpg`,
        note: "Photo is from a 306 A2 district event  his lapel badge reads 'LEO DISTRICT 306 A2' and the backdrop shows A2 conference branding. The alternate photo supplied in Jul 2026 is also a 306 A2 conference shot (worse  full A2 backdrop + copyright bar), so this cropped one is kept. Replace with a clean 306 D2 headshot when available.",
      },
      {
        name: "Lion Sumudu Amarasinghe",
        title: "District Leo Chairperson",
        image: `${EXEC}/District Leo Chairperson - Sumudu Amarasinghe.jpg`,
      },
    ],
  },
  {
    section: "Key Council Officers",
    members: [
      {
        name: "Leo Lion Pamudi Vimansa",
        title: "District Secretary",
        image: PLACEHOLDER,
        placeholder: true,
        note: "No photo supplied in the Jul 2026 batch.",
      },
      {
        // Darshika was Zone Director Zone C2 in 2025/26  reusing her existing photo.
        name: "Leo Darshika Prabhashwara",
        title: "District Treasurer",
        image: `${RZD}/Darshika Prabhashwara.jpg`,
      },
      {
        name: "Leo Lion Nomin Premarathna",
        title: "Membership Chairperson",
        image: `${KCO}/Membership Chairperson - Nomin Premarathna.jpg`,
        note: "Supplied photo has a 306 A2 conference backdrop; a plain D2 headshot would be better.",
      },
      {
        name: "Leo Umayangi De Silva",
        title: "Assistant District Secretary",
        image: `${KCO}/Assistant District Secretary - Umayangi De Silva.jpg`,
      },
      {
        name: "Leo Lion Duvindu Rajapaksha",
        title: "Assistant District Treasurer",
        image: `${KCO}/Assistant District Treasurer - Duvindu Rajapaksha.jpg`,
        note: "Supplied photo has a 306 A2 conference backdrop; a plain D2 headshot would be better.",
      },
    ],
  },
  {
    section: "Chief Coordinators",
    members: [
      {
        name: "Leo Lion Thisuri Nisalya",
        title: "Chief Coordinator - District Contest",
        image: PLACEHOLDER,
        placeholder: true,
        note: "No photo supplied in the Jul 2026 batch.",
      },
      {
        // Buwanaji was Region Director Region C in 2025/26  reusing his existing photo.
        name: "Leo Lion Buwanaji Munasinghe",
        title: "Chief Coordinator - Leo-Lion Relationships",
        image: `${RZD}/Region Director Region C.jpg`,
      },
      {
        name: "Leo Lion Sewwandi Gunasinghe",
        title: "Chief Coordinator - Administration",
        image: `${CC}/Chief Coordinator Administration - Sewwandi Gunasinghe.jpg`,
      },
      {
        // Devinda was District Secretary in 2025/26  reusing his existing photo.
        name: "Leo Devinda Perera",
        title: "Chief Coordinator - Council Officer",
        image: `${KCO}/District Secretary.jpg`,
      },
      {
        name: "Leo Dinithi Adithya",
        title: "Chief Coordinator - Reporting",
        image: `${CC}/Chief Coordinator Reporting - Dinithi Adithya.jpg`,
      },
      {
        name: "Leo Lion Durga Hashini",
        title: "Chief Coordinator - Fundraising",
        image: `${CC}/Chief Coordinator Fundraising - Durga Hashini.jpg`,
      },
      {
        // Lehan was District Treasurer in 2025/26  reusing his existing photo.
        name: "Leo Lion Lehan Randitha",
        title: "Chief Coordinator - Line Officers",
        image: `${KCO}/District Treasurer.jpg`,
      },
    ],
  },
  {
    section: "Region A",
    members: [
      {
        name: "Leo Isuri Jayakodi",
        title: "Region Director - Region A",
        image: `${RZD}/Region Director Region A - Isuri Jayakodi.jpg`,
      },
      {
        name: "Leo Takshitha Milinda",
        title: "Zone Director - Zone A1",
        image: `${RZD}/Zone Director Zone A1 - Takshitha Milinda.jpg`,
      },
      {
        name: "Leo Lion Madhushi Kodikara",
        title: "Zone Director - Zone A2",
        image: `${RZD}/Zone Director Zone A2 - Madhushi Kodikara.jpg`,
      },
    ],
  },
  {
    section: "Region B",
    members: [
      {
        name: "Leo Lion Mindula Gunathilake",
        title: "Region Director - Region B",
        image: `${RZD}/Region Director Region B - Mindula Gunathilake.jpg`,
      },
      {
        name: "Leo Mauli Siriwardhane",
        title: "Zone Director - Zone B1",
        image: `${RZD}/Zone Director Zone B1 - Mauli Siriwardhane.jpg`,
      },
      {
        name: "Leo Savindu Rajapaksha",
        title: "Zone Director - Zone B2",
        image: `${RZD}/Zone Director Zone B2 - Savindu Rajapaksha.jpg`,
      },
    ],
  },
  {
    section: "Region C",
    members: [
      {
        name: "Leo Enuk Dabare",
        title: "Region Director - Region C",
        image: `${RZD}/Region Director Region C - Enuk Dabare.jpg`,
      },
      {
        name: "Leo Chathuka Nilakshana",
        title: "Zone Director - Zone C1",
        image: `${RZD}/Zone Director Zone C1 - Chathuka Nilakshana.jpg`,
      },
      {
        name: "Leo Hasitha Dhananjaya",
        title: "Zone Director - Zone C2",
        image: PLACEHOLDER,
        placeholder: true,
        note: "No photo supplied in the Jul 2026 batch.",
      },
    ],
  },
  {
    section: "District Directors",
    members: [
      {
        name: "Leo Lohan Ekanayake",
        title: "District Director - Reporting & Administration",
        image: PLACEHOLDER,
        placeholder: true,
        note: "No photo supplied in the Jul 2026 batch.",
      },
      {
        name: "Leo Malshi Sandunika",
        title: "District Director - Membership Retention & Growth",
        image: `${DIR}/District Director Membership - Malshi Sandunika.jpg`,
      },
      {
        name: "Leo Lion Omali Radhika",
        title: "District Director - PR & Branding",
        image: `${DIR}/District Director PR and Branding - Omali Radhika.jpg`,
      },
      {
        name: "Leo Ajini Onethra",
        title: "District Director - International Relationships",
        image: `${DIR}/District Director International - Ajini Onethra.jpg`,
      },
      {
        name: "Leo Dulanjana Dilshan",
        title: "District Director - IT",
        image: PLACEHOLDER,
        placeholder: true,
        note: "No photo supplied in the Jul 2026 batch. (2025/26 IT director was Prabash Liyanage  a different person  so that photo is not reused.)",
      },
      {
        name: "Leo Akindu Kalhan",
        title: "District Director - Fundraising & Partnerships",
        image: `${DIR}/District Director Fundraising - Akindu Kalhan.jpg`,
      },
      {
        name: "Leo Janaja De Alwis",
        title: "District Director - Leo-Lion Relationships & Fellowship",
        image: `${DIR}/District Director Leo Lion - Janaja De Alwis.jpg`,
      },
      {
        name: "Leo Vidumini Sanjula",
        title: "District Director - Editorial Panel",
        image: `${DIR}/District Director Editorial - Vidumini Sanjula.jpg`,
      },
      {
        name: "Leo Sandakini Jayalath",
        title: "District Director - School Clubs & Service",
        image: `${DIR}/District Director Service - Sandakini Jayalath.jpg`,
      },
    ],
  },
];

// The four officers featured on the homepage.
export const featuredLeaders = [
  { name: "Leo Lion Buddhika Abenayake", title: "District President", image: `${EXEC}/District President - Buddhika Abenayake.jpg` },
  { name: "Leo Lion Thameera Dananjaya", title: "Immediate Past District President", image: `${EXEC}/Immediate Past District President - Thameera Dananjaya.jpg` },
  { name: "Leo Lion Bonomi Tharinda", title: "District Vice President", image: `${EXEC}/District Vice President - Bonomi Tharinda.jpg` },
  { name: "Lion Sumudu Amarasinghe", title: "District Leo Chairperson", image: `${EXEC}/District Leo Chairperson - Sumudu Amarasinghe.jpg` },
];
