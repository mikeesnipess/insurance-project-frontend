import { Carrier, Link, CarrierOperation, CensusType } from 'src/app/models/carrier/carrier'; // adjust the path as necessary

export default interface Usdot {
  _links: {
      basics: Link;
      cargoCarried: Link;
      operationClassification: Link;
      docketNumbers: Link;
      carrierActiveForHireAuthority: Link;
      self: Link;
  };
  carrier: Carrier;
}
