import mongoose from 'mongoose';

export async function connectToMongoDb(dbUri:string):Promise<void>{
    if (!dbUri){
        console.log('DB not connected, dbUri is undefined!')
        console.log('dbUri = ' + dbUri)
        process.exit(1)
    }
    try{
        await mongoose.connect(dbUri);
        console.log('DB connected!');
    }
    catch(e:any){
        console.log(e)
        process.exit(1)
    }
}