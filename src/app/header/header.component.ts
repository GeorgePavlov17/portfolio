import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [
      CommonModule,
      TranslateModule,
      RouterLink,
      RouterLinkActive
    ]
})
export class HeaderComponent implements OnInit { 
  selectedLanguage!: string | null;
  isEnglish!: boolean;

  constructor( private translate: TranslateService ) { }

  ngOnInit(): void {
     this.checkLanguage();
  }

  setLanguage(language: string) { 
    this.isEnglish = !this.isEnglish;
    const lang = language == 'en' ? 'en' : 'de';
    language === 'en' ? this.isEnglish = true : this.isEnglish = false;

    this.selectedLanguage !== null ? lang == this.selectedLanguage : lang; 

    lang == 'en' ? this.translate.use('en') : this.translate.use('de');

    localStorage.setItem('selectedLanguage', lang);  
  }

  checkLanguage() {
    ( this.selectedLanguage !== null && this.selectedLanguage == 'en' ) ? this.isEnglish = true : this.isEnglish = false;
    this.selectedLanguage = localStorage.getItem('selectedLanguage');  
    this.selectedLanguage !== null ? this.translate.use( this.selectedLanguage ) : this.translate.use( 'en' ); 
  }
}
