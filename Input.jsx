import React from "react";

export default function Input({
  label,
  className = "",
  amount,
  onAmountChange,
  onCurrencyChange,
  CurrencyOpts = [],
  selectCurrency = "usd",
  amountDisable = false,
  CurrencyDisable = false,
}) {
  return (
    <div
      className={`bg-white p-3 rounded-lg text-sm flex justify-between ${className}`}
    >
      {/* Amount Input Section */}
      <div className="w-1/2 pr-2">
        <label className="text-black/60 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-gray-100 py-2 px-2 rounded-lg"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Currency Selector Section */}
      <div className="w-1/2 pl-2">
        <label className="text-black/60 mb-2 inline-block">Currency</label>
        <select
          className="w-full rounded-lg px-2 py-2 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          disabled={CurrencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {CurrencyOpts.map((val) => (
            <option key={val} value={val}>
              {val.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
