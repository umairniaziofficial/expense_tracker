import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Labels from "./Labels";
import { chart_Data, getTotal } from "../helper/helper";
import { default as api } from "../store/apiSlice";

export default function Graph() {
  Chart.register(ArcElement);
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  let graphData;
  if (isFetching) {
    graphData = <div>Fetching</div>;
  } else if (isSuccess) {
    graphData = <Doughnut {...chart_Data(data)}></Doughnut>;
  } else if (isError) {
    graphData = <div>Error</div>;
  }

  return (
    <div className="flex items-center flex-col justify-center max-w-xs mx-auto">
      <div className="relative w-full h-full">
        {graphData}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h3 className="font-bold text-2xl">
            Total
            <div className="text-emerald-400 text-center text-3xl">
              ${getTotal(data) ?? 0}$
            </div>
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-6 py-10 w-full">
        <Labels />
      </div>
    </div>
  );
}
