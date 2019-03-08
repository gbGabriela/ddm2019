import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { CalculadoraComponent } from './paginas/calculadora/calculadora.component';
import { PositivoNegativoComponent } from './paginas/positivo-negativo/positivo-negativo.component';
import { ImcComponent } from './paginas/imc/imc.component';
import { CadastroPessoaComponent } from './paginas/cadastro-pessoa/cadastro-pessoa.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'calculadora',component:CalculadoraComponent},
  {path:'positivo-negativo',component:PositivoNegativoComponent},
  {path:'imc',component:ImcComponent},
  {path:'cadastro-pessoa',component:CadastroPessoaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
