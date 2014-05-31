module ExampleThree{
    export class MyFeatureDrct{
        constructor(){
            var directive: ng.IDirective = {};
            directive.restrict = 'A';
            directive.replace = true;
            directive.templateUrl = "exampleThree/myFeature.tpl.html";
            return directive;
        }    
    } 
}