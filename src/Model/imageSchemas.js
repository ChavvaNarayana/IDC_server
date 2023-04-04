const mongoose = require('mongoose');
const imageSchema = mongoose.Schema({
    name: { type: String, required: true },
    photo: { type: String, require:true },
});

module.exports = mongoose.model("images", imageSchema);