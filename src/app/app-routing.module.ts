import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { AppLayoutComponent } from './layouts/layout/app.layout.component';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { NotFoundComponent } from './pages/notFound/notFound.component';
import { CartComponent } from './pages/cart/cart.component';
import { DasboardComponent } from './pages/admin/dasboard/dasboard.component';
import { ManaProductComponent } from './pages/admin/mana-product/mana-product.component';
import { ManaCategoriesComponent } from './pages/admin/mana-categories/mana-categories.component';
import { OrderComponent } from './pages/order/order.component';
import { ThanksComponent } from './pages/thanks/thanks.component';

const routes: Routes = [
 // Ứng dụng phía máy chủ: (admin)
  {
    path: 'admin',
    component: AppLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {path: "dashboard", component: DasboardComponent},
      {path: "managementProduct", component: ManaProductComponent},
      {path: "managementCategories", component: ManaCategoriesComponent},
      // { path: 'dashboard', component: DashboardComponent },
      // { path: 'products', component: ProductComponent },
    ],
  },

  // ứng dụng phía khách:
  {
    path: '',
    component: LayoutClientComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'home', component: HomeComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'cart', component: CartComponent },
      { path: 'order', component: OrderComponent },
      { path: 'thanks', component: ThanksComponent },
      // {
      //   path: 'login',
      //   component: LoginComponent,
      // },
      // { path: 'register', component: RegisterComponent },
    ],
  },

  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
