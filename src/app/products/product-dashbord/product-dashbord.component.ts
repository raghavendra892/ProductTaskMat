import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/shared/models/product';
import { ProductsserviceService } from 'src/app/shared/services/productsservice.service';

@Component({
  selector: 'app-product-dashbord',
  templateUrl: './product-dashbord.component.html',
  styleUrls: ['./product-dashbord.component.scss']
})
export class ProductDashbordComponent implements OnInit {
  productsArrayn : Array<Iproduct> = []
  constructor(private _productsService : ProductsserviceService) { }

  ngOnInit(): void {
    this.productsArrayn = this._productsService.getAllproduct()
  }

}
