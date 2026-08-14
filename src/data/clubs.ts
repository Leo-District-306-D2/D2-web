import type { Region } from "@/lib/types";

// Full alphabetical list of member clubs (from the homepage "Leo Clubs in the District").
export const allClubs: string[] = [
  "Leo Club of Arawwala",
  "Leo Club of Colombo Monarch",
  "Leo Club of Dehiwala East",
  "Leo Club of Ethos International College Colombo VII",
  "Leo Club of Gampaha Wickramarachchi University of Indigenous Medicine FISSMS",
  "Leo Club of Godigamuwa",
  "Leo Club of Kalubowila",
  "Leo Club of Millaniya",
  "Leo Club of Panadura-Alubomulla",
  "Leo Club of Pepiliyana Woodlands",
  "Leo Club of Piliyandala",
  "Leo Club of Piliyandala Central College",
  "Leo Club of Polgasowita",
  "Leo Club of Raththanapitiya",
  "Leo Club of Saegis Campus",
  "Leo Club of Sri Lanka Technological and Research Campus",
  "Leo Club of Taxila Central College II",
  "Leo Club of University of Moratuwa",
  "Leo Club of University of Sri Jayewardenepura",
];

// District structure: 3 regions, 6 zones, ~18 clubs.
// Zone A1 has confirmed detail from the live site. Remaining zones are scaffolded with
// TODO placeholders — fill in each zone's clubs (name / president / member count).
export const regions: Region[] = [
  {
    id: "A",
    name: "Region A",
    director: "Leo Bimsara Alawathugoda",
    zones: [
      {
        id: "A1",
        director: "Leo Sanjeev Gunasekara",
        clubs: [
          { name: "Leo Club of Arawwala", president: "Saman Perera", members: 25 },
          { name: "Leo Club of University of Moratuwa", president: "Nishani Silva", members: 20 },
          { name: "Leo Club of Raththanapitiya", president: "Ruwan Fernando", members: 18 },
        ],
      },
      {
        id: "A2",
        director: "Leo Isuri Jayakodi",
        clubs: [], // TODO: add Zone A2 clubs
      },
    ],
  },
  {
    id: "B",
    name: "Region B",
    director: "Leo Aditha Udara",
    zones: [
      { id: "B1", director: "Leo Enuk Dabare", clubs: [] }, // TODO: add Zone B1 clubs
      { id: "B2", director: "Leo Mindula Gunathilaka", clubs: [] }, // TODO: add Zone B2 clubs
    ],
  },
  {
    id: "C",
    name: "Region C",
    director: "Leo Buwanaji Munasinghe",
    zones: [
      { id: "C1", director: "Leo Duvindu Rajapaksha", clubs: [] }, // TODO: add Zone C1 clubs
      { id: "C2", director: "Leo Darshika Prabashwara", clubs: [] }, // TODO: add Zone C2 clubs
    ],
  },
];
