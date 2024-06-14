import "../output.css"; 
import { useForm } from "react-hook-form";
import List from "./List"; 

export default function Form() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    
    reset(); 
  };

  return (
    <div className="max-w-sm mx-auto w-96 text-base">
    
      <h1 className="font-bold pb-4 text-xl">Transaction</h1>
      
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div>
            <input
              type="text"
              {...register('transactionDescription', { required: true })}
              placeholder="Enter your Transaction Details here"
              className="w-full outline-none px-2 py-2 border border-gray-300 rounded"
            />
            {errors.transactionDescription && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div>
            <select
              className="px-2 py-2 w-full border border-gray-300 rounded"
              {...register('transactionType', { required: true })}
            >
              <option value="investment">Investment</option>
              <option value="expense">Expense</option>
              <option value="saving">Saving</option>
            </select>
            {errors.transactionType && (
              <span className="text-red-500">Please select a type</span>
            )}
          </div>
          <div>
            <input
              type="number"
              {...register('transactionAmount', { required: true, min: 1 })}
              className="px-2 py-2 w-full border border-gray-300 rounded"
              placeholder="Enter Transaction amount here"
            />
            {errors.transactionAmount && (
              <span className="text-red-500">Please enter a valid amount</span>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <List /> {/* Ensure List component is correctly implemented */}
    </div>
  );
}
