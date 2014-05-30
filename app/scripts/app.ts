'use strict';

var sandboxApp: ng.IModule = angular.module('sandboxApp', ['ngRoute'])
    .config(RouteCtrl)
    .service('myFeatureSvc', MyFeatureSvc)
    .controller('myFeatureOneCtrl', MyFeatureCtrl)
    .controller('myFeatureTwoCtrl', MyFeatureCtrl);