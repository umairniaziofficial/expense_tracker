export default function Labels() {
    const obj = [
      {
        color: "bg-custom-yellow",
        type: "Savings",
        percentage: "100%",
      },
      {
        color: "bg-custom-purple",
        type: "Investments",
        percentage: "50%",
      },
      {
        color: " bg-red-500",
        type: "Expense",
        percentage: "60%",
      },
    ];
  
    return (
      <div className="w-full">
        {obj.length > 0 ? (
          obj.map((item, index) => (
            <LabelComponent
              key={index}
              color={item.color}
              type={item.type}
              percentage={item.percentage}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No data available</p>
        )}
      </div>
    );
  }
  
  // eslint-disable-next-line react/prop-types
  function LabelComponent({ color, type, percentage }) {
    return (
      <div className="flex text-base w-full justify-between items-center mb-4">
        <div className="flex gap-2 items-center">
          <div className={`h-4 w-4 rounded ${color}`}></div>
          <h3>{type}</h3>
        </div>
        <div>
          <h3 className="font-bold">{percentage}</h3>
        </div>
      </div>
    );
  }
  