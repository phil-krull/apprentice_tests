var deepPopulate = require('mongoose-deep-populate')(mongoose);

var validateEmail = function(email){
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}

var userSchema = new mongoose.Schema({
  first_name: {type: String, required: [true, "Its weird you don't have a first name"], minlength: [2, 'Your name is too short']},
  last_name: {type: String, required: [true,"I tought everyone had a last name"], minlength: [2, 'Your name is too short']},
  email: {type: String, required: [true, "Email is required"], validate: validateEmail},
  password: {type: String, required: [true, "Password is required"]},
  photos: [{type: Schema.Types.ObjectId, ref: 'photo'}]
}, {timestamps: true});

userSchema.pre('save', function(done){
  var self = this;
  if(this.isNew){
    if(self.password){
      bcrypt.genSalt(8, function(errors, salt){
        bcrypt.hash(self.password, salt, function(errors, hash){
          self.password = hash;
          done();
        })
      })
    }
  } else {
    done()
  }
})

userSchema.methods.validatePassword = function(password){
  return bcrypt.compareSync(password, this.password);
}

mongoose.model('user', userSchema);

userSchema.plugin(deepPopulate);