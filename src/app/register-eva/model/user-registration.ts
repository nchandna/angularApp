import {PictureModel} from './picture-model';

export class UserRegistration {
firstName: string;
middleName: string;
lastName: string;
gender: string;
age: number;
address: string;
companyName: string;
type: string;
phone: string;
email: string;
documentType: string;
documentNumber: string;
documentExpiryDate: string;
notes: string;
comments: string;
matchingThreshold: string
pictures: Array<PictureModel>;
}
