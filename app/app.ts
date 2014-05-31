// Use of dependencies:
// ngRout       - ExampleTwo
// ngResource   - ExampleThree   
var sandboxApp: ng.IModule = angular.module('sandboxApp', ['ngRoute', 'ngResource'])
    .directive('exampleOne', ExampleOne.MyFeatureDrct)
    .service('myFeatureSvc', ExampleOne.MyFeatureSvc )
    .controller('myFeatureOneCtrl', ExampleOne.MyFeatureCtrl)
    .controller('myFeatureTwoCtrl', ExampleOne.MyFeatureCtrl)
    .directive('exampleTwo', ExampleTwo.RouteDrct)
    .config(ExampleTwo.RouteCtrl)
    .directive('exampleThree', ExampleThree.MyFeatureDrct)
    .controller('myFeatureCtrl', ExampleThree.MyFeatureCtrl);