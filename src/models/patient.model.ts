import { Schema, model } from 'mongoose';
import IPatient from "../interfaces/patient.interface";

const patientRecordSchema = new Schema<IPatient>({
  firstName: { type: String, required: [true, '{PATH} should not be empty'] },
  lastName: { type: String, required: [true, '{PATH} should not be empty'] },
  telephone: { type: String, required: [true, '{PATH} should not be empty'] },
  residentialAddress: { type: String, required: [true, '{PATH} should not be empty'] },
  dateOfBirth: { type: String, required: [true, '{PATH} should not be empty'] },
  gender: { type: String, required: [true, '{PATH} should not be empty'] },
  email: String,
  maritalStatus: String,
  weight: Number,
  height: Number,
  genotype: String,
  bloodGroup: String,
  Diseases: {},
  emergencyContact: {
    firstName: String,
    lastName: String,
    telephone: String,
    address: String,
    email: String,
  },
  MedicalHistory: {}
}, { timestamps: true, versionKey: false });

const Patient = model<IPatient>('Patient', patientRecordSchema, 'PatientMedicalRecord')
export default Patient;