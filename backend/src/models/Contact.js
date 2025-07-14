const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
  name: String,
  number: String,
  tags: [String],
  status: { type: String, enum: ['ativo', 'inativo', 'pendente'] },
  lastMessage: Date,
  history: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
});
module.exports = mongoose.model('Contact', ContactSchema);