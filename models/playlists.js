const connectDb = require('../config/db');

const addPlaylist = async (playlist) => {
    const db = await connectDb();
    const playlists = db.collection('playlists');
    const result = await playlists.insertOne(playlist);
    return result;
};

const getAllPlaylists = async () => {
    const db = await connectDb();
    const playlists = db.collection('playlists');
    return await playlists.find().toArray();
};

const getPlaylistByName = async (name) => {
    const db = await connectDb();
    const playlists = db.collection('playlists');
    return await playlists.findOne({ _id: name });
};

const updatePlaylist = async (name, playlistData) => {
    const db = await connectDb();
    const playlists = db.collection('playlists');
    return await playlists.updateOne({ _id: name }, { $set: playlistData });
};

const deletePlaylist = async (name) => {
    const db = await connectDb();
    const playlists = db.collection('playlists');
    return await playlists.deleteOne({ _id: name });
};

module.exports = { addPlaylist, getAllPlaylists, getPlaylistByName, updatePlaylist, deletePlaylist };
