/**
 * Created by shell_000 on 12/20/2015.
 */

var Status = require('../datasets/status');

module.exports.postStatus = function(req, res){
    //console.log(req.body);
    var status = new Status(req.body);
    status.save();

    Status.find({})
        .sort({date: -1})
        .exec(function(err, allStatus){
        if(err){
            res.error(err);
        }else{
            res.json(allStatus);
        }
    });

};

module.exports.getStatus = function(req, res){
    if(!req.body.following) {
        console.log("~~~no followers~~~");
        Status.find({"_id" :req.body._id})
            .sort({date: -1})
            .exec(function (err, allStatus) {
                if (err) {
                    res.error(err);
                } else {
                    res.json(allStatus);
                }
            })
    }else{
        console.log("try this");

        var requestedStatus = [];
        for(var i = 0, len = req.body.following.length; i < len; i++){
            requestedStatus.push({userId : req.body.following[i].userId});
        }
        console.log(i);
        console.log(requestedStatus);
        Status.find({$or: requestedStatus})
            .sort({date: -1})
            .exec(function (err, allStatus) {
                console.log(allStatus);
                if(err){
                    res.error(err);
                }else{
                    res.json(allStatus);
                }
            })
    }
}