import "./App.css";
import Chart from "react-google-charts";
import { data1 } from "./data";

function App() {

  var data = [["category", "", "", "", ""]];
  var data2 = [];
  let x = 0;

  data1.map((e) => {
    let diff = e.d__2022sale - e.d__2021sale;
    data2.push([e.subcategory, diff]);
    return 0;
  });

  function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
      return 0;
    } else {
      return a[1] < b[1] ? 1 : -1;
    }
  }

  data2.sort(compareSecondColumn);
  //console.log(data2);

  let profit = 0,
    loss = 0,
    net = 0;

  data2.map((e) => {
    data.push([e[0], x, x, x + e[1], x + e[1]]);
    if (e[1] >= 0) profit += e[1];
    else loss -= e[1];
    net += e[1];

    x += e[1];
    return 0;
  });

  data.push(["Net", 0, 0, net, net]);

  //console.log(data)

  const options = {
    legend: "none",
    bar: { groupWidth: "90%" }, // Remove space between bars.
    candlestick: {
      fallingColor: { strokeWidth: 0.1, fill: "#a52714" }, // red
      risingColor: { strokeWidth: 0.1, fill: "#0f9d58" }, // green
    },
  };

  return (
    <div className="App">
      <h3> Accumulated Waterfall Chart </h3>
      <div className="App">
        <Chart
          chartType="CandlestickChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />

        <br />
        <br />
        <h2>Net Change</h2>

        <table>
          <tr>
            <th>Profit</th>
            <th>{profit.toFixed(2)}</th>
          </tr>
          <tr>
            <th>Loss</th>
            <th>{loss.toFixed(2)}</th>
          </tr>
          <tr>
            <th>Net</th>
            <th>{net.toFixed(2)}</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
