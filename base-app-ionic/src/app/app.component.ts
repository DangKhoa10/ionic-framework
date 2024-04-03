import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Blog', url: '/blog', icon: 'reader' },
    { title: 'About', url: '/about', icon: 'alert-circle' },
  ];
  themeToggle = false;

  toggleChange(value: any | boolean) {
    if ((typeof value === 'boolean' && value) || value.detail.checked) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  constructor() {}
  ngOnInit(): void {
    this.toggleChange(this.themeToggle);
  }
}
