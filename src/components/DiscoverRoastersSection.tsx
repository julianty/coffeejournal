import { cn } from "@/lib/utils";
import { SectionProps } from "@/types";
import { Card, CardContent, CardHeader } from "./ui/card";

const RoasterCatalog = [
  {
    companyName: "Pike Place Roasters",
    location: "Seattle, WA",
    image: "https://via.placeholder.com/150",
  },
  {
    companyName: "Allegro Coffee",
    location: "Boulder, CO",
    image: "https://via.placeholder.com/150",
  },
  {
    companyName: "Old Town Roasters",
    location: "San Diego, CA",
    image: "https://via.placeholder.com/150",
  },
  {
    companyName: "Dreamland Roasters",
    location: "Portland, OR",
    image: "https://via.placeholder.com/150",
  },
];
function RoasterCard({
  companyName,
  location,
  image,
}: {
  companyName: string;
  location: string;
  image: string;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="w-36 h-36 bg-stone-800 flex justify-center items-center"></div>
      </CardHeader>
      <CardContent>
        <h4>{companyName}</h4>
        <p>{location}</p>
        <p>{image}</p>
      </CardContent>
    </Card>
  );
}
export default function DiscoverRoastersSection({
  sectionStyle,
}: SectionProps) {
  return (
    <section className={cn([sectionStyle, "flex flex-col gap-8"])}>
      <h2 className="text-4xl font-bold">Some Roasters You Might like</h2>
      <div className="flex flex-col flex-wrap sm:flex-row gap-8">
        {RoasterCatalog.map((roasterProfile) => (
          <RoasterCard key={roasterProfile.companyName} {...roasterProfile} />
        ))}
      </div>
    </section>
  );
}
