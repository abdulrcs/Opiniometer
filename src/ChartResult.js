import { Doughnut } from "react-chartjs-2";

export default function ChartResult({ result }) {
  let polarities = [0, 0, 0, 0, 0, 0, 0];
  if (result["polarity"] != null)
    polarities = Object.entries(result["polarity"]).map((e) => e[1]);
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
    return arr.reduce((a, b) => a + b, 0);
  }

  return sum(polarities) > 0 ? (
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
            data: polarities,
            backgroundColor: [
              "forestgreen",
              "limegreen",
              "lightgreen",
              "indianred",
              "lightcoral",
              "lightpink",
              "#707072",
            ],
            borderColor: "white",
            borderWidth: 4,
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
