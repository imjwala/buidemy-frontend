import { Status } from '../../types/type';
 
 export interface IInstitute {
  instituteName : string,
  instituteEmail: string,
  institutePhoneNumber: string,
  instituteAddress: string
 }

 export interface IInstituteInitialData {
  institute:IInstitute,
  status: Status
 }