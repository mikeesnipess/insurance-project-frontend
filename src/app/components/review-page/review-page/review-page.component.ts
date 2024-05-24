import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/StateService/state.service';
import { DriverDetails } from 'src/app/models/carrier/driver-models/driver-details-model';
import Usdot from 'src/app/services/USDOT/usdot';
import { PdfService } from 'src/app/services/PdfService/pdf.service';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {
  pdfSrc: string = ''; // Initially empty
  downloadDocuSignPdf: string = ''; // Initially empty
  driverDetails: DriverDetails | null = null;
  companyDetails: Usdot | null = null;
  envelopeId: string | null = null; // Add this line

  constructor(private stateService: StateService, private pdfService: PdfService) {}

  ngOnInit(): void {
    this.envelopeId = this.stateService.getEnvelopeId(); // Retrieve the envelopeId from StateService
    console.log('Envelope ID on Review Page:', this.envelopeId);

    const dataTransferObject = this.stateService.getDataTransferObject();
    if (dataTransferObject) {
      this.driverDetails = dataTransferObject.driverDetails;
      this.companyDetails = dataTransferObject.companyDetails;
      this.downloadRecipient();
      console.log('Driver Details on Review Page:', this.driverDetails);
      console.log('Company Details on Review Page:', this.companyDetails);
    } else {
      console.error('No data available in StateService');
    }
  }

  downloadPDF() {
    this.downloadDocuSignPdf = `https://demo.docusign.net/Member/EmailStart.aspx?m=${this.envelopeId}`;
    window.open(this.downloadDocuSignPdf, '_blank');
  }

  downloadRecipient() {
    if (this.driverDetails && this.companyDetails) {
      this.pdfService.generatePdf(this.driverDetails, this.companyDetails).subscribe((pdf) => {
        const blob = new Blob([pdf], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        this.pdfSrc = url; // Set the pdfSrc to the generated PDF URL

        // Optionally, you can also initiate a download directly
        const link = document.createElement('a');
        link.href = url;
        link.download = 'OccupationInsuranceRecipient.pdf';
        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
        link.remove();

        // Clean up the URL object after some time
        setTimeout(() => {
          window.URL.revokeObjectURL(url);
        }, 10000); // Adjust the timeout as needed

      }, error => {
        console.error('Error generating PDF:', error);
      });
    } else {
      console.error('DriverDetails or CompanyDetails is null');
    }
  }
}
