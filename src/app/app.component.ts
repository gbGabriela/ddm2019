import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']

})

export class AppComponent{

  nome: string = "Gabriela";
  valor: string ="";

  clique() : void {

    alert("Boa Noite, " + this.valor + "!");

  }

}
