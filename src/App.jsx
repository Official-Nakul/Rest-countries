import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CountryCard from "./componenets/CountryCard/CountryCard";
import NavBar from "./componenets/NavBar/NavBar";
import FilterArea from "./componenets/FilterArea/FilterArea";
import "../src/componenets/utility.css";
function App() {
  const [countryData, setCountryData] = useState([]);
  const [isDark, setIsDark] = useState(1);
  const toggleTheme = () => {
    const theme = document.querySelector("#theme-toggler");
    theme.classList.toggle("light-theme");
    theme.classList.toggle("dark-theme");
    isDark ? setIsDark(0) : setIsDark(1);
  };
  const fetchDetails = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountryData([...data]);
  };

  useEffect(() => {
    fetchDetails();
    console.log(countryData);
  }, []);
  return (
    <>
      <div className="container">
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavBar />} />
            <Route path="/" element={<CountryCard data={countryData} />} />
          </Routes>
        </BrowserRouter> */}
        <NavBar isDark={isDark} handleOnClick={toggleTheme} />
        <FilterArea isDark={isDark} />
        <CountryCard data={countryData} />
      </div>
    </>
  );
}

export default App;
