/**
 * Created by shell_000 on 12/18/2015.
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    email : String,
    username : String,
    password : String,
    image : String,
    bio : String,
    following: [{userId: String}],
    follower : [{userId: String}]
});