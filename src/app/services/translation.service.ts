import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable( {
  providedIn: 'root',
} )
export class TranslationService {
  selectedLanguage!: string | null;
  isSelected$ = new BehaviorSubject<boolean | null>( null );
  isSelected!: boolean;

  constructor( private translate: TranslateService ) {
    this.checkLanguage();
  }

  setLanguage( language: string ) {
    this.isSelected = !this.isSelected$;
    const lang = language == 'en' ? 'en' : 'de';
    language === 'en' ? this.isSelected = true : this.isSelected = false;

    this.selectedLanguage !== null ? lang == this.selectedLanguage : lang;

    lang == 'en' ? this.translate.use( 'en' ) : this.translate.use( 'de' );

    localStorage.setItem( 'selectedLanguage', lang );
    this.isSelected$.next( this.isSelected );
  }

  checkLanguage() {
    this.selectedLanguage = localStorage.getItem( 'selectedLanguage' );

    this.isSelected = ( ( this.selectedLanguage !== null && this.selectedLanguage == 'en' ) || this.selectedLanguage == undefined ) ? this.isSelected = true : this.isSelected = false;

    this.selectedLanguage !== null ? this.translate.use( this.selectedLanguage ) : this.translate.use( 'en' );

    this.isSelected$.next( this.isSelected );
    return this.isSelected$.value;
  }
}
