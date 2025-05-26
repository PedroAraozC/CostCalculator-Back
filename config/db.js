const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://pedroaraozdev:Pedro98Araoz@costcalculator.byc3lzh.mongodb.net/?retryWrites=true&w=majority&appName=CostCalculator";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToMongo() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Connection error:", err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
module.exports = { client, connectToMongo };
