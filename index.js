const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const databaseConnection = require("./config/db.connection");

const routes = require("./routes/routes");

app.use(express.json());

// database connection

databaseConnection.connectDB();

// routes
app.use("/api/v1", routes);
app.listen(PORT, () => {
    
  console.log("server is running");
});

app.get("/", (req, res) => {
  
  res.send("<h1>DEFAULT ROUTE - whomimohshukla</h1>");
});
