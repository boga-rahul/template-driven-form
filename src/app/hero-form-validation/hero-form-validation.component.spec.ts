import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFormValidationComponent } from './hero-form-validation.component';

describe('HeroFormValidationComponent', () => {
  let component: HeroFormValidationComponent;
  let fixture: ComponentFixture<HeroFormValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroFormValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
