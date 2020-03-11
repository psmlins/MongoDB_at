var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(erro, db) {
  if (erro) throw erro;
  var dbo = db.db("Loja");
  dbo.createCollection("produtos", function(erro, res) {
    if (erro) throw erro;
    console.log("Coleção criada!");
    db.close();
  });
});