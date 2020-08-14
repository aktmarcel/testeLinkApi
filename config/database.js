
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://pedro:1q2w3e4r@cluster0.bm2vk.mongodb.net/linkapi-test?retryWrites=true&w=majority";
const mongo = new MongoClient(uri, { useUnifiedTopology: true });

module.exports = mongo;
