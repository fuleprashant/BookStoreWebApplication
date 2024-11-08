import express from "express";
import dotenv from "dotenv";
import db from "./database/db.js";
import cors from "cors";
import { getBook } from "./controllers/book.controllers.js";
import { signUp } from "./controllers/user.controllers.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
// console.log(app);

const port = process.env.PORT;

db();
// app.get("/", (req, res) => {
//   res.send("the server has been start o");
// });
app.use("/book", getBook);
app.use("/user", signUp);
app.listen(port, () => {
  console.log(`the server run on the port number http://localhost:${port}`);
});

export default app;
