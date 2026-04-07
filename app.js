import express from "express";
const app = express();

app.use(express.json());

app.use("/api/v1", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the API",
  });
});

app.listen(3000, () => {
  console.log;
});
