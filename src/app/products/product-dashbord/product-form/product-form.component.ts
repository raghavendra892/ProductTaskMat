import { Component, OnInit } from '@angular/core';
import { ProductStatus } from 'src/app/shared/const/productEnum';
import { Iproduct } from 'src/app/shared/models/product';
import { ProductsserviceService } from 'src/app/shared/services/productsservice.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  constructor(private _utilityService : UtilityService, private _productService : ProductsserviceService) { }

  ngOnInit(): void {
  }

  OnProductAdd(name : HTMLInputElement, details : HTMLTextAreaElement){
    if(name.value.length > 0 && details.value.length > 0 ){
      let prod : Iproduct = {
        Pname : name.value,
        Pdetails : details.value,
        Pstatus : ProductStatus.Inprogress,
        id : this._utilityService.uuid()
      }
      this._productService.addProduct(prod)
      name.value = " ";
      details.value = " ";
    }
    return false
  }
}
