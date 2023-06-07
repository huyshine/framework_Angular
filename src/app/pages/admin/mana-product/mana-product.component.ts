import { ProductsService } from 'src/app/services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import swal from 'sweetalert2';
import { Product } from 'src/app/common/product';
@Component({
  selector: 'app-mana-product',
  templateUrl: './mana-product.component.html',
  styleUrls: ['./mana-product.component.css']
})
export class ManaProductComponent implements OnInit {
  products: Product[] = []
  
  product: any = {};
  categories:any=[]
  value:any
  submitted: boolean = false;
  productDialog: boolean = false;
  deleteProductDialog: boolean = false;

  deleteProductsDialog: boolean = false;

  constructor(private ProductsService:ProductsService, private Categories:CategoriesService  ){}
  ngOnInit() {
    this.ProductsService.getProducts().subscribe(
      (response)=>{
        this.products = response.datas;
        console.log(response)
      }
    )
    this.Categories.getAllCategories().subscribe(
      (response)=>{
        this.categories = response.datas
        console.log(response.datas)
      }
    )



  
}
 


openNew() {
  this.product = {};
  this.submitted = false;
  this.productDialog = true;
}
editProduct(product:any) {
  this.product = { ...product };
  this.productDialog = true;
}

deleteProduct(product: any) {
  this.product = { ...product };
  this.deleteProductDialog = true;
 

}

hideDialog() {
  this.productDialog = false;
  this.submitted = false;
}


confirmDelete() {
  console.log(this.product._id);
  this.ProductsService.deleteProduct(this.product._id).subscribe(
    (response)=>{
      this.products = this.products.filter(val => val._id !== this.product._id);
      // this.products = response.datas;
      console.log(response)
    }
  )

  this.deleteProductDialog = false;
  // this.products = this.products.filter(val => val.id !== this.product.id);
  // this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
  // this.product = {};
  
}

saveProduct() {
  this.submitted = true;

  if (this.product.name?.trim()) {
      if (this.product._id) {
          // @ts-ignore
          // this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value : this.product.inventoryStatus;
          // this.products[this.findIndexById(this.product.id)] = this.product;
          this.ProductsService.updateProduct(this.product).subscribe(
            (response)=>{
              this.products = response.datas;
              console.log(response)
            }
          );
          console.log(this.product);

          // this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
      } else {
          // this.product.id = this.createId();
          // this.product.code = this.createId();
          this.product.image = 'product-placeholder.svg';
          // @ts-ignore
          // this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
          this.ProductsService.createProduct(this.product).subscribe(
            (response)=>{
              this.products = response.datas;
              // this.products = this.products.filter(val => val._id !== this.product._id);
              console.log(response)
            }
          );
          console.log(this.product);
          
          // this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.product = {};
  }
}

}
