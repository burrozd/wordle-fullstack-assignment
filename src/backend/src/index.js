import express from "express";

const app = express();
app.use(express.json());
app.use(express.static("../frontend/build"));

// Domain objects:
// * Task

// Resources
// * /highscore (GET to retrieve, POST to create)
// * /highscore/ID (PATCH to update, DELETE to remove)

const fakeTaskDatabase = [];

app.get("/tasks", (req, res) => {
  res.status(200).json({
    data: fakeTaskDatabase,
  });
});

app.post("/tasks", (req, res) => {
  // TODO: Check that req.body is correctly formatted
  fakeTaskDatabase.push(req.body);
  res.status(201).json({ data: req.body });
});

app.listen(5080);
