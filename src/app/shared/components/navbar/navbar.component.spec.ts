import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NavbarComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have isOpen set to false', () => {
        expect(component.isOpen).toBeFalse();
    });


    it('should toggle isOpen property', () => {
        component.toggle();
        expect(component.isOpen).toBeTrue();
        component.toggle();
        expect(component.isOpen).toBeFalse();
    });

    it('should be exist the element when isOpen is true', () => {
        component.isOpen = true;
        fixture.detectChanges();
        const wrapperMenuMobile = fixture.nativeElement.querySelector('.wrapper-menu-mobile__context');
        expect(wrapperMenuMobile).toBeTruthy();
    });


    it('should not exist the element when isOpen is false', () => {
        component.isOpen = false;
        fixture.detectChanges();
        const wrapperMenuMobile = fixture.nativeElement.querySelector('.wrapper-menu-mobile__context');
        expect(wrapperMenuMobile).toBeFalsy();
    });

});
