import "./App.css";
import Chart from "react-google-charts";

function App() {
  const data1 = [
    {
      subcategory: "Bookcases",
      d__2021sale: 26426.8805,
      d__2022sale: 30354.0737,
    },
    {
      subcategory: "Phones",
      d__2021sale: 79178.01,
      d__2022sale: 105668.392,
    },
    {
      subcategory: "Tables",
      d__2021sale: 60835.4105,
      d__2022sale: 60999.2025,
    },
    {
      subcategory: "Binders",
      d__2021sale: 51580.133,
      d__2022sale: 73627.451,
    },
    {
      subcategory: "Storage",
      d__2021sale: 58845.676,
      d__2022sale: 69819.25,
    },
    {
      subcategory: "Accessories",
      d__2021sale: 41895.854,
      d__2022sale: 59946.232,
    },
    {
      subcategory: "Art",
      d__2021sale: 6119.766,
      d__2022sale: 9009.96,
    },
    {
      subcategory: "Copiers",
      d__2021sale: 49599.41,
      d__2022sale: 62916.668,
    },
    {
      subcategory: "Furnishings",
      d__2021sale: 28638.004,
      d__2022sale: 29262.53,
    },
    {
      subcategory: "Paper",
      d__2021sale: 20728.804,
      d__2022sale: 28173.53,
    },
    {
      subcategory: "Envelopes",
      d__2021sale: 4745.41,
      d__2022sale: 3378.574,
    },
    {
      subcategory: "Chairs",
      d__2021sale: 85079.431,
      d__2022sale: 97721.633,
    },
    {
      subcategory: "Appliances",
      d__2021sale: 26164.235,
      d__2022sale: 43095.932,
    },
    {
      subcategory: "Labels",
      d__2021sale: 2910.16,
      d__2022sale: 3987.026,
    },
    {
      subcategory: "Fasteners",
      d__2021sale: 1001.934,
      d__2022sale: 6161.714,
    },
    {
      subcategory: "Machines",
      d__2021sale: 55906.886,
      d__2022sale: 43887.875,
    },
    {
      subcategory: "Supplies",
      d__2021sale: 14277.576,
      d__2022sale: 16075.66,
    },
  ];

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
