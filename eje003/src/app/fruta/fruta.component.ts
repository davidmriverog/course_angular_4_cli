import { Component } from '@angular/core';

@Component({
   selector: 'fruta',
   templateUrl: './fruta.component.html'
})
export class FrutaComponent {
  public componentName = 'Componente de fruta';
  public frutaList = 'Naranja, Manzana, pera y sandia';
}