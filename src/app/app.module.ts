import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './paginas/home/home.component';
import { CalculadoraComponent } from './paginas/calculadora/calculadora.component';
import { PositivoNegativoComponent } from './paginas/positivo-negativo/positivo-negativo.component';
import { ImcComponent } from './paginas/imc/imc.component';
import { CadastroPessoaComponent } from './paginas/cadastro-pessoa/cadastro-pessoa.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, CalculadoraComponent, PositivoNegativoComponent,
    ImcComponent, CadastroPessoaComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
