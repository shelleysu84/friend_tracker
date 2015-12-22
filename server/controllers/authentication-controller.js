/**
 * Created by shell_000 on 12/19/2015.
 */
var mongoose = require('mongoose');
var User = require('../datasets/users');

module.exports.signup = function (req, res) {
    console.log(req.body);
    var user = new User(req.body);
    user.save();
    res.json(req.body);
};

module.exports.login = function (req, res) {
    User.find(req.body, function (err, results) {
        if(err){
            console.log("error out");
        }
        if(results && results.length === 1){
            var userData = results[0];
            console.log(userData.email + " his/her ID is " + userData._id);
            res.json({email: req.body.email,
                     _id : userData._id,
                     username : userData.username,
                     image : userData.image,
                     bio : userData.bio,
                     following : userData.following,
                     follower: userData.follower
            });
        }
    });
};