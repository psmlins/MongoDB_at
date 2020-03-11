var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(erro, db) {
  if (erro) throw erro;
  var dbo = db.db("Loja");
  dbo.collection("produtos").find({}).toArray(function(erro, resultado) {
    if (erro) throw erro;
    console.log(resultado);
    db.close();
  });
});