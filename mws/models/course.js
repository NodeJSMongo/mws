var mongoose = require("mongoose");
var courseSchema = new mongoose.Schema({
  name:String,
  image: String,
  description:String,
  author:{
    id:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
    username:String
  },
  tutorials:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Tutorial"
    }
  ]
});

module.exports = mongoose.model("Course",courseSchema);
