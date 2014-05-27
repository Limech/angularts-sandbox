'use strict';

var sandboxApp: ng.IModule = angular.module('sandboxApp', [])
    .service('myFeatureSrvc', MyFeatureSrvc)
    .controller('myFeatureOneCtrl', MyFeatureCtrl)
    .controller('myFeatureTwoCtrl', MyFeatureCtrl);