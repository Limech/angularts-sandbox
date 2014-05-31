module ExampleThree{
    class MyFeatureSrv{
        constructor($resource: ng.resource.IResourceService){
            return $resource('/api/resource-path.1');
        }    
    } 
}