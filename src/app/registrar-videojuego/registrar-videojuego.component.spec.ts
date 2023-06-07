import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarVideojuegoComponent } from './registrar-videojuego.component';

describe('RegistrarVideojuegoComponent', () => {
  let component: RegistrarVideojuegoComponent;
  let fixture: ComponentFixture<RegistrarVideojuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarVideojuegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
