export class Usdot {
    _links!: {
        basics: { href: string };
        cargoCarried: { href: string };
        operationClassification: { href: string };
        docketNumbers: { href: string };
        carrierActiveForHireAuthority: { href: string };
        self?: any;
    };
    carrier!: {
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
        legalName: string;
        dotNumber: number;
        phyCity: string;
        phyState: string;
        phyStreet: string;
        phyZipcode: string;
        totalDrivers: number;
        totalPowerUnits: number;
    };
}
