const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//Define schema 
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true});


//Method to compare password during login 
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

//Hash password BEFORE saving the USER DATA
userSchema.pre('save', async function(next) {
    // Only hash the password if it has been modified
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})



//Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;