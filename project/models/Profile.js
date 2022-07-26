import mongoose from 'mongoose'

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const ProfileSchema = new Schema({
    username: String,
    profession: String,
    blockchains: String,
    membership: String,
    summary: String
})

module.exports = mongoose.models['Profile'] || mongoose.model('Profile', ProfileSchema)