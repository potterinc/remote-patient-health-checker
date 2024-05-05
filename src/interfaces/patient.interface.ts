import { Document } from 'mongoose';

interface IPatient extends Document{
  firstName: string;
  lastName: string;
  telephone: string;
  residentialAddress: string;
  dateOfBirth: string;
  gender: string;
  email?: string;
  maritalStatus?: string;
  weight?: number;
  height?: number;
  genotype?: string;
  bloodGroup?: string;
  Diseases?:any,
  emergencyContact?:object;
  MedicalHistory?:any;
}

export default IPatient;