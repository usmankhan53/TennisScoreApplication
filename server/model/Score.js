const mongo = require("mongoose");

const gameSchema = new mongo.Schema({

    playerOneName: String,
    playerTwoName: String,
    playerOnegameOneScore: Number,
    playerTwogameOneScore: Number, 
    playerOnegameTwoScore: Number,
    playerTwogameTwoScore: Number, 
    playerOnegameThirdScore: Number,
    playerTwogameThirdScore: Number, 
  


})

var GameSummary = mongo.model('GameSummary',gameSchema)

module.exports = GameSummary;