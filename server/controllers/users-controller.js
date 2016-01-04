/**
 * Created by shelley_su on 12/21/2015.
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
        if(others.follower.filter(function(obj){return obj.userId == userId})) {
            others.follower.push({userId: userId});
            others.save();
        }
    });

    Users.findById(userId, function(err, user){
        if(user.following.filter(function(obj){return obj.userId == othersId})) {
            user.following.push({userId: othersId});
            user.save();
        }
    });
}


module.exports.unfollowUser = function(req, res){
    var userId = req.body.userId,
        othersId = req.body.othersId;
    console.log("this is the others ", othersId);
    console.log("this is the follower ", userId);

    Users.findById(othersId, function(err, others){
        others.follower.pop({userId: userId});
        others.save();
    });

    Users.findById(userId, function(err, user){
        user.following.pop({userId: othersId});
        user.save();
    });
}
