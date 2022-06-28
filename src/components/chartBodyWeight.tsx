import React, { Fragment, useRef } from "react";
import {
  Chart,
  ChartData,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

function ChartSample() {
  const chartRef: any = useRef(null);

  const formData: ChartData = {
    labels: [
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
    ],
    datasets: [
      {
        fill: false,
        backgroundColor: "#facc20",
        borderColor: "#facc20",
        borderWidth: 4,
        data: [950, 920, 700, 800, 750, 680, 760, 670, 650, 640, 620, 640],
      },
      {
        fill: false,
        backgroundColor: "#8fe9d0",
        borderColor: "#8fe9d0",
        borderWidth: 4,
        data: [950, 900, 730, 710, 600, 590, 560, 550, 540, 400, 380, 360],
      },
    ],
  };

  // callback creates the chart on the canvas element
  const canvasCallback = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      Chart.register(
        LineController,
        LineElement,
        PointElement,
        LinearScale,
        CategoryScale
      );
      chartRef.current = new Chart(ctx, {
        type: "line",
        data: formData,
        options: {
          scales: {
            y: {
              grid: {
                display: false,
                borderColor: "white",
                color: "white",
              },
              ticks: {
                display: false,
              },
            },
            x: {
              grid: {
                color: "white",
              },
            },
          },
        },
      });
    }
  };

  return (
    <Fragment>
      <canvas ref={canvasCallback} className="chart p-2" />
    </Fragment>
  );
}

export default ChartSample;
