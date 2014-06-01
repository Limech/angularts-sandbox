angular.module('exampleTwo', ['ngRoute'])    
    .directive('exampleTwo', ExampleTwo.RouteDrct)
    .config(ExampleTwo.RouteCtrl);