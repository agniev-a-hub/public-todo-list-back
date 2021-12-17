import express from 'express';
import config from 'config';
import { connectToMongoDb } from './utils/connectDb';
import {router, routerAuth} from './router';

const PORT = config.get<number>('port');
const app = express();
app.use(express.json());
app.use('/api', router);
app.use('/auth', routerAuth);

async function startApplication() {
    try{
        await connectToMongoDb(config.get<string>('dbUri'));
        app.listen(5000, () => console.log('Server has been launched! Port: ' + PORT));
    }
    catch(e){
        console.log(e)
    }
}


startApplication();