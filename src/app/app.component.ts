import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  selectedImage = 'assets/films/film1.jpg';

  constructor(){
    setInterval(()=>{
      let rand = Math.floor(Math.random()*(4-0+1))+0;
      this.selectedImage = this.dataArray[rand];
    },2000)
  }
  
  dataArray:any[]=[
    'assets/films/film1.jpg',
    'assets/films/film2.jpg',
    'assets/films/film3.jpg',
    'assets/films/film4.jpg',
    'assets/films/film5.jpeg'
  ];

}
