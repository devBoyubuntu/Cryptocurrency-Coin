const Block = require("./Block")

const Blockchain = () => {
    const blockchain = new Object();
    blockchain.initiate = () => Block({});
    blockchain.get = () => blockchain.array[blockchain.array.length - 1];
    blockchain.add = (block) => {
        block.oldHash = blockchain.get().newHash;
        block.newHash = block.hash();
        blockchain.array.push(block);
        return blockchain;
    };
    blockchain.validation = () => {
        for (let index = 1; index < blockchain.array.length; index++) {
            const newBlock = blockchain.array[index];
            const oldBlock = blockchain.array[index - 1];
            if (newBlock.newHash !== newBlock.hash()) return false;
            if (newBlock.oldHash !== oldBlock.newHash) return false;
        }
        return true;
    };
    blockchain.array = [blockchain.initiate()];
    return blockchain;
};

module.exports = Blockchain;