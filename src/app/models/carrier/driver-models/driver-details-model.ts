export class DriverDetails {
    firstName: string;
    lastName: string;
    gender: string;
    birthDay: number;
    birthMonth: number;
    birthYear: number;
    ssnLastFourDigits: string;
    emailAddress: string;
    mobilePhone: string;
    paidBy: string;
    cdiNumber: string;
    cdlNumber: string;
    issueDateDay: number;
    issueDateMonth: number;
    issueDateYear: number;
    primaryAddress: string;
    primaryState: string;
    primaryPostalCode: string;
    beneficiaryName: string;
    relationship: string;
    beneficiaryPhone: string;
    typeOfVehicle: string;
  
    constructor() {
      this.firstName = '';
      this.lastName = '';
      this.gender = '';
      this.birthDay = 0;
      this.birthMonth = 0;
      this.birthYear = 0;
      this.ssnLastFourDigits = '';
      this.emailAddress = '';
      this.mobilePhone = '';
      this.paidBy = '';
      this.cdiNumber = '';
      this.cdlNumber = '';
      this.issueDateDay = 0;
      this.issueDateMonth = 0;
      this.issueDateYear = 0;
      this.primaryAddress = '';
      this.primaryState = '';
      this.primaryPostalCode = '';
      this.beneficiaryName = '';
      this.relationship = '';
      this.beneficiaryPhone = '';
      this.typeOfVehicle = '';
    }
  }
  