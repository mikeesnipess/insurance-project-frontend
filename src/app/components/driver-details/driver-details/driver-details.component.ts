import { Component, OnInit } from '@angular/core';
import { DriverDetails } from 'src/app/models/carrier/driver-models/driver-details-model';
import { DriverService } from 'src/app/services/DriverDetails/driver.service';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/CompanyDetails/company-details.service';
import Usdot from 'src/app/services/USDOT/usdot';
import { StateService } from 'src/app/services/StateService/state.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {
  driverDetails: DriverDetails = new DriverDetails();
  companyDetails: Usdot | null = null;

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

  constructor(private driverService: DriverService, private companyService: CompanyService, private router: Router, private stateService: StateService) {}

  ngOnInit(): void {
    console.log('Initializing DriverDetailsComponent');
    const dataTransferObject = this.stateService.getDataTransferObject();
    console.log('Data from StateService:', dataTransferObject);
    if (this.isUsdot(dataTransferObject)) {
      this.companyDetails = dataTransferObject;
      console.log('Received company details:', this.companyDetails);
    } else {
      console.error('No state available in the StateService or the state is not of type Usdot.');
    }
  }

  onSubmit(): void {
    this.driverService.submitDriverDetails(this.driverDetails).subscribe(
      response => {
        console.log('Driver details submitted successfully', response);
        this.router.navigate(['/signing-page']); // Navigate to the next page on success
      },
      error => {
        console.error('Error submitting driver details', error);
      }
    );

    if (this.companyDetails !== null) {
      this.companyService.submitCompanyDetails(this.companyDetails).subscribe(
        response => {
          console.log('Company details submitted successfully', response);
          this.router.navigate(['/signing-page']); // Navigate to the next page on success
        },
        error => {
          console.error('Error submitting company details', error);
        }
      );
    } else {
      console.error('Company details are null');
    }
  }

  private isUsdot(object: any): object is Usdot {
    return object && object.carrier && object.carrier.legalName !== undefined;
  }
}
