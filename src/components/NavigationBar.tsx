import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import UserContext from "./UserContextProvider";

function Logo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Coffee Journal
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function SignInDialog() {
  const { setUser } = React.useContext(UserContext);
  const demoUser = {
    username: "demoUser",
    email: "address@example.com",
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Sign In</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Sign In</DialogTitle>
        <DialogDescription>This is a sign in dialog</DialogDescription>
        <DialogClose asChild>
          <Button type="submit" onClick={() => setUser?.(demoUser)}>
            Sign in as demoUser
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
export default function NavigationBar() {
  const { user, setUser } = React.useContext(UserContext);
  return (
    <div className="navigation w-full flex mx-auto md:max-w-5xl justify-between bg-stone-800 p-4">
      <Logo />
      {user?.username ? (
        <Button onClick={() => setUser?.(undefined)}>Sign Out</Button>
      ) : (
        <SignInDialog />
      )}
    </div>
  );
}
