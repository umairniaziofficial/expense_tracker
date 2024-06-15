import { default as api } from "../store/apiSlice";

export default function Labels() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();

  if (isFetching) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">An error occurred.</p>;
  }

  // If data fetching was successful and data exists
  if (isSuccess && data && data.length > 0) {
    return (
      <div className="w-full">
        {data.map((item, index) => (
          <LabelComponent
            key={index} 
            color={item.category_info.color || "#000"} 
            type={item.category_info.type}
            percentage={item.percent}
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
        <h3 className="font-bold">{percentage? percentage : '0%'}</h3>
      </div>
    </div>
  );
}
