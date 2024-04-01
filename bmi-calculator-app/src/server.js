
const express = require('express');
const debug = require('debug');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const User = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://logicpulseadmin:bINelQr8up7Or1iO@cluster0.j1d4i1o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("connected to database");
  })
  .catch(() => {
    console.log("error connecting to database");
  });



app.post('/api/users', async (req, res) => {
  try {
    const { name, age, weight, height } = req.body;
    const bmi = calculateBMI(weight, height);
    const user = new User({ name, age, weight, height, bmi });
    await user.save();
    res.json({ bmi });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

function calculateBMI(weight, height) {
  return (weight / (height * height)).toFixed(2);
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
