const Song = require('../models/food.model')


const getSongs = async(req, res) => {
    console.log('get de songs');
    try {
        const songs = await Song.find();
        return res.status(200).json(songs);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postSongs = async(req, res) => {
    try {
        const newSong = new Song(req.body);
        const createdSong = await newSong.save();
        return res.status(201).json(createdSong);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putSongs = async(req, res) => {
    try {
        const {id} = req.params;
        const putSong = new Song(req.body);
        putSong._id = id;
        
        const updatedSong = await Song.findByIdAndUpdate(id, putSong, {new: true});
        return res.status(200).json(updatedSong);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteSongs = async(req, res) => {
    try {
        const {id} = req.params;
        const deletedSong = await Song.findByIdAndDelete(id);
        if(deletedSong){
            return res.status(200).json(deletedSong);
        }else{
            return res.status(404).send({code:404,message:"song not found to delete"});
        }
        
    } catch (error) {
        
    }
}


module.exports = {getSongs, postSongs, putSongs, deleteSongs}