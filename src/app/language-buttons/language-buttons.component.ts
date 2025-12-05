import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../services/translation.service';

@Component( {
  selector: 'app-language-buttons',
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './language-buttons.component.html',
  styleUrl: './language-buttons.component.scss',
} )
export class LanguageButtonsComponent {
  isSelected!: boolean | null;

  constructor( private translationService: TranslationService ) { }

  ngOnInit(): void {
    this.translationService.isSelected$.subscribe( ( selectedLang ) => {
      this.isSelected = selectedLang;
    } );
  }

  setLanguage( language: string ) {
    this.translationService.setLanguage( language );
  }
}
