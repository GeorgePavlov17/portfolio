import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss'],
    standalone: true,
    imports: [
      CommonModule,
      TranslateModule,
      HeaderComponent,
      FooterComponent
    ]
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
