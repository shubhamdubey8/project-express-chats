const mongoose = require("mongoose");

// Define the schema for the chat messages
const chatSchema = new mongoose.Schema({
    from: String,
    to: String,
    message: String,
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Define the model for the chat messages
const Chat = mongoose.model("Chat", chatSchema);

main()
    .then(() => {
        console.log("Connection successful");
        // Now that the connection is successful, you can insert data into the database
        insertChats();
    })
    .catch((err) => console.error("Connection error:", err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp', { useNewUrlParser: true, useUnifiedTopology: true });
}

async function insertChats() {
    let allChats = [
        {
            from: "neha",
            to: "preeti",
            message: "send me notes for the exam",
            created_at: new Date(),
        },
        {
            from: "sumit",
            to: "sachin",
            message: "call me",
            created_at: new Date(),
        },
        {
            from: "anil",
            to: "shubham",
            message: "always happy",
            created_at: new Date(),
        },
    ];

    try {
        // Insert all chat messages into the database
        await Chat.insertMany(allChats);
        console.log("Chats inserted successfully");
    } catch (error) {
        console.error("Error inserting chats:", error);
    }
}
