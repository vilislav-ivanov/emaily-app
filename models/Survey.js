const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const surveySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  recipients: {
    type: [
      {
        email: {
          type: String,
          required: true,
        },
        responded: {
          type: Boolean,
          default: false,
        },
      },
    ],
    default: [],
  },
  yes: {
    type: Number,
    default: 0,
  },
  no: {
    type: Number,
    default: 0,
  },
  dateSent: {
    type: Date,
    default: Date.now(),
  },
  lastResponded: {
    type: Date,
  },
});

mongoose.model('Survey', surveySchema);
