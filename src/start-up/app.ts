import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import * as AWS from 'aws-sdk';
import {startInstance} from './start'
async function handler(event:APIGatewayProxyEventV2,context:any)
:Promise<APIGatewayProxyResultV2> {
    console.log("start to start");
    const result = await startInstance('testdb');
    console.log("Called to start");
    console.log(result);
    
    console.log("End to start");
    return {
        statusCode: 200,
        body: JSON.stringify({message: "started"})
    }
}

export {handler}