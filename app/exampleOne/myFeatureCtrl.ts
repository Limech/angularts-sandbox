/// <reference path="../../../typings/jquery/jquery.d.ts" /> 
/// <reference path="../../../typings/angularjs/angular.d.ts" /> 

module ExampleOne{
    export class MyFeatureCtrl{         
        public svc: MyFeatureSvc;
           
        constructor(ex1FeatureSvc: MyFeatureSvc) {           
             this.svc = ex1FeatureSvc;
        }
    } 
}   