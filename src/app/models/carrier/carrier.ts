
export interface Carrier {
  allowedToOperate: string;
  bipdInsuranceOnFile: string | null;
  bipdInsuranceRequired: string | null;
  bipdRequiredAmount: string | null;
  bondInsuranceOnFile: string | null;
  bondInsuranceRequired: string | null;
  brokerAuthorityStatus: string | null;
  cargoInsuranceOnFile: string | null;
  cargoInsuranceRequired: string | null;
  carrierOperation: CarrierOperation;
  censusTypeId: CensusType;
  commonAuthorityStatus: string | null;
  contractAuthorityStatus: string | null;
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
  isPassengerCarrier: string | null;
  issScore: string | null;
  legalName: string;
  mcs150Outdated: string;
  oosDate: string | null;
  oosRateNationalAverageYear: string;
  phyCity: string;
  phyCountry: string;
  phyState: string;
  phyStreet: string;
  phyZipcode: string;
  reviewDate: string;
  reviewType: string;
  safetyRating: string | null;
  safetyRatingDate: string | null;
  safetyReviewDate: string;
  safetyReviewType: string;
  snapshotDate: string | null;
  statusCode: string;
  totalDrivers: number;
  totalPowerUnits: number;
  towawayCrash: number;
  vehicleInsp: number;
  vehicleOosInsp: number;
  vehicleOosRate: number;
  vehicleOosRateNationalAverage: string;
}

export interface CensusType {
  id: number;
  name: string | null;
}

export interface Link {
  href: string;
}

export interface CarrierOperation {
  carrierOperationCode: string;
  carrierOperationDesc: string;
}

