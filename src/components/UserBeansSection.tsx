import { CoffeeBean, Roast } from "@/types";
import { Card, CardContent, CardHeader } from "./ui/card";
export default function UserBeansSection() {
  const beans = [
    {
      name: "Letty Bermuzdez Geisha",
      origin: "Colombia",
      roaster: "Lightsail Coffee Roasters",
      price: 20,
      weight: 12,
      roast: Roast.Light,
      flavorNotes: ["chocolate", "nutty"],
    },
    {
      name: "Hacienda Blend",
      origin: "Brazil",
      roaster: "Highland Coffee",
      price: 25,
      weight: 12,
      roast: Roast.Medium,
      flavorNotes: ["fruity", "nutty"],
    },
    {
      name: "Kirinyaga Peaberry",
      origin: "Kenya",
      roaster: "Black Sheep Roasters",
      price: 30,
      weight: 12,
      roast: Roast.Dark,
      flavorNotes: ["spicy", "nutty"],
    },
  ];
  return (
    <div className="w-1/2">
      <h2>Your Coffee Beans</h2>
      <ul className="flex flex-col gap-4">
        {beans.map((bean: CoffeeBean) => (
          <li key={bean.name}>
            <BeanCard bean={bean} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function BeanCard({ bean }: { bean: CoffeeBean }) {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center">
        <div>
          <p className="text-lg">{`${bean.name}, ${bean.origin}`}</p>
        </div>
        <div>{`$${bean.price}/${bean.weight}oz`}</div>
      </CardHeader>
      <CardContent className="flex justify-between gap-3">
        <div>
          <p className="text-sm">{bean.roaster}</p>
          <p className="text-sm">{bean.roast}</p>
        </div>
        <ul className="flex gap-2">
          {bean.flavorNotes.map((note: string) => (
            <li key={note} className="text-sm">
              {note}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
