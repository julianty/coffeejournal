import { CoffeeBean } from "@/types";
// import CoffeeBeanBag from "caleb-minear-kVAs4SVIxSk-unsplash.jpg";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
export default function UserBeansSection({ beans }: { beans: CoffeeBean[] }) {
  const [showOverflowBeans, setShowOverflowBeans] = useState(false);
  return (
    <div className="md:w-1/2">
      <h2>Your Coffee Beans</h2>
      <ul className="flex flex-col gap-4">
        {beans.map((bean: CoffeeBean, index) =>
          index < 4 ? (
            <li key={bean.name}>
              <BeanCard bean={bean} />
            </li>
          ) : showOverflowBeans ? (
            <li key={bean.name}>
              <BeanCard bean={bean} />
            </li>
          ) : (
            <li className="overflowBeans" key={bean.name}>
              <BeanCard bean={bean} />
            </li>
          )
        )}
        <li>
          <button onClick={() => setShowOverflowBeans(!showOverflowBeans)}>
            {showOverflowBeans ? "Show Less" : "Show More"}
          </button>
        </li>
      </ul>
    </div>
  );
}

function BeanCard({ bean }: { bean: CoffeeBean }) {
  return (
    <Card className="flex p-2">
      <div className="w-24 h-24">
        <img
          className="w-full h-full object-cover"
          src="caleb-minear-kVAs4SVIxSk-unsplash.jpg"
        ></img>
      </div>
      <div className="flex-grow">
        <CardContent className="h-full px-4 py-0 flex flex-col justify-between">
          <div className="mb-auto">
            <p className="font-semibold text-lg">{bean.name}</p>
          </div>
          <div>
            <p
              className="text-sm"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              {bean.origin}
            </p>
            <div className="flex justify-between items-center">
              <p className="text-xs">{bean.roaster}</p>
              <div className="font-semibold text-md">{`$${bean.price}/${bean.weight}oz`}</div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

// function BeanCard({ bean }: { bean: CoffeeBean }) {
//   return (
//     <Card>
//       <CardHeader className="flex flex-row justify-between items-center">
//         <div>
//           <p className="text-lg">{`${bean.name}, ${bean.origin}`}</p>
//         </div>
//         <div>{`$${bean.price}/${bean.weight}oz`}</div>
//       </CardHeader>
//       <CardContent className="flex justify-between gap-3">
//         <div>
//           <p className="text-sm">{bean.roaster}</p>
//           <p className="text-sm">{bean.roast}</p>
//         </div>
//         <ul className="flex gap-2">
//           {bean.flavorNotes.map((note: string) => (
//             <li key={note} className="text-sm">
//               {note}
//             </li>
//           ))}
//         </ul>
//       </CardContent>
//     </Card>
//   );
// }
