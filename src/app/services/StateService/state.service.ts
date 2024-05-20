import { Injectable } from '@angular/core';
import Usdot from 'src/app/services/USDOT/usdot';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private dataTransferObject: Usdot | null = null;

  setDataTransferObject(data: Usdot | null): void {
    this.dataTransferObject = data;
    console.log('State set in StateService:', this.dataTransferObject); // Debugging
  }

  getDataTransferObject(): Usdot | null {
    console.log('State retrieved from StateService:', this.dataTransferObject); // Debugging
    return this.dataTransferObject;
  }
}
