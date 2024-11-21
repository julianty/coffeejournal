type User = {
  username: string;
  email: string;
  followers?: number;
  coffeeBeans?: CoffeeBean[];
};
export enum Roast {
  Light = "Light",
  Medium = "Medium",
  Dark = "Dark",
}
type CoffeeBean = {
  name: string;
  origin: string;
  roaster: string;
  price: number;
  weight: number;
  roast: Roast;
  flavorNotes: string[];
  img?: string;
};

type CoffeeBeanItemProps = {
  image?: string;
  AvgUserRating?: number;
} & CoffeeBean;

type SectionProps = {
  sectionStyle: string;
};

type DiscoverBeansSectionProps = {
  catalog: CoffeeBean[];
} & SectionProps;
type Roaster = {
  companyName: string;
  location: string;
  image: string;
};

export type {
  CoffeeBean,
  CoffeeBeanItemProps,
  DiscoverBeansSectionProps,
  Roaster,
  SectionProps,
  User,
};
