import { Schema, model } from "mongoose";
import { RoleObjectType } from "./role.model";

export interface UserDocumentType{
    username: string;
    password: string;
    roles:RoleObjectType[];
    // isActivated: boolean;
    // activationLink: string;
}
const UserDocument = new Schema<UserDocumentType>({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    roles: [{type: String, ref: 'Role'}],
}) 
export const UserModel = model<UserDocumentType>('User', UserDocument);