import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
