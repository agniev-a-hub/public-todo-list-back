import { Schema, model } from 'mongoose';

export interface RoleObjectType{
    value: string
}
export const RoleDocument = new Schema<RoleObjectType>({
    value: {type: String, unique: true, required: true, default: "USER"}
})
export const RoleModel = model<RoleObjectType>('Role', RoleDocument);
