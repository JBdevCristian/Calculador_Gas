import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

   public precoAlcool: number = 0
   public precoGasolina: number = 0
   public resultado: string = ''

  calcular() {
    if(this.precoAlcool && this.precoGasolina) {
      var pAlcool = this.precoAlcool
      var pGasolina = this.precoGasolina

      var calculo = pAlcool / pGasolina;

      if(calculo >= 0.7) {
        this.resultado = "é melhor usar Gasolina"
      }else {
        this.resultado = "é melhor usar Alcool"
      }
    } else {
      this.resultado = 'Preencha corretamente os campos!!'
    }
  }

}
