import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UsdotService } from 'src/app/services/USDOT/usdot.service';
import { McmxService } from 'src/app/services/MCMX/mcmx.service';
import { NameSearchService } from 'src/app/services/SearchByName/name-search.service';
import { Router } from '@angular/router';

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
  isLoading: boolean = false; // To control loading spinner or indicators\
  isUsdotSelected: boolean =false;
  isMcmxSelected: boolean =false;
  isNameSelected: boolean =false;
  navigateToCompanyDetails: boolean = false;


  selectedButton: string | null = null;
  usdotNumber: number | null = null;  // Change from string to number or null for initialization
  mcmxNumber: number | null = null;
  nameSearch: string = '';
  errorMessage: string = ''; // To show error messages to the user


  constructor(private usdotService: UsdotService,
    private mcmxService:McmxService,
    private nameSearchService: NameSearchService,
    private router: Router) {}

  ngOnInit() {
    // You might want to load some initial data here
  }

 
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
      // Call the appropriate service based on the selected search type
      this.isLoading = true;
      this.usdotService.getUsdotData(this.usdotNumber!).subscribe({
        next: (response) => {
          this.isLoading = false;
          if (response === null) {
            this.errorMessage = 'No data available for the provided USDOT number.';
          } else {
            this.router.navigate(['/company-details']);
          }
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = 'Failed to fetch data. Please try again.';
        }
      });
    } else if (this.isMcmxSelected) {
      this.isLoading = true;
      this.mcmxService.getMcMxData(this.mcmxNumber!).subscribe({
        next: (response) => {
          this.isLoading = false;
          if (response === null) {
            this.errorMessage = 'No data available for the provided MC/MX number.';
          } else {
            this.router.navigate(['/company-details']);
          }
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = 'Failed to fetch data. Please try again.';
        }
      });
    }else if (this.isNameSelected) {
      this.isLoading = true;
      this.nameSearchService.getCompanyName(this.nameSearch!).subscribe({
        next: (response) => {
          console.log('Response:', response); // Check the response data
          if (Array.isArray(response) && response.length > 2) {
            this.errorMessage = 'Too many results. Please enter a more specific company name.';
          } else if (response === null || response === undefined || response.length === 0) {
            this.errorMessage = 'No data available for this company name.';
          } else {
            this.router.navigate(['/company-details']);
          }
          
          this.isLoading = false; // Make sure to set isLoading to false regardless of the response
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = 'Failed to fetch data. Please try again.';
        }
      });
    } else {
      this.errorMessage = 'Select type of search';
    }
  }
  
  
  
  
  
  

  toggleModal(): void {
    this.modalVisible = !this.modalVisible;
  }

  // selectButton(buttonType: string, event: MouseEvent): void {
  //   event.stopPropagation();
  //   this.selectedButton = buttonType;
  // }

  onInputFocus(): void {
    // Actions on input focus, if necessary
  }

  selectButton(buttonType: string, event: MouseEvent): void {
    event.stopPropagation();
      
  
    // Reset all selections
    this.isUsdotSelected = false;
    this.isMcmxSelected = false;
    this.isNameSelected = false;
  
    // Set the selected state based on the button clicked
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
      headline: 'Headline goes here',
      description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum.',
      icon: 'assets/img/home/icon-third-page-one.png'
    },
    {
      headline: 'Headline goes here',
      description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum.',
      icon: 'assets/img/home/icon-third-page-three.png'
    },
    {
      headline: 'Headline goes here',
      description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum.',
      icon: 'assets/img/home/icon-third-page-two.png' 
    },
  ];
}
