import { cn } from "@/lib/utils";
import {
  CoffeeBean,
  CoffeeBeanItemProps,
  DiscoverBeansSectionProps,
} from "@/types";
import { Card, CardContent, CardHeader } from "./ui/card";
function CoffeeBeanItem({
  name,
  origin,
  roaster,
  price,
  roast,
  flavorNotes,
}: CoffeeBeanItemProps) {
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
          className="w-40 h-36 bg-stone-800 flex mx-auto mb-3 object-cover rounded-md"
        ></img>
        <div className="flex justify-between">
          <p>{roast}</p>
          <p className="price">{`$${price}`}</p>
        </div>
        <ul className="flex gap-2">
          {flavorNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <p className="text-muted-foreground">{roaster}</p>
      </CardContent>
    </Card>
  );
}
export default function DiscoverBeansSection({
  sectionStyle,
  catalog,
}: DiscoverBeansSectionProps) {
  return (
    <section className={cn([sectionStyle, "flex flex-col gap-8"])}>
      <h2 className="text-4xl font-bold">Discover New Beans</h2>
      <div className="flex flex-col flex-wrap sm:flex-row gap-8">
        {catalog.map((coffeeBean: CoffeeBean) => (
          <CoffeeBeanItem key={coffeeBean.name} {...coffeeBean} />
        ))}
      </div>
    </section>
  );
}
