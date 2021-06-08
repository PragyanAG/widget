const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for UserFeedback
let UserFeedback = new Schema({
  feedbackLabel: {
    type: String
  },
  feedbackPlaceholder: {
    type: String
  }
},{
    collection: 'userFeedback'
});

module.exports = mongoose.model('UserFeedback', UserFeedback);