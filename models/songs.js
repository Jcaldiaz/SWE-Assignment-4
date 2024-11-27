const { ObjectId } = require('mongodb');
const connectDb = require('../config/db');

const addSong = async (song) => {
    const db = await connectDb();
    const songs = db.collection('songs');
    const result = await songs.insertOne(song);
    return result;
};

const getAllSongs = async () => {
    const db = await connectDb();
    const songs = db.collection('songs');
    return await songs.find().toArray();
};

const getSongById = async (id) => {
    const db = await connectDb();
    const songs = db.collection('songs');
    return await songs.findOne({ _id: ObjectId(id) });
};

const updateSong = async (id, songData) => {
    const db = await connectDb();
    const songs = db.collection('songs');
    return await songs.updateOne({ _id: ObjectId(id) }, { $set: songData });
};

const deleteSong = async (id) => {
    const db = await connectDb();
    const songs = db.collection('songs');
    return await songs.deleteOne({ _id: ObjectId(id) });
};

module.exports = { addSong, getAllSongs, getSongById, updateSong, deleteSong };
