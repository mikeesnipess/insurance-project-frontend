import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Usdot from 'src/app/services/USDOT/usdot';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  companyForm: FormGroup;
  dataTransferObject: Usdot | null = null;

  constructor(private route: ActivatedRoute) {
    this.companyForm = new FormGroup({
      companyType: new FormControl('')
    });
  }

  ngOnInit(): void {
    // Retrieve the state directly from the history
    if (history.state && history.state.dataTransferObject) {
      this.dataTransferObject = history.state.dataTransferObject as Usdot;
      if (this.dataTransferObject && this.dataTransferObject.carrier) {
        this.companyForm.get('companyType')?.setValue(this.dataTransferObject.carrier.carrierOperation.carrierOperationDesc);
      }
    } else {
      console.error('No state available in the current navigation.');
    }
  }
}
