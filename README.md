# aws-cdk-lambda-scheduled

## CMD Setup RDS
```
aws rds create-db-instance --db-instance-identifier testdb --db-instance-class db.t2.micro --engine mysql --allocated-storage 20 --master-username admin --master-user-password adminPwd
```

## CDK initiate new project
```
cdk init --language typescript
```

