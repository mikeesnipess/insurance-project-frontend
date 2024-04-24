import { Component } from '@angular/core';

@Component({
  selector: 'app-signing-page',
  templateUrl: './signing-page.component.html',
  styleUrls: ['./signing-page.component.css']
})
export class SigningPageComponent {
  pdfSrc: string = 'assets/Pdf.pdf'; // Adjust the filename as necessary
}

