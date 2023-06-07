import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { Category } from 'src/app/common/categories';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mana-categories',
  templateUrl: './mana-categories.component.html',
  styleUrls: ['./mana-categories.component.scss']
})
export class ManaCategoriesComponent {
  categories: Category[] = []
  category: any = {};


  value:any
  submitted: boolean = false;
  productDialog: boolean = false;
  deleteProductDialog: boolean = false;
  deleteProductsDialog: boolean = false;
  

  constructor(
    private CategoriesService:CategoriesService,
    private router:Router,
    ){}
  ngOnInit() {
    this.CategoriesService.getAllCategories().subscribe(
      (response)=>{
        this.categories = response.datas
        console.log(response)
      }
    )
}

openNew() {
  this.category = {};
  this.submitted = false;
  this.productDialog = true;
}
editCate(category:any =[]) {
  this.category = { ...category };
  this.productDialog = true;
}

deleteCate(category: any) {
  this.category = { ...category };
  this.deleteProductDialog = true;

}



hideDialog() {
  this.productDialog = false;
  this.submitted = false;
}

confirmDelete() {
  console.log(this.category._id);
  this.CategoriesService.removeCate(this.category._id).subscribe(
    (response)=>{
      this.categories = this.categories.filter(val => val._id !== this.category._id);
      // this.products = response.datas;
      console.log(response)
      // this.router.navigate(['/managementCategories'])
    }
  )

  this.deleteProductDialog = false;

  
}

saveCategory() {
  this.submitted = true;

  if (this.category.name?.trim()) {
      if (this.category._id) {
  
          this.CategoriesService.updateCate(this.category._id, {name: this.category.name}).subscribe(
            (response)=>{
              // console.log(response)
              this.router.navigate(['/admin/managementCategories'])
              this.categories = response.datas;

            }
          );
          console.log(this.category);

      } else {
          this.CategoriesService.creatCate(this.category).subscribe(
            (response)=>{
              this.categories = response.datas;
              // console.log(response)
              this.router.navigate(['/admin/managementCategories'])
            }
          );
          console.log(this.category);
          
      }

      this.categories = [...this.categories];
      this.productDialog = false;
      this.category = {};
  }
}




}

