const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); // Додайте цей рядок

const app = express();

app.use(express.json());

// Розміщення статичного контенту
app.use(express.static(path.join(__dirname, 'public')));

// Ваші існуючі маршрути CRUD і обробники помилок тут...

const startServer = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mydatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected...');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

startServer();
