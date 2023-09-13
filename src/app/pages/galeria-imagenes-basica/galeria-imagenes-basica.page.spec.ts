import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GaleriaImagenesBasicaPage } from './galeria-imagenes-basica.page';

describe('GaleriaImagenesBasicaPage', () => {
  let component: GaleriaImagenesBasicaPage;
  let fixture: ComponentFixture<GaleriaImagenesBasicaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GaleriaImagenesBasicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
