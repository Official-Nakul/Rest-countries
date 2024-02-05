import React from "react";
import "./CountryCard.css";
import { Link } from "react-router-dom";
const CountryCard = ({ data }) => {
  // const { name, population, capital, region, flag } = [...data];
  // console.log(data);
  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="cardsContainer">
      <div className="cardHolder">
        {data.map((count) => (
          <div className="card flex-col">
            <img src={count.flags.png} alt="" />
            <p className="countryName font-800 lable-txt">
              {count.name.common}
            </p>
            <div className="details flex-col">
              <span className="flex-row gap-5">
                <p className="font-600 lable-txt">Population:</p>
                <p className="font-300">{formatNumber(count.population)}</p>
              </span>
              <span className="flex-row gap-5">
                <p className="font-600 lable-txt">Region:</p>
                <p className="font-300">{count.region}</p>
              </span>
              <span className="flex-row gap-5">
                <p className="font-600 lable-txt">capital:</p>
                <p className="font-300">{count.capital}</p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryCard;
