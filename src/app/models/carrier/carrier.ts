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
    carrierOperation: {
      carrierOperationCode: string;
      carrierOperationDesc: string;
    };
    censusTypeId?: any;
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
    isPassengerCarrier?: any;
    issScore?: any;
    legalName: string;
    mcs150Outdated: string;
    oosDate?: any;
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
    snapshotDate?: any;
    statusCode: string;
    totalDrivers: number;
    totalPowerUnits: number;
    towawayCrash: number;
    vehicleInsp: number;
    vehicleOosInsp: number;
    vehicleOosRate: number;
    vehicleOosRateNationalAverage: string;
  }
  
  export interface UsdotData {
    _links: {
      basics: { href: string };
      cargoCarried: { href: string };
      operationClassification: { href: string };
      docketNumbers: { href: string };
      carrierActiveForHireAuthority: { href: string };
      self?: any;
    };
    carrier: Carrier;
  }
  