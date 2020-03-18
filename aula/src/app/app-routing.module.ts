import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// importar componente contato
import { ContatoComponent } from './contato/contato.component';

// array typescript
const routes: Routes = [
  {
    path: "contato", component: ContatoComponent // rota de contato
  }
];

// array javascript
// var routes = []
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
