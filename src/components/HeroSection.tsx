import { cn } from "@/lib/utils";
import { SectionProps } from "@/types";
import { Button } from "./ui/button";

export default function HeroSection({ sectionStyle }: SectionProps) {
  return (
    <section className={cn([sectionStyle, "flex flex-col sm:flex-row gap-12"])}>
      <div className="w-80 h-80 flex items-center justify-center">
        <img
          src="/brooke-cagle-0RiYUXie8nQ-unsplash.jpg"
          className="w-full h-full object-cover object-right rounded-lg"
          style={{ imageRendering: "pixelated" }}
          alt="coffee cup"
        />
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl font-bold">Welcome to Coffee Journal</h1>
        <p className="text-lg mt-4">
          A place to collect, showcase, and share your favorite coffee
        </p>
        <div className="flex gap-8">
          <Button>Sign Up</Button>
        </div>
      </div>
    </section>
  );
}
