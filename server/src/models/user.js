const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  phoneNumber: String, // String is shorthand for {type: String}
  email: String,
  address: String,
  role: {
    type:String,
    enum:['user','admin'],
    default:'user'
  },
  password: String
});
const User = mongoose.model('User', userSchema);
module.exports = User