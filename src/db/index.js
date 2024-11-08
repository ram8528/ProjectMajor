import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() => {  // DB is in another continent so first connect it
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)         // ${process.env.MONGODB_URL} 1st variable and ${DB_NAME} is 2nd variable  ->  mongoose returns an object

        console.log(`\n MongoDb COnnected !! DB Host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error ", error);
        process.exit(1);
    }
}

export default connectDB