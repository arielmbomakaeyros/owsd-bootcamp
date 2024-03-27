import mongoose from "mongoose";

// const MONGODB_URI = "mongodb+srv://owsd-user:owsd-pwd@owsd-db.2gpgkfc.mongodb.net/owsd_contacts"
const connectMongoDB = async () => {
    try {
        await mongoose.connect(process?.env?.MONGODB_URI as string);
        // await mongoose.connect(MONGODB_URI);
        console.log("Connected to client Database")
    } catch (error) {
        console.log("Problem connecting to owsd_contacts Database")
    }
}

export default connectMongoDB