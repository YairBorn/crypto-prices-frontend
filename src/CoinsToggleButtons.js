import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import './index.css';

function CoinsToggleButtons(props) {
  const [coins, setCoins] = React.useState(() => ["btc", "eth", "bnb"]);

  const handleChange = (event, newCoins) => {
    setCoins(newCoins);
    props.pushData(newCoins);
    // console.debug(newCoins);
  };

  return (
    <ToggleButtonGroup 
    id="btnGroup"
      value={coins}
      onChange={handleChange}
      aria-label="text formatting"
      size={"small"}
    >
      <ToggleButton value="btc" aria-label="btcBtn">
        <code>btc</code>
      </ToggleButton>
      <ToggleButton value="eth" aria-label="ethBtn">
        <code>eth</code>
      </ToggleButton>
      <ToggleButton value="bnb" aria-label="bnbBtn">
        <code>bnb</code>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default CoinsToggleButtons;
