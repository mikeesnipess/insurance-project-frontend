import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsdotService } from 'src/app/services/USDOT/usdot.service';
import { Usdot } from 'src/app/services/USDOT/usdot'; 

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent {
  companyForm: FormGroup;

  constructor(private usdotService: UsdotService) {
    this.companyForm = new FormGroup({
      companyType: new FormControl('')
    });
  }

}
