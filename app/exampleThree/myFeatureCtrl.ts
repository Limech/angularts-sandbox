module ExampleThree{
      
    export interface IProduct extends ng.resource.IResource<IProduct>{
        name: string;
        manufacturer: string;
        price: number;
        isInStock: boolean;
    }
              
    export class MyFeatureCtrl{
    
        public product: IProduct;
        private myFeatureSvc: MyFeatureSvc;
           
        constructor(ex3FeatureSvc: MyFeatureSvc){
          this.myFeatureSvc = ex3FeatureSvc;
        }

        public getResource = (): void => {
            this.product = this.myFeatureSvc.productResource.get();
        }
    }
}