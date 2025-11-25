import mongoose from "mongoose";
import colors from 'colors';

export const connectDB = async() => {
    try{
        const connect = await mongoose.connect(process.env.DB_URL);

        console.log(colors.blue(`App connected to DB : ${connect.connection.name}`))
    }catch(err){
        console.log(colors.red('An Error happened', err));
        process.exit(1);
    }
}