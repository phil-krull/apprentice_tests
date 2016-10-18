var Subject = mongoose.model('subject');

module.exports = {

  index: function(req, res){
    Subject.find({}, function(errors, subjects){
      if(errors){
        res.send(errors);
      } else {
        res.json(subjects);
      }
    })
  }
}