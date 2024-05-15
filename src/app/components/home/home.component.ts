import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UsdotService } from 'src/app/services/USDOT/usdot.service';
import { McmxService } from 'src/app/services/MCMX/mcmx.service';
import { NameSearchService } from 'src/app/services/SearchByName/name-search.service';
import { Router } from '@angular/router';
import Usdot from 'src/app/services/USDOT/usdot';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate('500ms ease-in-out')),
    ]),
  ]
})
export class HomeComponent implements OnInit {
  modalVisible: boolean = false;
  isLoading: boolean = false;
  isUsdotSelected: boolean = false;
  isMcmxSelected: boolean = false;
  isNameSelected: boolean = false;
  navigateToCompanyDetails: boolean = false;

  selectedButton: string | null = null;
  usdotNumber: number | null = null;
  mcmxNumber: number | null = null;
  nameSearch: string = '';
  errorMessage: string = '';
  dataTransferObject: Usdot | null = null;

  constructor(
    private usdotService: UsdotService,
    private mcmxService: McmxService,
    private nameSearchService: NameSearchService,
    private router: Router
  ) {}

  ngOnInit() {}

  onNextClick(): void {
    this.errorMessage = '';
    if (!this.usdotNumber && this.isUsdotSelected) {
      this.errorMessage = 'Please enter a valid USDOT number.';
      return;
    } else if (!this.mcmxNumber && this.isMcmxSelected) {
      this.errorMessage = 'Please enter a valid MC/MX number.';
      return;
    } else if (!this.nameSearch && this.isNameSelected) {
      this.errorMessage = 'Please enter a valid company name.';
      return;
    }

    if (this.isUsdotSelected) {
      this.searchByUsdot();
    } else if (this.isMcmxSelected) {
      this.searchByMcmx();
    } else if (this.isNameSelected) {
      this.searchByName();
    }
  }

  private searchByUsdot() {
    this.isLoading = true;
    this.usdotService.getUsdotData(this.usdotNumber!).subscribe({
      next: (response) => {
        if (response) {
          this.handleResponse(response);
        } else {
          this.errorMessage = 'No data available for the provided USDOT number.';
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }

  private searchByMcmx() {
    this.isLoading = true;
    this.mcmxService.getMcMxData(this.mcmxNumber!).subscribe({
      next: (response) => {
        if (response) {
          this.handleResponse(response);
        } else {
          this.errorMessage = 'No data available for the provided MC/MX number.';
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }

  private searchByName() {
    this.isLoading = true;
    this.nameSearchService.getCompanyName(this.nameSearch!).subscribe({
      next: (response) => {
        console.log('Response:', response);
        if (Array.isArray(response)) {
          if (response.length > 2) {
            this.errorMessage = 'Too many results. Please enter a more specific company name.';
          } else if (response.length === 0) {
            this.errorMessage = 'No data available for this company name.';
          } else {
            this.handleResponse(response[0]);
          }
        } else {
          this.errorMessage = 'Unexpected response format.';
        }
        this.isLoading = false;
      },
      error: (err) => {
        this.handleError(err);
      }
    });
  }

  private handleResponse(response: Usdot) {
    this.dataTransferObject = response;
    console.log('DataTransferObject:', this.dataTransferObject);
    this.router.navigate(['/company-details'], { state: { dataTransferObject: this.dataTransferObject } });
  }

  private handleError(error: any) {
    this.isLoading = false;
    this.errorMessage = 'An error occurred while fetching company data.';
    console.error('Error:', error);
  }

  toggleModal(): void {
    this.modalVisible = !this.modalVisible;
  }

  onInputFocus(): void {}

  selectButton(buttonType: string, event: MouseEvent): void {
    event.stopPropagation();
    this.isUsdotSelected = false;
    this.isMcmxSelected = false;
    this.isNameSelected = false;

    switch (buttonType) {
      case 'MC/MX':
        this.isMcmxSelected = true;
        break;
      case 'USDOT':
        this.isUsdotSelected = true;
        break;
      case 'COMPANY NAME':
        this.isNameSelected = true;
        break;
    }
  }

  cards = [
    {
      headline: 'Accident and Injury Protection',
      description: 'Our insurance covers medical expenses, rehabilitation costs, and lost wages for employees who suffer from work-related injuries or accidents.',
      icon: 'assets/img/home/icon-third-page-one.png'
    },
    {
      headline: 'Occupational Disease Coverage',
      description: 'Employees exposed to hazardous work conditions over time may develop occupational diseases.',
      icon: 'assets/img/home/icon-third-page-three.png'
    },
    {
      headline: 'Temporary and Permanent Disability Benefits',
      description: 'In the unfortunate event that an employee becomes temporarily or permanently disabled due to a work-related incident, our policy provides them with a continuous income stream, ensuring their financial stability.',
      icon: 'assets/img/home/icon-third-page-two.png'
    },
  ];
}
