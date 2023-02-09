const Blockchain = require("./Blockchain");
const Block = require("./Block");

const blockchain = Blockchain();
blockchain.add(Block({ from: "Adam", to: "Eve" }));
blockchain.add(Block({ from: "Eve", to: "Adam" }));
console.log(blockchain);
console.log(blockchain.validation());