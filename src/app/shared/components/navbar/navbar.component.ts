import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-navbar',
    imports: [
        ButtonComponent,
        CommonModule
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    animations: [
        trigger(
            'showContext',
            [
                transition(':enter', [
                    style({ opacity: 0 }),
                    animate('0.3s', style({ opacity: 1 })),
                ]),
                transition(':leave', [
                    style({ opacity: 1 }),
                    animate('0.3s', style({ opacity: 0 })),
                ]),
            ]
        )
    ],
})
export class NavbarComponent {
    public isOpen: boolean = false;

    public toggle(): void {
        this.isOpen = !this.isOpen;
    }
}
