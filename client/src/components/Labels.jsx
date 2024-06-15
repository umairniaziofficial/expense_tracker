import { default as api } from "../store/apiSlice";
import { getLabels } from "../helper/helper"; 

export default function Labels() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();

  if (isFetching) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">An error occurred.</p>;
  }

  
  if (isSuccess && data && data.length > 0) {
    const labeledData = getLabels(data); 
    return (
      <div className="w-full">
        {labeledData.map((item, index) => (
          <LabelComponent
            key={index} 
            color={item.color || "#000"} 
            type={item.type}
            percentage={item.percent.toFixed(2) + '%'} 
          />
        ))}
      </div>
    );
  }

  return <p className="text-center text-gray-500">No data available</p>;
}


// eslint-disable-next-line react/prop-types
function LabelComponent({ color, type, percentage }) {
  return (
    <div className="flex text-base w-full justify-between items-center mb-4">
      <div className="flex gap-2 items-center">
        <div className="h-4 w-4 rounded" style={{ backgroundColor: color }}></div>
        <h3>{type}</h3>
      </div>
      <div>
        <h3 className="font-bold">{parseFloat(percentage).toFixed(0)}%</h3>
      </div>
    </div>
  );
}
