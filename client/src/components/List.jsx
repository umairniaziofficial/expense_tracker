import { default as api } from "../store/apiSlice";

export default function List() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  const [deleteTransaction] = api.useDeleteTransactionMutation();

  const handleClick = async (transactionId) => {
    try {
      await deleteTransaction({ id: transactionId }); 
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };
  

  if (isFetching) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">An error occurred.</p>;
  }

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {isSuccess && data && data.length > 0 ? (
        data.map((transaction) => (
          <div
            key={transaction._id} 
            className="item flex justify-center bg-gray-50 py-2 rounded-r"
            style={{ borderRight: `8px solid ${transaction.category_info.color}` }}
          >
            <i
              className="fa-solid fa-trash px-3 cursor-pointer"
              style={{ color: `${transaction.category_info.color}` }}
              onClick={() => handleClick(transaction._id)}
            ></i>
            <span className="block w-full text-center">{transaction.name}</span>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No data available</p>
      )}
    </div>
  );
}
