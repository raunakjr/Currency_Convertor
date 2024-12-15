import { useState } from "react";
import UseCurrencyinfo from "/Hooks/UseCurrencyinfo.js";
import Input from "../Components/Input";

function App() {
  const [Initialamount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmnt] = useState(0);

  const currencyinfo = UseCurrencyinfo(from); // Hook to get currency info
  const options = Object.keys(currencyinfo); // Currency options from API

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmnt(Initialamount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmnt(Initialamount * currencyinfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZEIpUPF2567oslUavutnFXT5-lREVw22cEw&s')`,
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg p-5 backdrop-blur-md bg-white/50">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* Input for "From" Currency */}
          <div className="mb-4">
            <Input
              label="From"
              amount={Initialamount}
              CurrencyOpts={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>

          {/* Swap Button */}
          <div className="relative w-full h-0.5 mb-4">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          {/* Input for "To" Currency */}
          <div className="mb-4">
            <Input
              label="To"
              amount={convertedAmount}
              CurrencyOpts={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          {/* Convert Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
