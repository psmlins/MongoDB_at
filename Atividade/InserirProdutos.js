var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(erro, db) {
  if (erro) throw erro;
  var dbo = db.db("Loja");
  var produtos = [
    { Nome: 'Produto-1', Preco: 'R$20,00', Quantidade: '5'},
    { Nome: 'Produto-2', Preco: 'R$29,00', Quantidade: '6'},
    { Nome: 'Produto-3', Preco: 'R$37,00', Quantidade: '61'},
    { Nome: 'Produto-4', Preco: 'R$45,00', Quantidade: '21'},
    { Nome: 'Produto-5', Preco: 'R$19,00', Quantidade: '34'}
  ];
  dbo.collection("produtos").insertMany(produtos, function(erro, res) {
    if (erro) throw erro;
    console.log("Numero de produtos inseridos: " + res.insertedCount);
    db.close();
  });
});