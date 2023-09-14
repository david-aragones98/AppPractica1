import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-galeria-imagenes-basica',
  templateUrl: './galeria-imagenes-basica.page.html',
  styleUrls: ['./galeria-imagenes-basica.page.scss'],
})
export class GaleriaImagenesBasicaPage implements OnInit {


  data: any[] = [];

  constructor(public http:HttpClient) {

    this.getImage();
   }


getImage(){
  this.http.get<any>("https://jsonplaceholder.typicode.com/todos").subscribe(data =>{
    console.log(data);
    this.data = data;
  }, e => {
    console.log("compa algo peto al traer imagenes",e)
  })
}
















  ngOnInit() {
  }

}
