module ExampleThree{
   
    export interface IProductResource extends ng.resource.IResourceClass<IProduct>{
        update(product: IProduct): IProduct;
    }
    
// Work in progress:
//
//    export class ProductResource{
//        constructor($resource : ng.resource.IResourceService){
//            var updateAction : ng.resource.IActionDescriptor = {
//                method: 'PUT',
//                isArray: false
//            };
//            
//            return <IProductResource> $resource('/api/resource-path/:id.json', {id: '@id'}, {update: updateAction}); 
//        }
//    }
    
    export class MyFeatureSvc{
        
        public productResource: IProductResource;
        
        constructor($resource: ng.resource.IResourceService){                  
            this.productResource = <IProductResource>$resource('/api/resource-path/:id.json', {id: '@id'});
        }
    }

}