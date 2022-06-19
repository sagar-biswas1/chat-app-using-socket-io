const MessageModel = require("../models/MessageModel");

const addMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;
  const message = new MessageModel({
    chatId,
    senderId,
    text,
  });

  try {
    const result = await message.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getMessages = async (req, res) => {
  const { chatId } = req.params;
  console.log(chatId)
  try {
    const messages = await MessageModel.find({ chatId });
    console.log(messages)
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getMessages, addMessage };
