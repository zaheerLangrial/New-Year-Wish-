import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

// Route to save a message
router.post('/', async (req, res) => {
  const { userId, msg } = req.body;

  try {
    const newMessage = new Message({ userId, msg });
    await newMessage.save();
    res.status(201).json({ message: 'Message saved successfully', data: newMessage });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save message', details: error.message });
  }
});

// Route to get a message by userId
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
  
    try {
      const message = await Message.findOne({ userId });
      if (message) {
        res.status(200).json(message);
      } else {
        res.status(404).json({ error: 'Message not found for this userId' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch message', details: error.message });
    }
  });

export default router;
