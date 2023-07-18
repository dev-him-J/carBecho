const { MongoClient, ServerApiVersion } = require("mongodb");

// const uri = process.env.MONGO_URI;
const client = new MongoClient("mongodb+srv://jhahimanshu966:r60NssUKoV98Qmu6@cluster0.cxjklte.mongodb.net/carKhareedo", {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

module.exports = client;
