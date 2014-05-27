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