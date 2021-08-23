import Header from "../../components/Header";
import "./GetCurrency.css";
import { useEffect, useState } from "react";

const GetCurrency = () => {
  const [crypto, setCrypto] = useState();
  const [dataCrypto, setDataCrypto] = useState();

  const test = async () => {
    const response = await fetch(`http://localhost:3001/rates/${crypto}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const data = await response.json();
    setDataCrypto(data);
  };

  const handlerSymbol = (e) => {
    const { value } = e.target;
    setCrypto(value);
  };

  useEffect(test, [crypto]);

  return (
    <div>
      <Header />
      <div className="getCrypto__container">
        <div className="getCrypto__title">
          <div>
            {dataCrypto ? (
              <h1 className="getCrypto__title--content">
                {" "}
                {dataCrypto.currency.description}
              </h1>
            ) : (
              <div>
                <h1 className="getCrypto__title--contentFirst">CRYPTO!</h1>
              </div>
            )}
          </div>
        </div>
        <div className="getCurrency__textSymbol">
          <p>Criptomoneda:</p>
        </div>
        <div className="getCurrency__form--select">
          <select defaultValue="btc" onChange={handlerSymbol}>
            <option value="btc">BTC</option>
            <option value="eth">ETH</option>
            <option value="ada">ADA</option>
          </select>
        </div>

        <div className="getCrypto__rate--text">
          <p>Cotización:</p>
        </div>
        <div className="getCrypto__content--price">
          {dataCrypto ? (
            <p> {`$${dataCrypto.value}`}</p>
          ) : (
            <div>
              <p>$0</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetCurrency;
