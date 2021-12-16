import express from 'express';
import config from 'config';
import { Request, Response, NextFunction } from 'express'
import { connectToMongoDb } from './utils/connectDb';
import router from './router';
// const
const PORT = config.get<number>('port');

// express
const app = express();
app.use(express.json());
// router
app.use('/api', router);

async function startApplication() {
    try{
        //db connect
        await connectToMongoDb(config.get<string>('dbUri'));
        //listen to the server launch
        app.listen(5000, () => console.log('Server has been launched! Port: ' + PORT));
    }
    catch(e){
        //if smth went wrong ->
        console.log(e)
    }
}

//application launch
startApplication()


