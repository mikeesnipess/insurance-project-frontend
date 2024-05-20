import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Usdot from 'src/app/services/USDOT/usdot';
import { StateService } from 'src/app/services/StateService/state.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  companyForm: FormGroup;
  dataTransferObject: Usdot | null = null;

  constructor(private router: Router, private stateService: StateService) {
    this.companyForm = new FormGroup({
      companyType: new FormControl('')
    });
  }

  ngOnInit(): void {
    if (history.state && history.state.dataTransferObject) {
      this.dataTransferObject = history.state.dataTransferObject as Usdot;
      if (this.dataTransferObject && this.dataTransferObject.carrier) {
        this.companyForm.get('companyType')?.setValue(this.dataTransferObject.carrier.carrierOperation.carrierOperationDesc);
      }
    } else {
      console.error('No state available in the current navigation.');
    }
  }

  onSubmit(): void {
    if (this.dataTransferObject) {
      // Ensure the required fields are set
      if (!this.dataTransferObject.carrier.censusTypeId.name) {
        this.dataTransferObject.carrier.censusTypeId.name = 'Default Name'; // Set a default value
      }

      console.log('Setting state in StateService:', this.dataTransferObject);
      this.stateService.setDataTransferObject(this.dataTransferObject);
      this.router.navigate(['/driver-details']);
    } else {
      console.error('Data transfer object is null');
    }
  }
}
