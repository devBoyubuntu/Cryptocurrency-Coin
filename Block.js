const crypto = require("crypto");

const Block = (data) => {
    const block = new Object();
    block.data = data;
    block.timestamp = Date.now();
    block.hash = () => {
        let value = block.oldHash + block.timestamp + JSON.stringify(block.data);
        return crypto.createHash("sha256").update(value).digest("hex");
    };
    block.newHash = block.hash();
    block.oldHash;
    return block;
};

module.exports = Block;
