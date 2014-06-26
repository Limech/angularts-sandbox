angular.module('exampleOne', [])
    .directive('exampleOne', ExampleOne.MyFeatureDrct)
    .service('ex1FeatureSvc', ExampleOne.MyFeatureSvc )
    .controller('ex1FeatureOneCtrl', ExampleOne.MyFeatureCtrl)
    .controller('ex1FeatureTwoCtrl', ExampleOne.MyFeatureCtrl);