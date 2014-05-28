/// <reference path="../../../typings/jquery/jquery.d.ts" /> 
/// <reference path="../../../typings/angularjs/angular.d.ts" /> 

'use strict';


interface IMyFeatureCtrlScope extends ng.IScope {
    vm: MyFeatureSrvc;
}

class MyFeatureCtrl{
        
    // needed for minification
    static $inject = ['$scope', 'myFeatureSrvc'];    
    constructor($scope: IMyFeatureCtrlScope, myFeatureSrvc: MyFeatureSrvc) {           
        $scope.vm = myFeatureSrvc;
    }
}