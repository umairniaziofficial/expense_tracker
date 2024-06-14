export default function List() {
  // Sample data for transactions
  const transactions = [
    { id: 1, category: "Investment", color: "purple" },
    { id: 2, category: "Expense", color: "red" },
    { id: 3, category: "Saving", color: "yellow" },
  ];

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {transactions.map((transaction) => (
        <Transaction
          key={transaction.id}
          category={transaction.category}
          color={transaction.color}
        />
      ))}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Transaction({ category, color }) {
  if (!category) return null;

  // Define a mapping from color names to Tailwind classes
  const colorClasses = {
    purple: "border-purple-500",
    red: "border-red-500",
    yellow: "border-yellow-500",
  };

  return (
    <div
      className={`item flex justify-center bg-gray-50 py-2 rounded-r border-r-8 ${colorClasses[color]}`}
    >
      <i className="fa-solid fa-trash px-3 cursor-pointer text-gray-600"></i>
      <span className="block w-full text-center">{category}</span>
    </div>
  );
}
