import { Component, OnInit } from '@angular/core';
import { DriverDetails } from 'src/app/models/carrier/driver-models/driver-details-model';
import { Router } from '@angular/router';
import Usdot from 'src/app/services/USDOT/usdot';
import { StateService } from 'src/app/services/StateService/state.service';
import { CombinedService } from 'src/app/services/DocuSign/docu-sign.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {
  driverDetails: DriverDetails = new DriverDetails();
  companyDetails: Usdot | null = null;
  isLoading = false; // Add loading state

  days = Array.from({ length: 31 }, (_, i) => ({ day: i + 1 }));
  months = [
    { month: 'January', value: 1 },
    { month: 'February', value: 2 },
    { month: 'March', value: 3 },
    { month: 'April', value: 4 },
    { month: 'May', value: 5 },
    { month: 'June', value: 6 },
    { month: 'July', value: 7 },
    { month: 'August', value: 8 },
    { month: 'September', value: 9 },
    { month: 'October', value: 10 },
    { month: 'November', value: 11 },
    { month: 'December', value: 12 }
  ];

  years = Array.from({ length: 25 }, (_, i) => ({ year: 1980 + i }));

  constructor(private combinedService: CombinedService, private router: Router, private stateService: StateService) {}

  ngOnInit(): void {
    console.log('Initializing DriverDetailsComponent');
    const dataTransferObject = this.stateService.getDataTransferObject();
    console.log('Data from StateService:', dataTransferObject);
    if (this.isUsdot(dataTransferObject?.companyDetails)) {
      this.companyDetails = dataTransferObject?.companyDetails || null;
      console.log('Received company details:', this.companyDetails);
    } else {
      console.error('No state available in the StateService or the state is not of type Usdot.');
    }
  }

  onSubmit(): void {
    if (this.companyDetails === null) {
      console.error('Company details are null');
      return;
    }
  
    this.isLoading = true; // Set loading to true
    console.log('Loading started'); // Add this line
  
    this.combinedService.submitDetails(this.driverDetails, this.companyDetails).subscribe(
      envelopeId => {
        this.isLoading = false; // Set loading to false when data is received
        console.log('Loading finished'); // Add this line
        console.log('Details submitted successfully, envelope ID:', envelopeId);
        this.stateService.setDataTransferObject({ driverDetails: this.driverDetails, companyDetails: this.companyDetails! });
        this.router.navigate(['/signing-page'], { queryParams: { envelopeId } });
      },
      error => {
        this.isLoading = false; // Set loading to false on error
        console.log('Loading finished with error'); // Add this line
        console.error('Error submitting details', error);
      }
    );
  }
  

  private isUsdot(object: any): object is Usdot {
    return object && object.carrier && object.carrier.legalName !== undefined;
  }
}
