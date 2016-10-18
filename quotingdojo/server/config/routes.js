var Quote = require('./../controllers/quotes.js');

module.exports = function(app){

  app.get('/', function(req, res){
    Quote.index(req, res);
  })

  app.get('/quotes', function(req, res){
    res.render('new');
  })

  app.get('/quotes/edit/:id', function(req, res){
    Quote.show(req, res)
  })

  app.post('/quotes', function(req, res){
    Quote.create(req, res);
  })

  app.post('/quotes/update/:id', function(req, res){
    req.body.createdAt = Date.now();
    Quote.update(req, res);
  })

  app.post('/quotes/:id', function(req, res){
    Quote.delete(req, res);
  })


}