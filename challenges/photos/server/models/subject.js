var subjectSchema = new mongoose.Schema({
  name: String
}, {timestamps: true})

mongoose.model('subject', subjectSchema);