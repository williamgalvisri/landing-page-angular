import { Component } from '@angular/core';
import { CardComponent } from "@shared/components/card/card.component";
import { TitleSectionComponent } from '@shared/components/title-section/title-section.component';

@Component({
  selector: 'app-services',
  imports: [CardComponent, TitleSectionComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
