'use strict';
class RouteCtrl{
    constructor($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider){
        var partialsFolder: string = 'partials';
        
        var oneRoute: ng.route.IRoute = {};
        oneRoute.templateUrl = partialsFolder + '/one.html';     
        var twoRoute: ng.route.IRoute = {};
        twoRoute.templateUrl = partialsFolder + '/two.html';
        var otherwiseRoute: ng.route.IRoute = {};
        otherwiseRoute.redirectTo = '/';
        
        $locationProvider.html5Mode(true);     
        $routeProvider
            .when('/', oneRoute)
            .when('/one', oneRoute)
            .when('/two', twoRoute)
            .otherwise(otherwiseRoute);
    }
}
