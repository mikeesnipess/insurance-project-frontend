export interface Link {
  href: string;
}

export interface CarrierOperation {
  carrierOperationCode: string;
  carrierOperationDesc: string;
}

export interface CensusType {
  id: number;
  name: string;
}

export interface Carrier {
  allowedToOperate: string;
  bipdInsuranceOnFile: string;
  bipdInsuranceRequired: string;
  bipdRequiredAmount: string;
  bondInsuranceOnFile: string;
  bondInsuranceRequired: string;
  brokerAuthorityStatus: string;
  cargoInsuranceOnFile: string;
  cargoInsuranceRequired: string;
  carrierOperation: CarrierOperation;
  censusTypeId: CensusType;
  commonAuthorityStatus: string;
  contractAuthorityStatus: string;
  crashTotal: number;
  dbaName: string;
  dotNumber: number;
  driverInsp: number;
  driverOosInsp: number;
  driverOosRate: number;
  driverOosRateNationalAverage: string;
  ein: number;
  fatalCrash: number;
  hazmatInsp: number;
  hazmatOosInsp: number;
  hazmatOosRate: number;
  hazmatOosRateNationalAverage: string;
  injCrash: number;
  isPassengerCarrier: string;
  issScore: string;
  legalName: string;
  mcs150Outdated: string;
  oosDate: string;
  oosRateNationalAverageYear: string;
  phyCity: string;
  phyCountry: string;
  phyState: string;
  phyStreet: string;
  phyZipcode: string;
  reviewDate: string;
  reviewType: string;
  safetyRating: string;
  safetyRatingDate: string;
  safetyReviewDate: string;
  safetyReviewType: string;
  snapshotDate: string;
  statusCode: string;
  totalDrivers: number;
  totalPowerUnits: number;
  towawayCrash: number;
  vehicleInsp: number;
  vehicleOosInsp: number;
  vehicleOosRate: number;
  vehicleOosRateNationalAverage: string;
}