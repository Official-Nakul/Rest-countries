import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CountryCard from "./componenets/CountryCard/CountryCard";
import NavBar from "./componenets/NavBar/NavBar";
import "../src/componenets/utility.css";
function App() {
  const [countryData, setCountryData] = useState([]);
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
        <NavBar />
        <CountryCard data={countryData} />
      </div>
    </>
  );
}

export default App;
