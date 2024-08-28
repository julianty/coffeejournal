import { cn } from "@/lib/utils";
import { SectionProps } from "@/types";
import { Button } from "./ui/button";

export default function HeroSection({ sectionStyle }: SectionProps) {
  return (
    <section className={cn([sectionStyle, "flex flex-col sm:flex-row"])}>
      <div className="w-80 h-80 flex items-center justify-center"> image</div>
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Welcome to Coffee Journal</h1>
        <p className="text-lg mt-4">
          A place to collect, showcase, and share your favorite coffee
        </p>
        <p> To begin:</p>
        <div className="flex gap-8">
          <Button>Sign Up</Button>
          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  );
}
