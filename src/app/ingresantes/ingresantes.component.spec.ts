import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresantesComponent } from './ingresantes.component';

describe('IngresantesComponent', () => {
  let component: IngresantesComponent;
  let fixture: ComponentFixture<IngresantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
