/**
 * Created by shell_000 on 12/18/2015.
 */

(function(){
    angular.module('friend_tracker', ['ui.router', 'ngFileUpload'])
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider
                .otherwise('/');
            $stateProvider
                .state('signUp',{
                    url : '/signup',
                    templateUrl : 'app/signup/signup.html',
                    controller : 'SignupController'
                })
                .state('editProfile', {
                    url : '/edit-profile',
                    templateUrl : 'app/profile/edit-profile-view.html',
                    controller : 'EditProfileController'
                })
                .state('main', {
                    url : '/',
                    templateUrl : 'app/main/main.html',
                    controller : 'MainController'
                })
                .state('follow',{
                    url : '/follow-users',
                    templateUrl : 'app/follow/follow.html',
                    controller : 'FollowController'
                })
        });

}());