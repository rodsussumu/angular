import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'segundaAulaAngular';
  images: Array<any> = [
  {
    url:"./assets/img/img1.jpg",
    titulo: "Louro josé",
    ativo:true
  },{
    url:"./assets/img/img2.jpg",
    titulo: "mickeyzada",
    ativo:true
  },{
    url:"./assets/img/img3.png",
    titulo: "belê",
    ativo:true
  }
]

deletar(index:string) {
  this.images[index].ativo = false;
  alert("deletado " + index)
}
adicionar() {
  let objetoImagem = {
    url:"https://picsum.photos/200/200"+ new Date().getTime,
    titulo: "Louro josé",
    ativo:true
  }
  this.images.push(objetoImagem);
}

}

