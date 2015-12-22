/**
 * Created by shell_000 on 12/20/2015.
 */
var mongoose = require('mongoose');
module.exports = mongoose.model('Status',{
    user : String,
    userId : String,
    userImage: String,
    content : String,
    bio : String,
    date : {type: Date, default : Date.now}
});