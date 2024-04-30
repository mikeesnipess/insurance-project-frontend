import { Component } from '@angular/core';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent {
  pdfSrc: string = 'assets/PdfSigned.pdf'; // Adjust the filename as necessary

  downloadPDF() {
    // Logic before download if necessary

    // Start the download
    const link = document.createElement('a');
    link.href = this.pdfSrc;
    link.download = 'DownloadedPDF.pdf'; // You can set the default filename for the download
    link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

    // Clean up and remove the link when done
    link.remove();
  }

  downloadRecipient() {
    // Logic before download if necessary

    // Start the download
    const link = document.createElement('a');
    link.href = this.pdfSrc;
    link.download = 'DownloadedRecipient.pdf'; // You can set the default filename for the download
    link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

    // Clean up and remove the link when done
    link.remove();
  }
  
}
