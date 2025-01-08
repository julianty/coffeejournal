import { cn } from "@/lib/utils";
import { SectionProps } from "@/types";
import { Button } from "./ui/button";

export default function HeroSection({ sectionStyle }: SectionProps) {
  return (
    <section className={cn([sectionStyle, "flex flex-col gap-12 mt-24"])}>
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl font-bold">Welcome to Coffee Journal</h1>
        <p className="text-lg mt-4">
          A place to collect, showcase, and share your favorite coffee
        </p>
        <div className="flex gap-8">
          <Button className="bg-accent text-primary">Sign Up</Button>
        </div>
      </div>
    </section>
  );
}
