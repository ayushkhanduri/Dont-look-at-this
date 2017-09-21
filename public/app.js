var app = angular.module('myapp',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
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
            if(noshit.data.length > 0){ //CHANGING ROUTE ON THE BASIS OF DATA RECEIVED
                $state.go('home');
            }
        	console.log("Controller of login");
        	console.log(noshit);
        },
        resolve: {
        	noshit: function($http){
        		return $http.get("/getsomedata?showData=false"); //IF YOU PASS TRUE , IT WILL GIVE AN ARRAY , 
                //IF FALSE THEN AN EMPTY ARRAY IS RETURNED
        	}
        }
    })

    $urlRouterProvider.otherwise('home');

    $locationProvider.html5Mode(true);
})