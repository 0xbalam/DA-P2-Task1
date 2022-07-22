import mongoose, { Schema } from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: String,
    membership: String,
    summary: String,
    languages: String,
    miscellenous: String
})

module.exports = mongoose.model.User || mongoose.model('User', UserSchema)