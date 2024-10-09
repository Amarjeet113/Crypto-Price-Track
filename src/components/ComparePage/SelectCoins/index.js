import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import SelectDays from "../../CoinPage/SelectDays";
import "./styles.css";

function SelectCoins({
  allCoins,
  crypto1,
  crypto2,
  onCoinChange,
  days,
  handleDaysChange,
}) {
  const style = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  const sortedCoins = allCoins.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="select-coins-div">
      <div className="select-flex">
        <p>Crypto 1</p>
        <Autocomplete
          value={sortedCoins.find((coin) => coin.id === crypto1)}
          onChange={(e, newValue) => onCoinChange({ target: { value: newValue ? newValue.id : "" } }, false)}
          options={sortedCoins.filter((coin) => coin.id !== crypto2)}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => <TextField {...params} sx={style} />}
        />
      </div>
      <div className="select-flex">
        <p>Crypto 2</p>
        <Autocomplete
          value={sortedCoins.find((coin) => coin.id === crypto2)}
          onChange={(e, newValue) => onCoinChange({ target: { value: newValue ? newValue.id : "" } }, true)}
          options={sortedCoins.filter((coin) => coin.id !== crypto1)}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => <TextField {...params} sx={style} />}
        />
      </div>
      <SelectDays
        days={days}
        handleDaysChange={handleDaysChange}
        noPTag={true}
      />
    </div>
  );
}

export default SelectCoins;
