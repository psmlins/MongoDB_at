var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Loja";

MongoClient.connect(url, function(erro, db) {
  if (erro) throw erro;
  console.log("Banco criado!");
  db.close();
});