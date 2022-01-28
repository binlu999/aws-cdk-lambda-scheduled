import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import * as AWS from 'aws-sdk';

async function handler(params:APIGatewayProxyEventV2):Promise<APIGatewayProxyResultV2> {
    const rds = new AWS.RDS();
    console.log("Start to stop");
    rds.stopDBInstance({
        DBInstanceIdentifier:'testdb'
    },(err,data)=>{
        if(err){
            console.log("Stopping failed");
            console.log(err);
        }else{
            if(data){
                console.log("Stopping successed");
                console.log(data);
            }else{
                console.log("Stopping successed without data");
            }
        }
    });
    /*
    const result=await rds.stopDBInstance({
        DBInstanceIdentifier:'testdb'
    });
    console.log("End to stop");
    console.log(result);
    */
    console.log("End to stop");
    return {
        statusCode: 200,
        body: JSON.stringify({message: 'stopped'})
    }
};

export {handler};