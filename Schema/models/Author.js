var mongoose = require("mongoose")

var authorSchema = new mongoose.Schema({
    author: {
        id: {
            type: Schema.Types.ObjectId,
            ref: "Users",
        },
        username: {
            type: String,
            require: true,
        }
    }
})

module.exports = mongoose.model("Authors", authorSchema)