import "./InsertCurrency.css";
import Header from "../../components/Header";
import { useState } from "react";
const InsertCurrency = () => {
  const [date, setDate] = useState();
  const [crypto, setCrypto] = useState("1");
  const [value, setValue] = useState();

  const HandlerDate = (e) => {
    const { value } = e.target;
    setDate(value);
  };

  const handlerClick = async (e) => {
    e.preventDefault();
    const rate = {
      created_at: date,
      value: value,
      id_currency: crypto,
    };
    console.log(rate);

    const response = await fetch("http://localhost:3001/rates/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rate),
    });
  };

  const handlerSymbol = (e) => {
    const { value } = e.target;
    setCrypto(value);
  };

  const handleValue = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <div>
      <Header />
      <form className="insertCurrency__form">
        <div className="insertCurrency__textSymbol">
          <p>Cripto:</p>
        </div>
        <div className="insertCurrency__form--select">
          <select defaultValue="1" onChange={handlerSymbol}>
            <option value="1">
              BTC
            </option>
            <option value="2">ETH</option>
            <option value="3">ADA</option>
          </select>
        </div>

        <div className="insertCurrency__textDate">
          <p>Fecha:</p>
        </div>
        <div className="insertCurrency__form--date">
          <input
            type="date"
            min="2009-01-01"
            max="2050-12-31"
            onChange={HandlerDate}
            className="insertCurrency__form--dateInput"
            
          />
        </div>
        <div className="insertCurrency__textInput">
          <p>Cotización:</p>
        </div>
        <div className="insertCurrency__form--value">
          <input
            type="number"
            onChange={handleValue}
            className="insertCurrency__form--inputValue"
          ></input>
        </div>
        <div className="insertCurrency__form--button">
          <button className="insertCurrency__button" onClick={handlerClick}>ACTUALIZAR</button>
        </div>
      </form>
    </div>
  );
};

export default InsertCurrency;
