const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

const articleRoutes = require("./routes/articleRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/api/articles", articleRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on ${port}`));
