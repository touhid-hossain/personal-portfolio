import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components//About/About";
import Skills from "./components//Skills/Skills";
// import Services from "./components/Services/Services";
import Qualifications from "./components/Qualifications/Qualifications";
// import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/Scroll-Up/ScrollUp";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
// import Travel from "./components/Travel/Travel";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light-theme"
  );
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  // console.log(theme)

  return (
    <div className="App">
      <Header toggleTheme={toggleTheme} theme={theme} />

      <main className="main">
        <Home />
        <About />
        <Skills />
        {/* <Services /> */}
        <Qualifications />
        <Portfolio />
        {/* <Testimonials /> */}
        {/* <Travel /> */}
        <Resume />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
