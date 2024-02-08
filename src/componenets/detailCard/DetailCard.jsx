import { Link, useNavigate, useParams } from "react-router-dom";
import "./detailCard.css";

const DetailCard = ({ isDark, data }) => {
  const { cca3 } = useParams("");
  console.log(data);
  const joinArray = (array) => array.join(", ");
  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const getCurrency = (currencies) => {
    const currencyNames = [];
    for (let [, value] of Object.entries(currencies))
      currencyNames.push(value.name);
    return joinArray(currencyNames);
  };
  const getLanguages = (languageObject) => {
    const languages = [];
    for (let [, value] of Object.entries(languageObject))
      languages.push(value.name);
    console.log(languages);
    return joinArray(languages);
  };
  const getBorderCountries = (borders) => {
    if (borders === undefined) return [];
    const borderCountryMap = [];
    data
      .filter((country) => borders.includes(country.cca3))
      .map((country) => borderCountryMap.push(country));
    return borderCountryMap;
  };
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="detailCardContainer">
      <div className="backBtn flex-row" onClick={goBack}>
        {isDark ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path
              d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"
              fill="#ffffff"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
          </svg>
        )}
        Back
      </div>
      {data
        .filter((item) => {
          if (item.cca3 === cca3) {
            return item;
          }
        })
        .map((count) => (
          <div className="detailContainer flex-row">
            <img src={count.flags.png} alt="" />
            <div className="dataHolder flex-col">
              <p className="countryName font-800 lable-txt detailHeading">
                {count.name.official}
              </p>
              <div className="allDetails flex-col">
                <span className="flex-row gap-5">
                  <p className="font-600 lable-txt">Native Name:</p>
                  <p className="font-200">{count.name.common}</p>
                </span>
                <span className="flex-row gap-5">
                  <p className="font-600 lable-txt">Population:</p>
                  <p className="font-200">{formatNumber(count.population)}</p>
                </span>
                <span className="flex-row gap-5">
                  <p className="font-600 lable-txt">Region:</p>
                  <p className="font-200">{count.region}</p>
                </span>
                <span className="flex-row gap-5">
                  <p className="font-600 lable-txt">SubRegion:</p>
                  <p className="font-200">{count.region}</p>
                </span>
                <span className="flex-row gap-5">
                  <p className="font-600 lable-txt">capital:</p>
                  <p className="font-200">{count.capital}</p>
                </span>
                <span className="flex-row gap-5">
                  <p className="font-600 lable-txt">Top Level Domain:</p>
                  <p className="font-200">{count.tld}</p>
                </span>
                <span className="flex-row gap-5">
                  <p className="font-600 lable-txt">Currencies:</p>
                  <p className="font-200">{getCurrency(count.currencies)}</p>
                </span>
                <span className="flex-row gap-5">
                  <p className="font-600 lable-txt">Languages:</p>
                  <p className="font-200">{getLanguages(count.languages)}</p>
                </span>
                <div className="borderCountries font-800 flex-col lable-txt">
                  Border Countries:
                  <div className="btnContainer">
                    {getBorderCountries(count.borders).map((border) => (
                      <Link className="link" to={`/countries/${border.cca3}`}>
                        <div className="borderBtn flex-row">
                          {border.name.common}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DetailCard;
