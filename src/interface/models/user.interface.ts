import { UserType } from "../userTypes.enum";

export interface IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    type: UserType;
    createdAt?: Date;
    updatedAt?: Date;

}