module ExampleTwo{
    export class RouteDrct{
        constructor(){
            var directive: ng.IDirective = {};
            directive.restrict = 'A';
            directive.replace = true;
            directive.templateUrl = "exampleTwo/route.tpl.html";
            return directive;
        }    
    } 
}