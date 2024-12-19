import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
    @Input({required: true}) title: [string, string] = ['Title', 'Second'];
    @Input() illustration: string = 'service-illustration-1';
    @Input() urlRedirect: string = '/';
    @Input() type: 'white' | 'green' | 'black' = 'white';


    get colorConfig() {
        switch (this.type) {
            case 'white':
                return {
                    highlight: 'var(--c-green)',
                    background: 'var(--c-white)',
                    textColor: 'var(--c-black)',
                    svg: {
                        fill: 'var(--c-dark)',
                        color: 'var(--c-green)',
                    }
                };
            case 'green':
                return {
                    highlight: 'var(--c-white)',
                    background: 'var(--c-green)',
                    textColor: 'var(--c-black)',
                    svg: {
                        fill: 'var(--c-dark)',
                        color: 'var(--c-green)',
                    }
                };
            case 'black':
                return {
                    highlight: 'var(--c-white)',
                    background: 'var(--c-dark)',
                    textColor: 'var(--c-dark)',
                    svg: {
                        fill: 'var(--c-white)',
                        color: 'var(--c-dark)',
                    }
                };
        }
    }
}
