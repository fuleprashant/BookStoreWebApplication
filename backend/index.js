import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
// console.log(app);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`the server run on the port number http://localhost:${port}`);
});

export default app;
