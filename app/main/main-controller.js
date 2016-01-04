/**
 * Created by shelley_su on 12/20/2015.
 */
(function(){
    angular.module('friend_tracker')
        .controller('MainController', ['$scope','$http','$interval',function($scope,$http,$interval){
            if(localStorage['User-Data'] !== undefined){
                $scope.user = JSON.parse(localStorage['User-Data']);
                console.log($scope.user);
            }
            $scope.sendStatus = function(event){
                if(event.which === 13){
                    var request = {
                        user : $scope.user.username || $scope.user.email,
                        userId : $scope.user._id,
                        userImage : $scope.user.image,
                        content : $scope.newStatus,
                        bio : $scope.user.bio,
                        //following : $scope.user.following,
                        //follower : $scope.user.follower
                    };
                    $http.post('api/status/post', request)
                        .success(function(res){
                            console.log(res);
                            $scope.allStatus = res;
                        })
                        .error(function(err){
                            console.log(err);
                        });
                }
            }
            //use interval
            function getStatus(initial){
                var data = {};
                if($scope.user){
                    data.following = angular.copy($scope.user.following);
                    data.following.push({userId: $scope.user._id});
                }
                $http.post('api/status/get', data)
                    .success(function(res){
                        if(initial){
                            $scope.allStatus = res;
                        } else {
                            if(res.length > $scope.allStatus.length){
                                $scope.incomingStatus = res;
                            }
                        }
                    })
            };

            $interval(function(){
                getStatus(false);
                if($scope.incomingStatus){
                    $scope.difference = $scope.incomingStatus.length - $scope.allStatus.length;
                }
                console.log("the interval is working!")
            }, 5000);

            $scope.setNewStatus = function(){
                $scope.allStatus = angular.copy($scope.incomingStatus);
                $scope.incomingStatus = undefined;
            };

            getStatus(true);
        }]);
}());