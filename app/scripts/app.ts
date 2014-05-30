'use strict';

var sandboxApp: ng.IModule = angular.module('sandboxApp', [])
    .service('myFeatureSvc', MyFeatureSvc)
    .controller('myFeatureOneCtrl', MyFeatureCtrl)
    .controller('myFeatureTwoCtrl', MyFeatureCtrl);