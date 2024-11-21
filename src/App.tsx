import { IconShare3, IconSparkles, IconZoom } from "@tabler/icons-react";
import { useState } from "react";
import "./App.css";
import beanCatalog from "./beanCatalog";
import AddBeanForm from "./components/AddBeanForm";
import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar";
import UserBeansSection from "./components/UserBeansSection";
import UserContext from "./components/UserContextProvider";
import UserProfile from "./components/UserProfile";
import { User } from "./types";
// const sectionStyle = "mx-0 md:max-w-5xl md:mx-auto p-8 bg-stone-700";
const sectionStyle = "mx-0 w-full md:max-w-5xl md:mx-auto p-4 my-0 md:my-24";
function App() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [currentBeanCatalog, setCurrentBeanCatalog] = useState(beanCatalog);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationBar />
      <div className="flex flex-col items-center justify-center gap-24 md:gap-0">
        {/* Display the user page if the user is logged in */}
        {user ? (
          <>
            <UserProfile sectionStyle={sectionStyle} />
            <section
              className={`${sectionStyle} flex flex-col md:flex-row gap-8`}
            >
              <UserBeansSection beans={currentBeanCatalog} />
              <div>
                <h2>Add A New Bean</h2>
                <AddBeanForm setBeanCatalog={setCurrentBeanCatalog} />
              </div>
            </section>
          </>
        ) : (
          // Display the landing page if the user is not logged in
          <>
            <HeroSection sectionStyle={sectionStyle} />
            <FeaturesSection sectionStyle={sectionStyle} />
            <FrequentAskedQuestionsSection sectionStyle={sectionStyle} />
          </>
        )}
      </div>
    </UserContext.Provider>
  );
}

function FeaturesSection({ sectionStyle }: { sectionStyle: string }) {
  function feature(
    icon: JSX.Element,
    title: string,
    description: string
  ): JSX.Element {
    return (
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          {icon}
          <h3 className="font-bold">{title}</h3>
        </div>
        <p className="pl-6">{description}</p>
      </div>
    );
  }
  return (
    <section
      className={`${sectionStyle}`}
      style={{ backgroundColor: "hsl(var(--accent-foreground))" }}
    >
      <div className="flex flex-col gap-8">
        {feature(
          <IconSparkles />,
          "Get Personalized Recommendations",
          "Our recommendation system analyzes your preferences to suggest new beans to try"
        )}

        {feature(
          <IconZoom />,
          "Discover new coffee like never before",
          "Search for beans by flavor profile, region, and more"
        )}
        {feature(
          <IconShare3 />,
          "Share your coffee journey with your friends",
          "Find your community and share your favorite beans with them"
        )}
      </div>
    </section>
  );
}

function FrequentAskedQuestionsSection({
  sectionStyle,
}: {
  sectionStyle: string;
}) {
  function question(question: string, answer: string): JSX.Element {
    return (
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <h3 className="font-bold">{question}</h3>
        </div>
        <p className="pl-6">{answer}</p>
      </div>
    );
  }
  return (
    <section className={`${sectionStyle}`}>
      <h2>Frequently Asked Questions</h2>
      <p>
        Can't find the answer you're looking for? <a href="#">Contact us.</a>
      </p>
      <div className="flex flex-col gap-8 mt-4">
        {question(
          "Is the service free to use?",
          "Yes, Coffee Journal is free to use for all users"
        )}

        {question(
          "Can I add coffee from an external site?",
          "Yes, you can add coffee from any site by entering the details manually"
        )}
        {question(
          "How are coffee recommendations generated?",
          "Our recommendation system analyzes data from other coffee lovers and your own preferences to suggest new beans to try. We do not collect browsing data nor endorse roasters based on partnerships."
        )}
      </div>
    </section>
  );
}
export default App;
