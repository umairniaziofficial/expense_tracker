const mongoose = require("mongoose");

// Define the schema for categories
const categorySchema = new mongoose.Schema({
  type: {
    type: String,
    default:"Investment",
    required: true,
  },
  color: {
    type: String,
    default:"#fcbe44",
    required: true,
  },
});

// Define the schema for transactions
const transactionSchema = new mongoose.Schema({
  name: {
    type: String,
    default:"Anoymous",
    required: true,
  },
  type: {
    type: String,
    required: true,
    default:"Investment",
    enum: ["Investment", "Expense", "Saving"], 
  },
  amount: {
    type: Number,
    required: true,
  },
});

const Categories = mongoose.model("Category", categorySchema);
const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = { Categories, Transaction };
