import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inside-header',
  templateUrl: './inside-header.component.html',
  styleUrls: ['./inside-header.component.scss']
})
export class InsideHeaderComponent implements OnInit {

  public route1 : string = "/photos";
  public route2 : string = "/photos-search";
  public route3 : string = "/topics";

  public routes : any[]; 

  constructor() {
    this.routes = [
      { label: "Lista de fotos", link: "/photos"},
      { label: "Pesquisar fotos", link: "/photos-search"},
      { label: "Tópicos", link: "/topics"},
    ]
  }

  ngOnInit() {
  }

}
