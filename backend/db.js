import mongoose, { connect } from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MONGO DB connected !! ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1) //1 is for failure and 0 for success
    }
}

//mongoose is used for connecting with mongoDB
//DB is in another continent , so async await is used and try catch is necessary as it is a lengthy process, might have errors