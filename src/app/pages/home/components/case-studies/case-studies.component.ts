import { Component } from '@angular/core';
import { TitleSectionComponent } from "../../../../shared/components/title-section/title-section.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-case-studies',
  imports: [TitleSectionComponent, CommonModule],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.css'
})
export class CaseStudiesComponent {

}
