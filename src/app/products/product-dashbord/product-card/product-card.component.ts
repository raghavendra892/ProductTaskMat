import { Component, Input, OnInit } from '@angular/core';
import { ProductStatus } from 'src/app/shared/const/productEnum';
import { Iproduct } from 'src/app/shared/models/product';
import { ProductsserviceService } from 'src/app/shared/services/productsservice.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  allproductstatus = ProductStatus
  @Input("product") prodobj ! : Iproduct
  // @Input() product ! : Iproduct
  constructor(private _productservice : ProductsserviceService) { }

  ngOnInit(): void {
  }

  OnStatusChange(prodobj : Iproduct, status : string){
    this._productservice.updateStatus(prodobj, status)
  }
}
