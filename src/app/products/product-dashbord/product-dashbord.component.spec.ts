import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDashbordComponent } from './product-dashbord.component';

describe('ProductDashbordComponent', () => {
  let component: ProductDashbordComponent;
  let fixture: ComponentFixture<ProductDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
