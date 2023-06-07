import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
@Component({
  selector: 'app-mana-categories',
  templateUrl: './mana-categories.component.html',
  styleUrls: ['./mana-categories.component.scss']
})
export class ManaCategoriesComponent {
  categories:any=[]
  value:any
  constructor(private CategoriesService:CategoriesService){}
  ngOnInit() {
    this.CategoriesService.getAllCategories().subscribe(
      (response)=>{
        this.categories = response.datas
        console.log(response)
      }
    )
}
}
