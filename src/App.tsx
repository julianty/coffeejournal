import { useState } from "react";
import "./App.css";
import DiscoverBeansSection from "./components/DiscoverBeansSection";
import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar";
import UserContext from "./components/UserContextProvider";
import UserProfile from "./components/UserProfile";
import { User } from "./types";
const sectionStyle = "mx-0 md:max-w-5xl md:mx-auto p-8 bg-stone-700";

function App() {
  const [user, setUser] = useState<User | undefined>(undefined);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <NavigationBar />
        {user ? (
          <UserProfile sectionStyle={sectionStyle} />
        ) : (
          <HeroSection sectionStyle={sectionStyle} />
        )}
        <DiscoverBeansSection sectionStyle={sectionStyle} />
      </UserContext.Provider>
    </>
  );
}

export default App;
