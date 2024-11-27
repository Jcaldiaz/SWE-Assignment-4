const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const dbName = "radioDB";
let db;

const connectDb = async () => {
    try {
        if (db) return db;
        const client = new MongoClient(uri, { useUnifiedTopology: true });
        await client.connect();
        db = client.db(dbName);
        console.log("MongoDB Connected successfully");
        return db;
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};

module.exports = connectDb;
