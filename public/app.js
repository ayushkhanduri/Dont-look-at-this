var app = angular.module('myapp',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
    .state('home',{
        url: '/home',
        template: '<h1>Home</h1>',
        controller: function(){
        	console.log("controller of home!");
        },
    })
    .state('login', {
        url: '/login',
        template: 'home/login.html',
        controller: function(noshit,$state){
            if(noshit){
                $state.go('home');
            }
        	console.log("Controller of login");
        	console.log(noshit);
        },
        resolve: {
        	noshit: function($http){
        		return $http.get("/getsomedata");
        	}
        }
    })

    $urlRouterProvider.otherwise('home');
})