import { useState } from "react";
import "./App.css";
import beanCatalog from "./beanCatalog";
import AddBeanForm from "./components/AddBeanForm";
import DiscoverBeansSection from "./components/DiscoverBeansSection";
import DiscoverRoastersSection from "./components/DiscoverRoastersSection";
import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar";
import UserContext from "./components/UserContextProvider";
import UserProfile from "./components/UserProfile";
import { User } from "./types";
// const sectionStyle = "mx-0 md:max-w-5xl md:mx-auto p-8 bg-stone-700";
const sectionStyle = "mx-0 w-full md:max-w-5xl md:mx-auto p-8 my-0 md:my-12";
function App() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [currentBeanCatalog, setCurrentBeanCatalog] = useState(beanCatalog);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationBar />
      {user ? (
        <>
          <UserProfile sectionStyle={sectionStyle} />
          <section className={sectionStyle}>
            <AddBeanForm setBeanCatalog={setCurrentBeanCatalog} />
          </section>
        </>
      ) : (
        <HeroSection sectionStyle={sectionStyle} />
      )}
      <DiscoverBeansSection
        sectionStyle={sectionStyle}
        catalog={currentBeanCatalog}
      />
      <DiscoverRoastersSection sectionStyle={sectionStyle} />
    </UserContext.Provider>
  );
}

export default App;
