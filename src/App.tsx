import { cn } from "@/lib/utils";
import React, { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader } from "./components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./components/ui/navigation-menu";
const sectionStyle = "mx-0 md:max-w-5xl md:mx-auto p-8 bg-stone-700";

type User = {
  username: string;
  email: string;
};

const UserContext = React.createContext<{
  user?: User;
  setUser?: React.Dispatch<React.SetStateAction<User | undefined>>;
}>({});

function App() {
  const [user, setUser] = useState<User | undefined>(undefined);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <NavigationBar />
        {user ? <UserProfile /> : <Hero />}
        <DiscoverBeansSection />
      </UserContext.Provider>
    </>
  );
}

function UserProfile() {
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
function DiscoverBeansSection() {
  return (
    <section className={cn([sectionStyle, "flex flex-col gap-8"])}>
      <h2 className="text-4xl font-bold">Discover New Beans</h2>
      <div className="flex flex-col flex-wrap sm:flex-row gap-8">
        {CoffeeBeanCatalog.map((coffeeBean) => (
          <CoffeeBeanItem {...coffeeBean} />
        ))}
      </div>
    </section>
  );
}
function Hero() {
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
function NavigationBar() {
  const { user, setUser } = React.useContext(UserContext);
  return (
    <div className="navigation flex mx-auto md:max-w-5xl justify-between bg-stone-800 p-4">
      <Logo />
      {user?.username ? (
        <Button onClick={() => setUser?.(undefined)}>Sign Out</Button>
      ) : (
        <SignInDialog />
      )}
      {/* <Button>Sign Out</Button> */}
      {/* <SignInDialog /> */}
    </div>
  );
}

function SignInDialog() {
  const { user, setUser } = React.useContext(UserContext);
  const demoUser = {
    username: "demoUser",
    email: "address@example.com",
  };
  return (
    <Dialog>
      <DialogTrigger>Sign In</DialogTrigger>
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

const CoffeeBeanCatalog = [
  {
    name: "Coffee 1",
    origin: "Ethiopia",
    roaster: "Roaster 1",
  },
  {
    name: "Coffee 2",
    origin: "Kenya",
    roaster: "Roaster 2",
  },
  {
    name: "Coffee 3",
    origin: "Brazil",
    roaster: "Roaster 3",
  },
];

type CoffeeBeanItemProps = {
  name: string;
  image?: string;
  origin: string;
  roaster: string;
  AvgUserRating?: number;
  price?: number;
  weight?: number;
  roast?: ["light" | "medium" | "dark"];
  flavorNotes?: string[];
};

function CoffeeBeanItem({ name, origin, roaster }: CoffeeBeanItemProps) {
  return (
    <Card>
      <CardHeader>
        <div className="w-36 h-36 bg-stone-800 flex justify-center items-center"></div>
      </CardHeader>
      <CardContent>
        <h4>{name}</h4>
        <p>{origin}</p>
        <p>{roaster}</p>
      </CardContent>
    </Card>
  );
}
export default App;
