import * as AWS from 'aws-sdk';

async function startInstance(instanceIdentifier: string) {
    return new Promise((resolve, reject) => {
        const rds = new AWS.RDS();
        const params = {
            DBInstanceIdentifier: instanceIdentifier,
        };
        console.log('Going to DB Start')
        rds.startDBInstance(params, (err, data) => {
            if (err) {
                console.log(err);
                console.log('DB Start error');
                reject(err);
            } else {
                console.log(data);
                console.log('DB Start success');
                resolve(data);
            }
        });

    })
};



export { startInstance }