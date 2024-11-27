const connectDb = require('../config/db');

const addDJPlaylist = async (djPlaylist) => {
    const db = await connectDb();
    const djPlaylistCollection = db.collection('dj_playlist');
    const result = await djPlaylistCollection.insertOne(djPlaylist);
    return result;
};

const getDJPlaylistByDJ = async (djName) => {
    const db = await connectDb();
    const djPlaylistCollection = db.collection('dj_playlist');
    return await djPlaylistCollection.find({ dj: djName }).toArray();
};

const getDJPlaylistByPlaylist = async (playlistName) => {
    const db = await connectDb();
    const djPlaylistCollection = db.collection('dj_playlist');
    return await djPlaylistCollection.find({ playlist: playlistName }).toArray();
};

const updateDJPlaylist = async (id, djPlaylistData) => {
    const db = await connectDb();
    const djPlaylistCollection = db.collection('dj_playlist');
    return await djPlaylistCollection.updateOne({ _id: ObjectId(id) }, { $set: djPlaylistData });
};

const deleteDJPlaylist = async (id) => {
    const db = await connectDb();
    const djPlaylistCollection = db.collection('dj_playlist');
    return await djPlaylistCollection.deleteOne({ _id: ObjectId(id) });
};

module.exports = { addDJPlaylist, getDJPlaylistByDJ, getDJPlaylistByPlaylist, updateDJPlaylist, deleteDJPlaylist };
