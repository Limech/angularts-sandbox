/// <reference path="../../../typings/jquery/jquery.d.ts" /> 
/// <reference path="../../../typings/angularjs/angular.d.ts" /> 

'use strict';
class MyFeatureCtrl{
      
    public svc: MyFeatureSvc;
       
    constructor(myFeatureSvc: MyFeatureSvc) {           
         this.svc = myFeatureSvc;
    }
}