module ExampleTwo{
    export class RouteCtrl{
        constructor($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider){
            var partialsFolder: string = 'exampleTwo';
            
            var routeOne: ng.route.IRoute = {};
            routeOne.templateUrl = partialsFolder + '/one.html';     
            var routeTwo: ng.route.IRoute = {};
            routeTwo.templateUrl = partialsFolder + '/two.html';
            var otherwiseRoute: ng.route.IRoute = {};
            otherwiseRoute.redirectTo = '/';
            
            $locationProvider.html5Mode(true);     
            $routeProvider
                .when('/', routeOne)
                .when('/one', routeOne)
                .when('/two', routeTwo)
                .otherwise(otherwiseRoute);
        }
    }
}