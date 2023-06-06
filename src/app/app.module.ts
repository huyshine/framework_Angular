import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CardModule } from 'primeng/card';
import { ScrollerModule } from 'primeng/scroller';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';


// import Admin component


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/user/header/header.component';
import { FooterComponent } from './components/user/footer/footer.component';
// import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoryComponent } from './pages/category/category.component';
// import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
// import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
// import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';
import { TopbarComponent } from './components/user/topbar/topbar.component';
import { TopmenuComponent } from './components/user/topmenu/topmenu.component';
import { MenuComponent } from './components/user/menu/menu.component';
import { SlideComponent } from './components/user/slide/slide.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { CartComponent } from './pages/cart/cart.component';
import { DasboardComponent } from './pages/admin/dasboard/dasboard.component';
import { ManaProductComponent } from './pages/admin/mana-product/mana-product.component';
import { ManaCategoriesComponent } from './pages/admin/mana-categories/mana-categories.component';

// sweetalert 

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { StyleClassModule } from 'primeng/styleclass';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { ChartModule } from 'primeng/chart';
import { AppLayoutModule } from './layouts/layout/app.layout.module';
import { InputNumber, InputNumberModule } from 'primeng/inputnumber';
import { OrderComponent } from './pages/order/order.component';
import { ThanksComponent } from './pages/thanks/thanks.component';






@NgModule({
  declarations: [
    // Layout Component
    LayoutClientComponent,
    // Component,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopbarComponent,
    SlideComponent,
    TopmenuComponent,
    MenuComponent,
    // Admin
    DasboardComponent,
    ManaProductComponent,
    ManaCategoriesComponent,
    
    // Pagas
    HomeComponent,
    CategoryComponent,
    ProductDetailComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    OrderComponent,
    ThanksComponent
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSlideToggleModule,
    FormsModule,
    CommonModule,
    CardModule,
    ScrollerModule,
    TableModule,
    RouterModule,
    ReactiveFormsModule,

    DialogModule,
    SelectButtonModule,
    ButtonModule,
    StyleClassModule,
    DataViewModule,
    InputTextModule,
    DropdownModule,
    MenuModule,
    // ChartModule,
    AppLayoutModule,
    InputNumberModule,

    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
