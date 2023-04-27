import { Injectable } from '@angular/core';
import { Iproduct } from '../models/product';
import { ProductStatus } from '../const/productEnum';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsserviceService {

productsArray  : Array<Iproduct> = [

  {
    Pname: 'samsung ',
    Pdetails: 'Galaxy m14',
    // Pstatus: 'In progress',
    Pstatus: ProductStatus.Inprogress,
    id: "qhrehfiueabc",
  },
  {
    Pname: 'Apple ',
    Pdetails: 'iPhone 11 ',
    // Pstatus: 'Dispatched',
    Pstatus: ProductStatus.Dispached,
    id: "qhdfuegfigoh",
  }
];

getAllproduct() {
  return this.productsArray
}

addProduct(prod:Iproduct): void  {
   this.productsArray.push(prod);
   this._snackBarService.openSnackBar(`${prod.Pname} is Added Successfully`)
}

updateStatus(prodObj : Iproduct , status : string){
  this.productsArray.forEach(prod => {
    if(prod.id === prodObj.id){
      prod.Pstatus = status
    }
    this._snackBarService.openSnackBar(`The status of Products ${prodObj.Pname} is changed to ${status}`)
  })

}




  constructor(private _snackBarService : SnackBarService) { }
}
