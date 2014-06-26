module ExampleOne{
    export class MyFeatureDrct{
        constructor(){
            var directive: ng.IDirective = {};
            directive.restrict = 'A';
            directive.replace = true;
            directive.templateUrl = "exampleOne/myFeature.tpl.html";
            return directive;
        }    
    } 
}
