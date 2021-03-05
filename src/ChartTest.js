import React, { useState, useEffect } from "react";
import { Polar } from "react-chartjs-2";
import { Chart } from "chart.js";
export default function ChartTest({ results }) {
  var color = Chart.helpers.color;

  return (
    <div class="chartcanvas">
      <Polar
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
              data: results,
              backgroundColor: [
                color("forestgreen").alpha(0.5).rgbString(),
                color("limegreen").alpha(0.5).rgbString(),
                color("lightgreen").alpha(0.5).rgbString(),
                color("indianred").alpha(0.5).rgbString(),
                color("lightcoral").alpha(0.5).rgbString(),
                color("lightpink").alpha(0.5).rgbString(),
                color("lightgray").alpha(0.5).rgbString(),
              ],
            },
          ],
        }}
        options={{
          responsive: true,
          legend: { display: false },
        }}
      />
    </div>
  );
}
