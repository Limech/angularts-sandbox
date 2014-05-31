'use strict';

// Use of dependencies:
// ngRout       - ExampleTwo
// ngResource   - ExampleThree   
var sandboxApp: ng.IModule = angular.module('sandboxApp', ['ngRoute', 'ngResource'])
    .config(ExampleTwo.RouteCtrl)
    .service('myFeatureSvc', ExampleOne.MyFeatureSvc )
    .controller('myFeatureOneCtrl', ExampleOne.MyFeatureCtrl)
    .controller('myFeatureTwoCtrl', ExampleOne.MyFeatureCtrl);