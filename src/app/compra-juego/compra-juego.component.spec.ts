import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraJuegoComponent } from './compra-juego.component';

describe('CompraJuegoComponent', () => {
  let component: CompraJuegoComponent;
  let fixture: ComponentFixture<CompraJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraJuegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompraJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
