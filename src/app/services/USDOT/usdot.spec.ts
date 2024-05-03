import Usdot  from './usdot';

describe('Usdot', () => {
  it('should support creating data structures that match the interface', () => {
    const testUsdot: Usdot = {
      _links: {
          basics: { href: "http://example.com/basics" },
          cargoCarried: { href: "http://example.com/cargo" },
          operationClassification: { href: "http://example.com/operation" },
          docketNumbers: { href: "http://example.com/docket" },
          carrierActiveForHireAuthority: { href: "http://example.com/authority" },
          self: { href: "http://example.com/self" },
      },
      carrier: {
        allowedToOperate: "Yes",
        bipdInsuranceOnFile: "Yes",
        bipdInsuranceRequired: "No",
        bipdRequiredAmount: "100000",
        bondInsuranceOnFile: "Yes",
        bondInsuranceRequired: "No",
        brokerAuthorityStatus: "Active",
        cargoInsuranceOnFile: "Yes",
        cargoInsuranceRequired: "No",
        carrierOperation: {
            carrierOperationCode: "A",
            carrierOperationDesc: "Interstate"
        },
        censusTypeId: { id: 1, name: "Type1" },
        commonAuthorityStatus: "Active",
        contractAuthorityStatus: "Inactive",
        crashTotal: 5,
        dbaName: "Demo Carrier",
        dotNumber: 123456,
        driverInsp: 2,
        driverOosInsp: 1,
        driverOosRate: 20,
        driverOosRateNationalAverage: "5%",
        ein: 123456789,
        fatalCrash: 1,
        hazmatInsp: 1,
        hazmatOosInsp: 0,
        hazmatOosRate: 0,
        hazmatOosRateNationalAverage: "3%",
        injCrash: 1,
        isPassengerCarrier: "Yes",
        issScore: "50",
        legalName: "Demo Legal Name",
        mcs150Outdated: "No",
        oosDate: "2022-01-01",
        oosRateNationalAverageYear: "2021",
        phyCity: "Some City",
        phyCountry: "USA",
        phyState: "State",
        phyStreet: "1234 Some Street",
        phyZipcode: "12345",
        reviewDate: "2022-02-02",
        reviewType: "Annual",
        safetyRating: "Satisfactory",
        safetyRatingDate: "2022-03-03",
        safetyReviewDate: "2022-04-04",
        safetyReviewType: "Type2",
        snapshotDate: "2022-05-05",
        statusCode: "Code",
        totalDrivers: 10,
        totalPowerUnits: 5,
        towawayCrash: 0,
        vehicleInsp: 10,
        vehicleOosInsp: 2,
        vehicleOosRate: 10,
        vehicleOosRateNationalAverage: "4%"
      }
    };
    expect(testUsdot).toBeTruthy(); // Simply check that the object conforms to the interface
  });
});
