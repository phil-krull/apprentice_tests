var mongoose = require('mongoose');
var timestamp = require('mongoose-timestamp');

var quoteSchema = new mongoose.Schema({
  name: String,
  quote: String
})

quoteSchema.plugin(timestamp);

mongoose.model('quotes', quoteSchema);