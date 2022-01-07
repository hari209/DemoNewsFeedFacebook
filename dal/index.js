const { MongoClient } = require("mongodb");

const client = new MongoClient('mongodb+srv://hoanghai:hoanghai123456@fbtest.ja1kb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect(err => {
    if(err){
        console.error(err);
        process.exit(-1);
    }
    console.log("Kết nối Mongodb thành công");
})

module.exports = client;