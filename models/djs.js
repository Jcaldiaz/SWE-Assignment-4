const connectDb = require('../config/db');

const addDJ = async (dj) => {
    const db = await connectDb();
    const djs = db.collection('djs');
    const result = await djs.insertOne(dj);
    return result;
};

const getAllDJs = async () => {
    const db = await connectDb();
    const djs = db.collection('djs');
    return await djs.find().toArray();
};

const getDJByName = async (name) => {
    const db = await connectDb();
    const djs = db.collection('djs');
    return await djs.findOne({ _id: name });
};

const updateDJ = async (name, djData) => {
    const db = await connectDb();
    const djs = db.collection('djs');
    return await djs.updateOne({ _id: name }, { $set: djData });
};

const deleteDJ = async (name) => {
    const db = await connectDb();
    const djs = db.collection('djs');
    return await djs.deleteOne({ _id: name });
};

module.exports = { addDJ, getAllDJs, getDJByName, updateDJ, deleteDJ };
