import * as lambda from '@aws-cdk/aws-lambda';
import {NodejsFunction} from '@aws-cdk/aws-lambda-nodejs';
import * as cdk from '@aws-cdk/core';
import * as path from 'path';

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const myFunction = new NodejsFunction(this, 'my-function', {
      memorySize: 1024,
      timeout: cdk.Duration.seconds(5),
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'main',
      entry: path.join(__dirname, `/../src/my-lambda/index.ts`),
      bundling: {
        minify: true,
        externalModules: ['aws-sdk'],
      },
    });

    const rdsStartJob = new NodejsFunction(this,'rds-start-job-function',{
      memorySize:1024,
      timeout:cdk.Duration.seconds(60),
      runtime:lambda.Runtime.NODEJS_14_X,
      handler:"handler",
      entry:path.join(__dirname,`/../src/start-up/app.ts`),
      bundling:{
        minify:true,
        externalModules:['aws-sdk']
      }
    });

    const rdsStopJob = new NodejsFunction(this,'rds-stop-job-function',{
      memorySize:1024,
      timeout:cdk.Duration.seconds(60),
      runtime:lambda.Runtime.NODEJS_14_X,
      handler:"handler",
      entry:path.join(__dirname,`/../src/shut-down/app.ts`),
      bundling:{
        minify:true,
        externalModules:['aws-sdk']
    }
  });

  };
}
