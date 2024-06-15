const express = require("express");
const routes = express.Router();
const controller = require("../controller/controller");

// Categories routes
routes.route("/api/categories")
  .get(controller.getCategories)
  .post(controller.createCategory)
  .delete(controller.deleteCategory);

// Transactions routes
routes.route("/api/transactions")
  .get(controller.getTransactions)
  .post(controller.createTransaction)
  .delete(controller.deleteTransaction);

// Add labels route
routes.route("/api/labels")
  .get(controller.getLabels);

module.exports = routes;
