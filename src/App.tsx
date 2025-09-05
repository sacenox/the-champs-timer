import { useState } from "react";
import "./App.css";
import Content from "./components/content";
import Header from "./components/header";
import Settings from "./components/settings";

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleSettingsOpen = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="bg-slate-100 dark:bg-slate-950 text-slate-950 dark:text-slate-100 w-full h-screen overflow-x-hidden">
      <Header
        isSettingsOpen={isSettingsOpen}
        handleSettingsOpen={handleSettingsOpen}
      />
      {isSettingsOpen ? <Settings /> : <Content />}
    </div>
  );
}

export default App;
