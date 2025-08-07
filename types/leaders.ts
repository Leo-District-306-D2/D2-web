export type Member = {
  name: string;
  role: string;
  image: string;
};

export type LeaderData = {
  executiveOfficers: Member[];
  councilOfficers: Member[];
  councilCoordinators: Member[];
  regionA: Member[];
  regionB: Member[];
  regionC: Member[];
  directors: Member[];
  cabinetExecutives: Member[];
};

export type LeaderSectionProps = {
  title: string;
  members: Member[];
};

export type PresidentSectionProps = {
  title: string
  members: President[]
}

export type President = {
    id: number;
    name: string;
    role: string;
    image: string;
    logo: string;
    bio: string;
    presidencyYears: string;
}

export type PastDistrictPresident = {
    id: number;
    name: string;
    role: string;
    image: string;
    logo: string;
    quote: string;
    presidencyYears: string;
    club: string;
}

export type PastDistrictPresidentSectionProps = {
    title: string;
    presidents: PastDistrictPresident[];
}