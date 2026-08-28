import type { Region } from "@/lib/types";

// Source of truth: "D2 Council Info 2026/27.xlsx", tabs "Region and Zones" (zone allocation),
// "Presidents" (club presidents) and "District Council" (director names).
// Full alphabetical list of member clubs, also used by the homepage listing.
export const allClubs: string[] = [
  "Leo Club of Arawwala",
  "Leo Club of Colombo Monarch",
  "Leo Club of Dehiwala East",
  "Leo Club of Ethos International College, Colombo VII",
  "Leo Club of Gampaha Wickramarachchi University of Indigenous Medicine FISSMS",
  "Leo Club of Godigamuwa",
  "Leo Club of Kalubowila",
  "Leo Club of Millaniya",
  "Leo Club of Panadura Alubomulla",
  "Leo Club of Pepiliyana Woodlands",
  "Leo Club of Piliyandala",
  // TODO: the "Region and Zones" tab does not assign this club to a zone, so it is listed here
  // but appears in none of the zones below. Confirm which zone it belongs to.
  "Leo Club of Piliyandala Central College",
  "Leo Club of Polgasowita",
  "Leo Club of Raththanapitiya",
  "Leo Club of Saegis Campus",
  "Leo Club of Sri Lanka Technological Campus",
  "Leo Club of Taxila Central College",
  "Leo Club of University of Moratuwa",
  "Leo Club of University of Sri Jayewardenepura",
];

// District structure: 3 regions, 6 zones, 18 zoned clubs.
// Member counts are deliberately absent: no tab in the council workbook records them.
// Godigamuwa and Saegis Campus have no president listed in the "Presidents" tab.
export const regions: Region[] = [
  {
    id: "A",
    name: "Region A",
    director: "Leo Isuri Jayakodi",
    zones: [
      {
        id: "A1",
        director: "Leo Takshitha Milinda",
        clubs: [
          { name: "Leo Club of Arawwala", president: "Leo Vidusha Perera" },
          { name: "Leo Club of University of Moratuwa", president: "Leo Hiruna Karunarathna" },
          { name: "Leo Club of Kalubowila", president: "Leo Savindi Dias" },
        ],
      },
      {
        id: "A2",
        director: "Leo Lion Madhushi Kodikara",
        clubs: [
          { name: "Leo Club of Godigamuwa" },
          { name: "Leo Club of Gampaha Wickramarachchi University of Indigenous Medicine FISSMS", president: "Leo Thilini Lakshika" },
          { name: "Leo Club of Colombo Monarch", president: "Leo Navoda Tharumini" },
        ],
      },
    ],
  },
  {
    id: "B",
    name: "Region B",
    director: "Leo Mindula Gunathilaka",
    zones: [
      {
        id: "B1",
        director: "Leo Lion Maulie Siriwardena",
        clubs: [
          { name: "Leo Club of Ethos International College, Colombo VII", president: "Leo Sera Sapion" },
          { name: "Leo Club of University of Sri Jayewardenepura", president: "Leo Methin Thismalpola" },
          { name: "Leo Club of Panadura Alubomulla", president: "Leo Aadhila Wardha" },
        ],
      },
      {
        id: "B2",
        director: "Leo Savindu Rajapaksha",
        clubs: [
          { name: "Leo Club of Saegis Campus" },
          { name: "Leo Club of Millaniya", president: "Leo Pavani Yasintha" },
          { name: "Leo Club of Dehiwala East", president: "Leo Prabash De Silva" },
        ],
      },
    ],
  },
  {
    id: "C",
    name: "Region C",
    director: "Leo Enuk Dabare",
    zones: [
      {
        id: "C1",
        director: "Leo Chathuka Nilakshana",
        clubs: [
          { name: "Leo Club of Piliyandala", president: "Leo Yehen Jayanandana" },
          { name: "Leo Club of Polgasowita", president: "Leo Sanju Sasantha" },
          { name: "Leo Club of Taxila Central College", president: "Leo Denuwan Chamath" },
        ],
      },
      {
        id: "C2",
        director: "Leo Hasitha Dananjaya",
        clubs: [
          { name: "Leo Club of Sri Lanka Technological Campus", president: "Leo Ayesh Umayanga" },
          { name: "Leo Club of Raththanapitiya", president: "Leo Damithu Fonseka" },
          { name: "Leo Club of Pepiliyana Woodlands", president: "Leo Askha Purtri" },
        ],
      },
    ],
  },
];
