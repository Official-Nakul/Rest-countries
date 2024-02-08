import React from "react";
import CountryCard from "./CountryCard/CountryCard";
import FilterArea from "./FilterArea/FilterArea";
const MainPage = ({
  isDark,
  handleSearch,
  handleRegion,
  search,
  countryData,
  region,
}) => {
  return (
    <>
      <FilterArea
        isDark={isDark}
        handleSearch={handleSearch}
        handleRegion={handleRegion}
      />
      <CountryCard data={countryData} searchVal={search} region={region} />
    </>
  );
};

export default MainPage;
