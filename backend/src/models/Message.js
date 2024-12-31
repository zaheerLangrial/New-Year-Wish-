import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Define the schema for the Message model
const messageSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    msg: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create and export the model
const Message = model('Message', messageSchema);

export default Message;
