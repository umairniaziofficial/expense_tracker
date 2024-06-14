import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Labels from "./Labels";
export default function Graph() {
  Chart.register(ArcElement);

  const config = {
    data: {
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
          borderRadius: 30,
          spacing: 10,
        },
      ],
    },
    options: {
      cutout: 115,
    },
  };

  return (
    <div className="flex items-center flex-col justify-center max-w-xs mx-auto">
      <div className="relative w-full h-full">
        <Doughnut {...config} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h3 className="font-bold text-2xl">
            Total
            <div className="text-emerald-400 text-center text-3xl">100$</div>
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-6 py-10 w-full">
        <Labels />
      </div>
    </div>
  );
}
