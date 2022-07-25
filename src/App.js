import React, { useState, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

function LineChart() {
  const [prices, setPrices] = useState();
  const [coinsToDisplay, setCoinsToDislplay] = useState(["btc", "eth", "bnb"]);
  const apiURL = "http://127.0.0.1:4455/prices/";
  pullData = setCoinsToDislplay;
  const Colors = {
    btc: "rgb(247,147,26)",
    eth: "rgb(60, 60, 61)",
    bnb: "#f3ba2f",
  };
  const Symbols = {
    bitcoin : "btc",
    ethereum : "eth",
    binanceCoin : "bnb",
  }

  useEffect(() => {
    async function getPrices() {
      const response = await fetch(apiURL);
      const responseData = await response.json();
      setPrices(responseData);
    }
    getPrices().catch((err) => {
      console.error(err);
    });
  }, [apiURL]);

  if (!prices)
    return (
      <div>
        <p>
          {
            "Please Wait, Crypto Prices are Being Loaded...In case the chart isn't loading just refresh the page :)"
          }
        </p>
      </div>
    );

  var data = {
    labels: Object.keys(prices.btc),
    datasets: [],
  };

  if (coinsToDisplay.includes(Symbols.bitcoin))
    data.datasets.push({
      label: Symbols.bitcoin,
      data: Object.values(prices.btc),
      backgroundColor: Colors.btc,
      borderColor: Colors.btc,
      borderWidth: 1,
    });

  if (coinsToDisplay.includes(Symbols.ethereum))
    data.datasets.push({
      label: Symbols.ethereum,
      data: Object.values(prices.eth),
      backgroundColor: Colors.eth,
      borderColor: Colors.eth,
      borderWidth: 1,
    });

  if (coinsToDisplay.includes(Symbols.binanceCoin))
    data.datasets.push({
      label: Symbols.binanceCoin,
      data: Object.values(prices.bnb),
      backgroundColor: Colors.bnb,
      borderColor: Colors.bnb,
      borderWidth: 1,
    });

  const options = {
    plugins: {
      tooltip: { enabled: true },
      legend: { onClick: (e) => e.stopPropagation() },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          text: "Price(USD$)",
        },
      },
      x: {
        ticks: { major: { enabled: true } },
      },
    },
  };

  return (
    <div>
      <Chart type={"line"} data={data} options={options} />
    </div>
  );
}

var pullData;
LineChart.pullData = (data) => {
  pullData(data);
};

export default LineChart;
