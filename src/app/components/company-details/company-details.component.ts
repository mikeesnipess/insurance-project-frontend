import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Usdot from 'src/app/services/USDOT/usdot';
import { DriverDetails } from 'src/app/models/carrier/driver-models/driver-details-model';
import { StateService } from 'src/app/services/StateService/state.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  companyForm: FormGroup;
  companyDetails: Usdot | null = null;
  driverDetails: DriverDetails = new DriverDetails();

  constructor(private router: Router, private stateService: StateService) {
    this.companyForm = new FormGroup({
      companyType: new FormControl('')
    });
  }

  ngOnInit(): void {
    if (history.state && history.state.dataTransferObject) {
      this.companyDetails = history.state.dataTransferObject as Usdot;
      if (this.companyDetails && this.companyDetails.carrier) {
        this.companyForm.get('companyType')?.setValue(this.companyDetails.carrier.carrierOperation?.carrierOperationDesc || '');
      }
    } else {
      console.error('No state available in the current navigation.');
    }
  }

  onSubmit(): void {
    if (this.companyDetails) {
      // Ensure the required fields are set
      if (!this.companyDetails.carrier.censusTypeId?.name) {
        this.companyDetails.carrier.censusTypeId = { id: 0, name: 'Default Name' }; // Initialize censusTypeId with default values
      }
      if (!this.companyDetails._links.self) {
        this.companyDetails._links.self = { href: 'default-url' }; // Provide a default URL for self link
      }

      console.log('Setting state in StateService:', this.companyDetails);
      this.stateService.setDataTransferObject({
        driverDetails: this.driverDetails,
        companyDetails: this.companyDetails
      });
      this.router.navigate(['/driver-details'], { state: { dataTransferObject: this.companyDetails } });
    } else {
      console.error('Data transfer object is null');
    }
  }
}
