var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
  },
  summary: {
    type: String,
  },
  comment:[{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
  
});

var Article = mongoose.model("article", ArticleSchema);

module.exports = Article;