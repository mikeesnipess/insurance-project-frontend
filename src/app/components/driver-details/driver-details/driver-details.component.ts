import { Component } from '@angular/core';
import { DriverDetails } from 'src/app/models/carrier/driver-models/driver-details-model'; // Adjust the path as necessary
import { DriverService } from 'src/app/services/DriverDetails/driver.service'; // Adjust the path as necessary
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent {

  driverDetails: DriverDetails = new DriverDetails();

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

  constructor(private driverService: DriverService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.driverService.submitDriverDetails(this.driverDetails).subscribe(
      response => {
        console.log('Driver details submitted successfully', response);
        this.router.navigate(['/signing-page']); // Navigate to the next page on success
      },
      error => {
        console.error('Error submitting driver details', error);
      }
    );
  }

}
