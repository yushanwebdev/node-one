import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev")); // logging
app.use(express.json()); // body parser

const db = [];

app.post("/todo", (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
  };

  db.push(newTodo);

  res.status(201).json(newTodo);
});

app.get("/todo", (_, res) => {
  res.json(db);
});

app.listen(8000, () => {
  console.log("Server on http://localhost:8000");
});
