import { cn } from "@/lib/utils";
import { CoffeeBeanItemProps, SectionProps } from "@/types";
import { Card, CardContent, CardHeader } from "./ui/card";

const CoffeeBeanCatalog = [
  {
    name: "Coffee 1",
    origin: "Ethiopia",
    roaster: "Roaster 1",
  },
  {
    name: "Coffee 2",
    origin: "Kenya",
    roaster: "Roaster 2",
  },
  {
    name: "Coffee 3",
    origin: "Brazil",
    roaster: "Roaster 3",
  },
];
function CoffeeBeanItem({ name, origin, roaster }: CoffeeBeanItemProps) {
  return (
    <Card>
      <CardHeader>
        <div className="w-36 h-36 bg-stone-800 flex justify-center items-center"></div>
      </CardHeader>
      <CardContent>
        <h4>{name}</h4>
        <p>{origin}</p>
        <p>{roaster}</p>
      </CardContent>
    </Card>
  );
}
export default function DiscoverBeansSection({ sectionStyle }: SectionProps) {
  return (
    <section className={cn([sectionStyle, "flex flex-col gap-8"])}>
      <h2 className="text-4xl font-bold">Discover New Beans</h2>
      <div className="flex flex-col flex-wrap sm:flex-row gap-8">
        {CoffeeBeanCatalog.map((coffeeBean) => (
          <CoffeeBeanItem {...coffeeBean} />
        ))}
      </div>
    </section>
  );
}
