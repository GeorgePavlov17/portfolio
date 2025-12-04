import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageButtonsComponent } from '../language-buttons/language-buttons.component';
import { TranslationService } from '../services/translation.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [
      CommonModule,
      TranslateModule,
      RouterLink,
      RouterLinkActive,
      LanguageButtonsComponent
    ]
})
export class HeaderComponent implements OnInit {
  isMobile!: boolean;

  constructor( private translationService: TranslationService ) { 
     const media = window.matchMedia('(max-width: 768px)');

     window.innerWidth < 500 ? this.isMobile = true : this.isMobile = false; 

     media.addEventListener('change', (e) => {
      console.log('e', e);
      this.isMobile = e.matches;
      });

    window.addEventListener('resize', () => { 
       window.innerWidth < 768 ? this.isMobile = true : this.isMobile = false;  
    }); 
  }

  ngOnInit(): void { 
    
  }   

  setLanguage(language: string ) {  
    this.translationService.setLanguage(language); 
  } 
}
