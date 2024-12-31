import express from 'express';
import mongoose from 'mongoose';
import messageRouter from './routes/message.js'

const app = express();

// Middleware to handle JSON requests
app.use(express.json());

// Connect to MongoDB
const MONGO_URI = 'mongodb+srv://zaheerahmadlangrial92:SObPxVETDvhTxoQq@cluster0.c63hk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Update with your MongoDB URI
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use the message router
app.use('/api/message', messageRouter);

// Start the server and listen on port 5000
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
