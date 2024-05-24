import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from 'src/app/services/StateService/state.service';
import { PdfService } from 'src/app/services/PdfService/pdf.service';
import { DriverDetails } from 'src/app/models/carrier/driver-models/driver-details-model';
import Usdot from 'src/app/services/USDOT/usdot';

@Component({
  selector: 'app-signing-page',
  templateUrl: './signing-page.component.html',
  styleUrls: ['./signing-page.component.css']
})
export class SigningPageComponent implements OnInit {
  pdfSrc: string = '';
  envelopeId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stateService: StateService,
    private pdfService: PdfService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.envelopeId = params.get('envelopeId');
      console.log('Envelope ID:', this.envelopeId);
      this.generateAndFetchPdf();
    });
  }

  generateAndFetchPdf(): void {
    const dataTransferObject = this.stateService.getDataTransferObject();
    if (dataTransferObject) {
      const { driverDetails, companyDetails } = dataTransferObject;

      this.pdfService.generateDocument(driverDetails, companyDetails).subscribe((pdfBlob: Blob) => {
        const url = window.URL.createObjectURL(pdfBlob);
        this.pdfSrc = url; // Set the pdfSrc to the generated PDF URL
      }, error => {
        console.error('Error generating PDF:', error);
      });
    } else {
      console.error('No data available in StateService');
    }
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
