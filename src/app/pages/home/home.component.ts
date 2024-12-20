import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CtaComponent } from './components/cta/cta.component';
import { ServicesComponent } from "./components/services/services.component";
import { MiddleCtaComponent } from "./components/middle-cta/middle-cta.component";

@Component({
  selector: 'app-home',
  imports: [SharedModule, CtaComponent, ServicesComponent, MiddleCtaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
