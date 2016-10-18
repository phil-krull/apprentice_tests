var deepPopulate = require('mongoose-deep-populate')(mongoose);

var photoSchema = new mongoose.Schema({
  img: {type: String, required: true},
  _user: {type: Schema.Types.ObjectId, ref: 'user'},
  _subject: {type: Schema.Types.ObjectId, ref: 'subject', required: true},
  likes: [{type: Schema.Types.ObjectId, ref: 'user'}]
}, {timestamps: true});

mongoose.model('photo', photoSchema);

photoSchema.plugin(deepPopulate);