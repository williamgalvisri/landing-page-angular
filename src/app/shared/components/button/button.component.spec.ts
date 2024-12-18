import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
    let component: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ButtonComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // When it's type type outline dosen't had a background
    it('should have not a background when type is outline', () => {
        const buttonElement = (fixture.nativeElement as HTMLButtonElement)
            .querySelector(`button[data-test="button"]`);
        component.type = 'outline',
        fixture.detectChanges();


        let backgroundStyle = '';
        if(buttonElement) {
            const computedStyle = getComputedStyle(buttonElement);
            backgroundStyle = computedStyle.backgroundColor;
        }

        expect(backgroundStyle).toBe('rgba(0, 0, 0, 0)');
    })

    // When it's type type outline dosen't had a background
    it('should have a background when type is fill', () => {
        const buttonElement = (fixture.nativeElement as HTMLButtonElement)
            .querySelector(`button[data-test="button"]`);
        component.type = 'fill',
        fixture.detectChanges();


        let backgroundStyle = '';
        if(buttonElement) {
            const computedStyle = getComputedStyle(buttonElement);
            backgroundStyle = computedStyle.backgroundColor;
        }

        expect(backgroundStyle).not.toBe('rgba(0, 0, 0, 0)');
    })
});
