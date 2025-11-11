require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todos');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// health
app.get('/', (req, res) => res.json({ status: 'ok', ts: Date.now() }));

// routes
app.use('/api/todos', todoRoutes);

// error handler (last)
app.use(errorHandler);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to start server', err);
    process.exit(1);
  });
