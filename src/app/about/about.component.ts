import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component( {
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ]
} )
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
