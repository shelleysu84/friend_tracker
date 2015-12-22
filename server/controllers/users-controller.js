/**
 * Created by shell_000 on 12/21/2015.
 */
var Users = require('../datasets/users');
module.exports.getUsers = function(req, res){
    Users.find({}, function(err, usersData){
        if(err){
            res.error(err);
        }else{
            res.json(usersData);
            console.log(usersData);
        }
    })
}

module.exports.followUser = function(req, res){
    var userId = req.body.userId,
        othersId = req.body.othersId;
    console.log("this is the others ", othersId);
    console.log("this is the follower ", userId);

    Users.findById(othersId, function(err, others){
        others.follower.push({userId: userId});
        others.save();
    });

    Users.findById(userId, function(err, user){
        user.following.push({userId: othersId});
        user.save();
    });
}