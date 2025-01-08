import { cn } from "@/lib/utils";
import { SectionProps } from "@/types";
import React from "react";
import UserContext from "./UserContextProvider";
export default function UserProfile({ sectionStyle }: SectionProps) {
  const { user } = React.useContext(UserContext);
  return (
    <section
      className={cn([
        sectionStyle,
        "flex flex-col sm:flex-row gap-8 justify-center",
      ])}
    >
      <img
        id="profile-picture"
        src="pexels-olly-3790797.jpg"
        alt="profile picture"
        className="w-48 h-48 bg-stone-800 flex justify-center items-center rounded-full object-cover"
      ></img>
      <div id="profile-info" className="sm:w-96 flex flex-col gap-2">
        <h2 className="">{user?.username}</h2>
        <p className="text-sm text-muted-foreground">Demo User</p>
        <p>Followers: 5</p>
        <div className="flex items-center gap-4">
          Following:
          <MiniProfilePicture
            src="pexels-anastasia-shuraeva-6608313.jpg"
            alt="following-1"
            className="bg-stone-800"
          />
          <MiniProfilePicture
            src="pexels-chuck-2941565.jpg"
            alt="following-2"
            className="bg-stone-800"
          />
          <MiniProfilePicture
            src="pexels-dziana-hasanbekava-7275385.jpg"
            alt="profile-picture-1"
            className="bg-stone-800"
          />
          and 2 others
        </div>
      </div>
    </section>
  );
}

function MiniProfilePicture({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  const defaultClass =
    "w-8 h-8 sm:w-12 sm:h-12 bg-stone-800 flex justify-center items-center rounded-full object-cover";
  return (
    <img
      // src={WomanDrinkingCoffe}
      id={`profile-picture-${alt}`}
      src={src}
      alt={alt}
      className={cn([defaultClass, className])}
    ></img>
  );
}
