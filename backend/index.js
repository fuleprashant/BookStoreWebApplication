import express from "express";
import dotenv from "dotenv";
import db from "./database/db.js";
import cors from "cors";
import userRouter from "./routes/user.route.js"; // Import your user router
import bookRouter from "./routes/book.route.js";
import path from "path";
const app = express();
const _dirname = path.resolve();
app.use(cors());

app.use(express.json());

dotenv.config();

const port = process.env.PORT;

db();
// app.get("/", (req, res) => {
//   res.send("the server has been start o");
// });
app.use("/book", bookRouter);
app.use("/user", userRouter);

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get("*", (_, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});
app.listen(port, () => {
  console.log(`the server run on the port number http://localhost:${port}`);
});

export default app;
