import mongoose from "mongoose";
import { APP_CONFIG } from "../config/app.config";

export class MongoLoader {
    private MONGO_URI: string = APP_CONFIG.MONGODB_URI || "";

    public async connect() {
        try {
            await mongoose.connect(this.MONGO_URI);
            console.log("Connected to MongoDB");
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
        }
    }

}