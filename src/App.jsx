import React from "react";
// STYLES
import "./AppStyles.css";

// COMPONENTS *******************************
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Music from "./components/Music";
import News from "./components/News";

const App = () => {
  return (
    // STYLE BACKGROUND IMAGE ***********************************
    <div className="bg-site">
      <Header />
      <Banner />
      <Nav />
      <Music />
      <News />
    </div>
  );
};

export default App;
