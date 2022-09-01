import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProCartComponent } from './pro-cart.component';



describe('ProCartComponent', () => {
  let component: ProCartComponent;
  let fixture: ComponentFixture<ProCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
