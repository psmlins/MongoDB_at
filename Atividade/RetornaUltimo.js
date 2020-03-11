var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(erro, db) {
  if (erro) throw erro;
  var dbo = db.db("Loja");
  dbo.collection("produtos").findOne({}, function(erro, result) {
    if (erro) throw erro;
    console.log(result.Nome);
    db.close();
  });
});

//find().limit(1).sort({$natural:-1})