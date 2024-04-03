import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
