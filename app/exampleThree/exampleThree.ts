angular.module('exampleThree', ['ngResource']) 
    .directive('exampleThree', ExampleThree.MyFeatureDrct)
    .service('ex3FeatureSvc', ExampleThree.MyFeatureSvc)
    .controller('ex3FeatureCtrl', ExampleThree.MyFeatureCtrl);