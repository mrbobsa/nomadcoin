 class Block {
    constructor (index, hash, previousHash, timestamp, data){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
    }
 }
 const genesisBlock = new Block(
     0,
     "37B50D0DCEB1FA3D764A8F2DC3C0CC657C03C37E92D91B4F9CE1E56598A3AB87",
     null,
     1520779464701,
     "This is the Genesis!!" 
 );

 let blockchain = [genesisBlock];

console.log(blockchain);