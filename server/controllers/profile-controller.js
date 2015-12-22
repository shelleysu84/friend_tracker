/**
 * Created by shell_000 on 12/19/2015.
 */

var User = require('../datasets/users');
var fs = require('fs-extra');
var path = require('path');

module.exports.updatePhoto = function(req, res){
    var file = req.files.file;
    var userId = req.body.userId;
    console.log('user ' + userId + ' is submitting', file);

    var uploadDate = new Date().toISOString();
    uploadDate = uploadDate.replace(/[-&\/\\#,+()$~%.'":*?<>{}]/g, '');
    //var tempPath = file.path;
    /*create unique image name*/
    var targetPath = path.join(__dirname, "../../uploads/"
        + userId + uploadDate + file.name);
    var savePath = "/uploads/" + userId + uploadDate + file.name;
    //console.log(tempPath);
    //console.log(path.join(__dirname, "../../uploads/" + userId +file.name);

    fs.rename(file.path, targetPath, function (err) {
        if(err){
            console.log(err);
        }else{
            User.findById(userId, function(err, userData){
                var user = userData;
                user.image = savePath;
                user.save(function(err){
                   if(err){
                       console.log('failed save');
                       res.json({status : 500});
                   }else{
                       console.log('save success');
                       res.json({status: 200});
                   }
                });
            });
            //console.log("file moved");
        }
    });
};

module.exports.updateUsername = function(req, res){
    var username = req.body.username;
    var userId = req.body.userId;

    User.findById(userId, function(err, userData){
        var user = userData;
        user.username = username;
        user.save(function(err){
            if (err){
                console.log("fail");
                res.json({status: 500});
            } else {
                console.log("success");
                res.json({status: 200});
            }
        });
    });
};

module.exports.updateBio = function (req, res){
    var bio = req.body.bio;
    var userId = req.body.userId;

    User.findById(userId, function (err, userData){
        var user = userData;
        user.bio = bio;

        user.save(function(err){
            if (err){
                console.log("fail");
                res.json({status: 500});
            } else {
                console.log("success");
                res.json({status: 200});
            }
        })
    });
};