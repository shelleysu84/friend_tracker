/**
 * Created by shelley_su on 12/19/2015.
 */
(function(){
    angular.module('friend_tracker')
        .controller('NavigationController',['$scope', '$http','$state', function($scope, $http, $state){
            if(localStorage['User-Data']){
                $scope.loggedIn = true;
            }else{
                $scope.loggedIn = false;
            }
            $scope.logUserIn = function(){
                $http.post('api/user/login', $scope.login)
                    .success(function(res){
                        localStorage.setItem('User-Data', JSON.stringify(res));
                        $scope.loggedIn = true;
                    })
                    .error(function (err) {
                        console.log(err);
                    });
            }
            $scope.logOut = function(){
                localStorage.clear();
                $scope.loggedIn = false;
            }
        }]);
}());