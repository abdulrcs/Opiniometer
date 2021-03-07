import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js";
export default function ChartTest({ result }) {
  function withChartSizeControl(Component) {
    return (props) => (
      <div
        className="chart"
        style={{
          position: "relative",
          height: props.height + "vh",
          width: props.width + "vw",
        }}
      >
        <Component {...props} />
      </div>
    );
  }

  const NewDoughnut = withChartSizeControl(Doughnut);
  function sum(arr) {
    return arr.reduce((a, b) => a + b);
  }
  return sum(result) > 0 ? (
    <NewDoughnut
      data={{
        labels: [
          "Strongly Positive",
          "Positive",
          "Weakly Positive",
          "Strongly Negative",
          "Negative",
          "Weakly Negative",
          "Neutral",
        ],
        datasets: [
          {
            data: result,
            backgroundColor: [
              "forestgreen",
              "limegreen",
              "lightgreen",
              "indianred",
              "lightcoral",
              "lightpink",
              "#707072",
            ],
          },
        ],
      }}
      width={80}
      height={50}
      options={{
        legend: { display: false },
        maintainAspectRatio: false,
      }}
    />
  ) : (
    <div class="notenough">
      <h2>Not enough tweets &#128557;</h2>
    </div>
  );
}
