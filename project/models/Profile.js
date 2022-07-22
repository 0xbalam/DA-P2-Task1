import mongoose from 'mongoose'

const ProfileSchema = new mongoose.Schema({
    username: String,
    profession: String,
    blockchains: String,
    membership: String,
    summary: String,
    languages: String,
    miscellenous: String
})

module.exports = mongoose.model.User || mongoose.model('Profile', ProfileSchema)