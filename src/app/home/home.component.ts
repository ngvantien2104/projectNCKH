import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public name = "Nguyễn Văn Tiến";
  public age = 25;


  public resetName(): void{
      console.log('resetname');
      this.name = 'Nguyễn Văn Tiến';
  }
}
