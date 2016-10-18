var mongoose = require('mongoose');
var quote = mongoose.model('quotes');

module.exports = {

  index: function(req, res){
    quote.find({}, function(errors, quotes){
      res.render('index', {quotes: quotes})
    })
  },

  create: function(req, res){
    var newQuote = new quote(req.body);
    newQuote.save(function(errors){
      if(errors){
        console.log(errors);
      } else {
        res.redirect('/');
      }
    })
  }, 

  show: function(req, res){
    quote.findOne({_id: req.params.id}, function(errors, quote){
      if(errors){
        console.log(errors);
      } else {
        res.render('edit', {quote: quote});
      }
    })
  },

  update: function(req, res){
    quote.update({_id: req.params.id}, req.body, function(errors){
      if(errors){
        console.log(errors);
      } else {
        res.redirect('/');
      }
    })
  },

  delete: function(req, res){
    quote.remove({_id: req.params.id}, function(errors){
      if(errors){
        console.log(errors);
      } else {
        res.redirect('/');
      }
    })
  }

}