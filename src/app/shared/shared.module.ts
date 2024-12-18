import { NgModule } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  imports: [
    LayoutComponent,
    NavbarComponent,
    ButtonComponent,
  ],
  exports: [
    LayoutComponent,
    NavbarComponent,
    ButtonComponent,
  ]
})
export class SharedModule { }
