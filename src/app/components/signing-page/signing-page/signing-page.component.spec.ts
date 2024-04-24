import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigningPageComponent } from './signing-page.component';

describe('SigningPageComponent', () => {
  let component: SigningPageComponent;
  let fixture: ComponentFixture<SigningPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigningPageComponent]
    });
    fixture = TestBed.createComponent(SigningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
