/**
 * Created by shell_000 on 12/21/2015.
 */
(function(){
    angular.module('friend_tracker')
        .controller('FollowController',['$scope','$http',function($scope, $http){
            //$scope.test = "super star";

            $scope.user = JSON.parse(localStorage['User-Data']);
            console.log($scope.user);

            $http.get('api/users/get').then(function(res){
                $scope.users = res.data;
                console.log($scope.users);
            });

            $scope.follow = function(userId, othersId){
                var request = {userId : userId, othersId : othersId};
                $http.post('api/users/follow', request).then(function(){
                    console.log("following" + request.othersId);
                })
            };
            
            $scope.checkIsFollowing = function (othersId) {
                for(var i = 0, len = $scope.user.following.length; i < len; i++){
                    if($scope.user.following[i].userId === othersId){
                        return true;
                    }
                }
                return false;
            };

    }]);

}());