import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVideojuegosComponent } from './lista-videojuegos.component';

describe('ListaVideojuegosComponent', () => {
  let component: ListaVideojuegosComponent;
  let fixture: ComponentFixture<ListaVideojuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVideojuegosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaVideojuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
