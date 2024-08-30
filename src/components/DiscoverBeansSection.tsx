import { cn } from "@/lib/utils";
import { CoffeeBeanItemProps, SectionProps } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

const CoffeeBeanCatalog = [
  {
    name: "Yirgacheffe",
    origin: "Ethiopia",
    roaster: "Old Town Roasters",
  },
  {
    name: "Winter Kenya Blend",
    origin: "Kenya",
    roaster: "Pike Place Roasters",
  },
  {
    name: "Pantano",
    origin: "Brazil",
    roaster: "Dreamland Roasters",
  },
];
function CoffeeBeanItem({ name, origin, roaster }: CoffeeBeanItemProps) {
  return (
    <Card>
      <CardHeader>
        {/* <div className="w-36 h-36 bg-stone-800 flex justify-center items-center"></div> */}
        <h4>{name}</h4>
        <p className="origin">{`Origin: ${origin}`}</p>
      </CardHeader>
      <CardContent>
        <img
          src="/pexels-polina-tankilevitch-4109743.jpg"
          alt="coffee bean"
          className="w-36 h-36 bg-stone-800 flex justify-center items-center object-cover rounded-md"
        ></img>
      </CardContent>
      <CardFooter>
        <p className="text-muted-foreground">{roaster}</p>
      </CardFooter>
    </Card>
  );
}
export default function DiscoverBeansSection({ sectionStyle }: SectionProps) {
  return (
    <section className={cn([sectionStyle, "flex flex-col gap-8"])}>
      <h2 className="text-4xl font-bold">Discover New Beans</h2>
      <div className="flex flex-col flex-wrap sm:flex-row gap-8">
        {CoffeeBeanCatalog.map((coffeeBean) => (
          <CoffeeBeanItem key={coffeeBean.name} {...coffeeBean} />
        ))}
      </div>
    </section>
  );
}
