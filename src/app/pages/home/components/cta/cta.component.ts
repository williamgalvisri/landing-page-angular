import { Component } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
    selector: 'app-cta',
    imports: [SharedModule],
    templateUrl: './cta.component.html',
    styleUrl: './cta.component.css',
})
export class CtaComponent {

    public compoaniesPaths: string[] = [
        'amazon-logo',
        'dribble-logo',
        'hubspot-logo',
        'netflix-logo',
        'notion-logo',
        'zoom-logo',
    ]

}
