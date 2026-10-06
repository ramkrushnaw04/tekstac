require("dotenv").config();

const express = require("express");
const cars = require("./cars");

const app = express();

app.use(express.json());

// GET - Read all cars
app.get("/read", (req, res) => {
  res.json(cars);
});

// POST - Insert a new car
app.post("/insert", (req, res) => {
  const { name, id } = req.body;

  const newCar = {
    name,
    id,
  };

  cars.push(newCar);

  res.json(cars);
});

// PUT - Update car
app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const { name } = req.body;

  const car = cars.find((car) => car.id === id);

  if (!car) {
    return res.status(404).json({
      message: "Car not found",
    });
  }

  car.name = name;

  res.json(cars);
});

// DELETE - Delete car
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  const index = cars.findIndex((car) => car.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Car not found",
    });
  }

  cars.splice(index, 1);

  res.json(cars);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
