type User = {
  username: string;
  email: string;
  followers?: number;
  coffeeBeans?: CoffeeBean[];
};

type CoffeeBean = {
  name: string;
  origin: string;
  roaster: string;
  price?: number;
  weight?: number;
  roast?: ["light" | "medium" | "dark"];
  flavorNotes?: string[];
};

type CoffeeBeanItemProps = {
  image?: string;
  AvgUserRating?: number;
} & CoffeeBean;

type SectionProps = {
  sectionStyle: string;
};

type Roaster = {
  companyName: string;
  location: string;
  image: string;
};

export type { CoffeeBean, CoffeeBeanItemProps, Roaster, SectionProps, User };
