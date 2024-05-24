import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from 'src/app/services/StateService/state.service'; // Import StateService

@Component({
  selector: 'app-signing-page',
  templateUrl: './signing-page.component.html',
  styleUrls: ['./signing-page.component.css']
})
export class SigningPageComponent implements OnInit {
  pdfSrc: string = 'assets/PdfSigning.pdf'; // Adjust the filename as necessary
  envelopeId: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private stateService: StateService) {} // Inject StateService

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.envelopeId = params.get('envelopeId');
      console.log('Envelope ID:', this.envelopeId);
    });
  }

  onSignClick(): void {
    if (this.envelopeId) {
      const signUrl = `https://demo.docusign.net/Member/EmailStart.aspx?m=${this.envelopeId}`;
      window.open(signUrl, '_blank'); // Open the DocuSign URL in a new tab
      this.stateService.setEnvelopeId(this.envelopeId); // Set the envelopeId in StateService
      this.router.navigate(['/payment-page']); // Navigate to the payment page in the current tab
    } else {
      console.error('Envelope ID is not available.');
    }
  }
}
