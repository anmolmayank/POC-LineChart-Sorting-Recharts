import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

export default class CustomChart extends React.Component {
  render() {
    let data = [
      {
        canCode: null,
        canValue: 4.5600000000000005,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -48
      },
      {
        canCode: null,
        canValue: 4.5600000000000005,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -32
      },
      {
        canCode: null,
        canValue: 4.5600000000000005,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -16
      },
      {
        canCode: null,
        canValue: 4.5600000000000005,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: 0
      },
      {
        canCode: null,
        canValue: 0.96,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -59
      },
      {
        canCode: null,
        canValue: 0.08,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -46
      },
      {
        canCode: null,
        canValue: 0.08,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -30
      },
      {
        canCode: null,
        canValue: 0.08,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -14
      },
      {
        canCode: null,
        canValue: 0.08,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: 1
      },
      {
        canCode: null,
        canValue: 1.6,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -57
      },
      {
        canCode: null,
        canValue: 2.2800000000000002,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -55
      },
      {
        canCode: null,
        canValue: 1.92,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -56
      },
      {
        canCode: null,
        canValue: 2.92,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -53
      },
      {
        canCode: null,
        canValue: 1.36,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -42
      },
      {
        canCode: null,
        canValue: 1.36,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -26
      },
      {
        canCode: null,
        canValue: 1.36,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -10
      },
      {
        canCode: null,
        canValue: 1.36,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: 5
      },
      {
        canCode: null,
        canValue: 3.2800000000000002,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -36
      },
      {
        canCode: null,
        canValue: 3.2800000000000002,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -20
      },
      {
        canCode: null,
        canValue: 3.2800000000000002,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -4
      },
      {
        canCode: null,
        canValue: 3.2800000000000002,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: 11
      },
      {
        canCode: null,
        canValue: 2.32,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -39
      },
      {
        canCode: null,
        canValue: 2.32,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -23
      },
      {
        canCode: null,
        canValue: 2.32,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -7
      },
      {
        canCode: null,
        canValue: 2.32,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: 8
      },
      {
        canCode: null,
        canValue: 2.6,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -54
      },
      {
        canCode: null,
        canValue: 0.4,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -45
      },
      {
        canCode: null,
        canValue: 0.4,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -29
      },
      {
        canCode: null,
        canValue: 0.4,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -13
      },
      {
        canCode: null,
        canValue: 0.4,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: 2
      },
      {
        canCode: null,
        canValue: 3.6,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -35
      },
      {
        canCode: null,
        canValue: 3.6,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -51
      },
      {
        canCode: null,
        canValue: 1.04,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -43
      },
      {
        canCode: null,
        canValue: 1.04,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -27
      },
      {
        canCode: null,
        canValue: 3.6,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -19
      },
      {
        canCode: null,
        canValue: 1.04,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -11
      },
      {
        canCode: null,
        canValue: 3.6,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -3
      },
      {
        canCode: null,
        canValue: 1.04,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: 4
      },
      {
        canCode: null,
        canValue: 3.6,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: 12
      },
      {
        canCode: null,
        canValue: 3.92,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -50
      },
      {
        canCode: null,
        canValue: 3.92,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -34
      },
      {
        canCode: null,
        canValue: 3.92,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -18
      },
      {
        canCode: null,
        canValue: 3.92,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -2
      },
      {
        canCode: null,
        canValue: 3.92,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: 13
      },
      {
        canCode: null,
        canValue: 1.28,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -58
      },
      {
        canCode: null,
        canValue: 3.24,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -52
      },
      {
        canCode: null,
        canValue: 4.88,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -47
      },
      {
        canCode: null,
        canValue: 4.88,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -31
      },
      {
        canCode: null,
        canValue: 4.88,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -15
      },
      {
        canCode: null,
        canValue: 4.88,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: 0
      },
      {
        canCode: null,
        canValue: 2.96,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -37
      },
      {
        canCode: null,
        canValue: 2.96,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -21
      },
      {
        canCode: null,
        canValue: 2.96,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -5
      },
      {
        canCode: null,
        canValue: 2.96,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: 10
      },
      {
        canCode: null,
        canValue: 4.24,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -49
      },
      {
        canCode: null,
        canValue: 4.24,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -33
      },
      {
        canCode: null,
        canValue: 4.24,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -17
      },
      {
        canCode: null,
        canValue: 4.24,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -1
      },
      {
        canCode: null,
        canValue: 4.24,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: 14
      },
      {
        canCode: null,
        canValue: 0.72,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -44
      },
      {
        canCode: null,
        canValue: 0.72,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -28
      },
      {
        canCode: null,
        canValue: 0.72,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -12
      },
      {
        canCode: null,
        canValue: 0.72,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: 3
      },
      {
        canCode: null,
        canValue: 2.64,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -38
      },
      {
        canCode: null,
        canValue: 2.64,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -22
      },
      {
        canCode: null,
        canValue: 2.64,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -6
      },
      {
        canCode: null,
        canValue: 2.64,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: 9
      },
      {
        canCode: null,
        canValue: 1.68,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -41
      },
      {
        canCode: null,
        canValue: 1.68,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -25
      },
      {
        canCode: null,
        canValue: 1.68,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -9
      },
      {
        canCode: null,
        canValue: 1.68,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: 6
      },
      {
        canCode: null,
        canValue: 2.0,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -40
      },
      {
        canCode: null,
        canValue: 2.0,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -24
      },
      {
        canCode: null,
        canValue: 2.0,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: -8
      },
      {
        canCode: null,
        canValue: 2.0,
        canName: "Boost pressure Current Value",
        canValueUnit: "bar",
        timeElapsed: 7
      }
    ];

    function compare(a, b) {
      const A = a.timeElapsed;
      const B = b.timeElapsed;

      let comparison = 0;
      if (A > B) {
        comparison = 1;
      } else if (A < B) {
        comparison = -1;
      }
      return comparison;
    }

    let sortedArray = data.sort(compare);

    return (
      <div>
        <h1>Example LineChart</h1>
        <div>
          <LineChart
            width={900}
            height={300}
            data={sortedArray}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis
              dataKey="timeElapsed"
              allowDuplicatedCategory={false}
              minTickGap={25}
              stackOrderDescending
            />
            <YAxis />
            <CartesianGrid strokeDasharray="0 0" stroke="#3a3a3a" />
            <Tooltip
              labelStyle={{ color: "black" }}
              itemStyle={{ color: "black" }}
            />
            <Line
              type="monotone"
              name="CAN Signal Value"
              dataKey="canValue"
              stroke="#0cdeff"
              dot={false}
              activeDot={{ stroke: "grey", strokeWidth: 2, r: 5 }}
              connectNulls="true"
            />
          </LineChart>
        </div>
      </div>
    );
  }
}
