import React, { useState, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

function LineChart() {
  const [prices, setPrices] = useState();
  const [coinsToDisplay, setCoinsToDislplay] = useState(["btc", "eth", "bnb"]);
  const apiURL = "http://127.0.0.1:4455/prices/";
  pullData = setCoinsToDislplay;

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

  if (coinsToDisplay.includes("btc"))
    data.datasets.push({
      label: "btc",
      data: Object.values(prices.btc),
      backgroundColor: "rgb(247,147,26)",
      borderColor: "rgb(247,147,26)",
      borderWidth: 1,
    });

  if (coinsToDisplay.includes("eth"))
    data.datasets.push({
      label: "eth",
      data: Object.values(prices.eth),
      backgroundColor: "rgb(60, 60, 61)",
      borderColor: "rgb(60, 60, 61)",
      borderWidth: 1,
    });

  if (coinsToDisplay.includes("bnb"))
    data.datasets.push({
      label: "bnb",
      data: Object.values(prices.bnb),
      backgroundColor: "#f3ba2f",
      borderColor: "#f3ba2f",
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
