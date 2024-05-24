import { Injectable } from '@angular/core';
import Usdot from 'src/app/services/USDOT/usdot';
import { DriverDetails } from 'src/app/models/carrier/driver-models/driver-details-model';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private dataTransferObject: { driverDetails: DriverDetails; companyDetails: Usdot } | null = null;
  private envelopeId: string | null = null; // Add this line

  setDataTransferObject(data: { driverDetails: DriverDetails; companyDetails: Usdot } | null): void {
    this.dataTransferObject = data;
    console.log('State set in StateService:', this.dataTransferObject); // Debugging
  }

  getDataTransferObject(): { driverDetails: DriverDetails; companyDetails: Usdot } | null {
    console.log('State retrieved from StateService:', this.dataTransferObject); // Debugging
    return this.dataTransferObject;
  }

  // Add these methods
  setEnvelopeId(id: string | null): void {
    this.envelopeId = id;
    console.log('Envelope ID set in StateService:', this.envelopeId);
  }

  getEnvelopeId(): string | null {
    console.log('Envelope ID retrieved from StateService:', this.envelopeId);
    return this.envelopeId;
  }
}
