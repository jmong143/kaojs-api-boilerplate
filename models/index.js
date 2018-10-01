var mongoose =  require('mongoose');
var Schema = mongoose.Schema;
var indexSchema = new Schema({
  name           : {type : String},
  location           : {type : String},
  createdAt          : {type : Date, default: Date.now},
  updatedAt          : {type : Date, default: Date.now}
});

var index = mongoose.model('index', indexSchema);
module.exports = index;