require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI.replace("<PASSWORD>", process.env.DB_PASSWORD);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

connectDB();

module.exports = client;
