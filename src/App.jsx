import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./componenets/NavBar/NavBar";
import "../src/componenets/utility.css";
import MainPage from "./componenets/MainPage";
import DetailCard from "./componenets/detailCard/DetailCard";
function App() {
  const [countryData, setCountryData] = useState([]);
  const [isDark, setIsDark] = useState(1);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
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
  const handleSearch = (val) => {
    setSearch(val);
  };
  const handleRegion = (val) => {
    setRegion(val);
  };
  useEffect(() => {
    fetchDetails();
    console.log(countryData);
  }, []);
  return (
    <>
      <div className="container">
        <NavBar isDark={isDark} handleOnClick={toggleTheme} />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MainPage
                  isDark={isDark}
                  handleRegion={handleRegion}
                  handleSearch={handleSearch}
                  countryData={countryData}
                  search={search}
                  region={region}
                />
              }
            />
            <Route
              path="/countries/:cca3"
              element={<DetailCard isDark={isDark} data={countryData} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
