type User = {
  username: string;
  email: string;
};
type CoffeeBeanItemProps = {
  name: string;
  image?: string;
  origin: string;
  roaster: string;
  AvgUserRating?: number;
  price?: number;
  weight?: number;
  roast?: ["light" | "medium" | "dark"];
  flavorNotes?: string[];
};

type SectionProps = {
  sectionStyle: string;
};

export type { CoffeeBeanItemProps, SectionProps, User };
