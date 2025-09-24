import mongoose, { Schema } from "mongoose";
import { IUser } from "../interface/models/user.interface";
import { UserType } from "../interface/userTypes.enum";

const userSchema = new Schema<IUser>({
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        type: { type: String, required: true, enum: UserType},
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },

    { 
        timestamps: true
    }

);

export const User = mongoose.model<IUser>("User", userSchema);