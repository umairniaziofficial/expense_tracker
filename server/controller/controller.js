const Category = require("../models/model").Categories;
const Transaction = require("../models/model").Transaction;

// Create a new category
async function createCategory(req, res) {
  try {
    const newCategory = new Category({
      type: req.body.type,
      color: req.body.color,
    });

    const savedCategory = await newCategory.save();

    res.status(201).json(savedCategory);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ error: "Failed to create category" });
  }
}

// Fetch all categories
async function getCategories(req, res) {
  try {
    const categories = await Category.find();
    const filteredCategories = categories.map((category) => ({
      type: category.type,
      color: category.color,
    }));

    res.status(200).json(filteredCategories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
}

// Delete a specific category by ID
async function deleteCategory(req, res) {
  try {
    const categoryId = req.params.id;
    const deletedCategory = await Category.findByIdAndDelete(categoryId);

    if (!deletedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ error: "Failed to delete category" });
  }
}

// Create a new transaction
async function createTransaction(req, res) {
  try {
    const { name, type, amount } = req.body;

    const newTransaction = new Transaction({
      name: name,
      type: type,
      amount: amount,
    });

    const savedTransaction = await newTransaction.save();

    res.status(201).json(savedTransaction);
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({ error: "Failed to create transaction" });
  }
}

// Fetch all transactions
async function getTransactions(req, res) {
  try {
    const transactions = await Transaction.find();
    const filteredTransactions = transactions.map((transaction) => ({
      name: transaction.name,
      type: transaction.type,
      amount: transaction.amount,
    }));

    res.status(200).json(filteredTransactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
}

// Delete a specific transaction by ID
async function deleteTransaction(req, res) {
  try {
    const transactionId = req.params.id;
    const deletedTransaction = await Transaction.findByIdAndDelete(transactionId);

    if (!deletedTransaction) {
      return res.status(404).json({ error: "Transaction not found" });
    }

    res.status(200).json({ message: "Transaction deleted successfully" });
  } catch (error) {
    console.error("Error deleting transaction:", error);
    res.status(500).json({ error: "Failed to delete transaction" });
  }
}

async function getLabels(req, res) {
  try {
    const result = await Transaction.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "type",
          foreignField: "type",
          as: "category_info"
        }
      },
      {
        $unwind: "$category_info"
      }
    ]);

    res.json(result);
  } catch (error) {
    console.error("Lookup collection failed:", error);
    res.status(400).json({ error: "Failed to perform lookup" });
  }
}

module.exports = {
  createCategory,
  getCategories,
  deleteCategory,
  createTransaction,
  getTransactions,
  deleteTransaction,
  getLabels
};
