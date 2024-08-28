import { cn } from "@/lib/utils";
import { SectionProps } from "@/types";
import React from "react";
import UserContext from "./UserContextProvider";

export default function UserProfile({ sectionStyle }: SectionProps) {
  const { user } = React.useContext(UserContext);
  return (
    <section className={cn([sectionStyle, "flex gap-8"])}>
      <div className="w-36 h-36 bg-stone-800 flex justify-center items-center"></div>
      <div className="flex flex-col gap-4">
        <p>Username: {user?.username}</p>
        <p>Email: {user?.email}</p>
      </div>
    </section>
  );
}
