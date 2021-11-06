import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenParcialComponent } from './examen-parcial.component';

describe('ExamenParcialComponent', () => {
  let component: ExamenParcialComponent;
  let fixture: ComponentFixture<ExamenParcialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenParcialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenParcialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
