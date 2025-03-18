import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent implements OnInit {

  @Input() title: string = '';
  @Input() isAdd: boolean = false;
  @Input() isHome: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(["/"]);
  }

  ngOnDestroy() {
    window.location.reload();
  }

}
