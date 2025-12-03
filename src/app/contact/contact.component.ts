import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    standalone: true,
    imports: [
      CommonModule,
      TranslateModule,
      FormsModule, 
      ReactiveFormsModule
    ]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup = new FormGroup( {
    name: new FormControl ('', [Validators.required]),
    email: new FormControl ('', [Validators.required, Validators.email]),
    message: new FormControl ('', [Validators.required])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
     
  }

  sendEmail() {
    if (this.contactForm.valid) {
      const body = this.contactForm.value;
      window.location.href = 
      `mailto:georgipavlov17@gmail.com?subject=Portfolio Contact&body=${
        encodeURIComponent( 
          `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`
        )}`;
    }
  }
}  