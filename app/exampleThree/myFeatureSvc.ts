module ExampleThree{
   
    export interface IProductResource extends ng.resource.IResourceClass<IProduct>{}
    
    export class MyFeatureSvc{
        
        public productResource: IProductResource;
        private $resource: ng.resource.IResourceService;
        
        constructor($resource: ng.resource.IResourceService){          
            this.$resource = $resource;         
            this.productResource = <IProductResource>this.$resource('/api/resource-path/1.json');
        }
    }

}