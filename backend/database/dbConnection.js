import mongoose from "mongoose"

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Data Base Connected")
        }
        ).catch(err => {
            console.log(err)
        })
}