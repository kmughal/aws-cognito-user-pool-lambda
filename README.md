# Cognito User Pool & Account setup sample

This is a sample code to setup user pool and new account in aws cognio. 

This is an example of infrastructure as code. 
This code sample will do following things:

- Setup user pool
- Setup new user accounts
- Create and lambda
- Create and deploy api gateway

For now please add a .env at the root of the project and paste following values

```
AppName=SignIn
Region=us-east-1
Stage=Dev
AdminGroupName=AdminGroup
AdminGroupDescription=Admin group description
ClientGroupName=ClientGroup
ClientGroupDescription=Client group description

```