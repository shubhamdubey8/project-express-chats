const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from : {
        type: String,
        required: true
    },
    to:{
        type:String
    },
    msg:{
        type:String,
        maxLength: 50
    },
    created_at:{
        type: Date,
        required: true,
    },
});

const chat = mongoose.model("chst", chatSchema);

module.exports = chat;