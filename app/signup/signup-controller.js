/**
 * Created by shelley_su on 12/18/2015.
 */
(function(){
    angular.module('friend_tracker')
        .controller('SignupController', ['$scope', '$state','$http', function($scope, $state, $http){
            $scope.createUser = function(){
              $http.post('api/user/signup', $scope.newUser)
                  .success(function(res){

                  })
                  .error(function(err){
                      console.log(err);
                  })
            };
        }]);

}());