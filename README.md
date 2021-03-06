# Write TypeScript Lambda functions in AWS CDK - Complete Guide

A repository for an article on
[bobbyhadz.com](https://bobbyhadz.com/blog/aws-cdk-typescript-lambda)

## How to Use

1. Clone the repository

2. Install the dependencies

```bash
npm install
```

3. Create the CDK stack

```bash
npx cdk deploy
```

4. Open the AWS Console and the stack should be created in your default region

5. Cleanup

```bash
npx cdk destroy
```

6. Command for creating RDS
```bash
aws rds create-db-instance --db-instance-identifier testdb --db-instance-class db.t2.micro --engine mysql --allocated-storage 20 --master-username admin --master-user-password adminPwd
```