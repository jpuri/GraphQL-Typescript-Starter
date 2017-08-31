# React Node GraphQL TypeScript - Starter Kit

As I was bootstraping a webapplication I created this starter kit for my use. The technology stack of this kit is collection of all coolatest technologies which I want to use in my web application.

## To get started

To get started using the kit follow following steps:
##### Repo cloning and setup:
1. Clone the git repo.
2. `cd client` followed by `yarn`
3. `cd server` followed by `yarn`
##### DB setup:
1. `createuser myuser --password;`
2. `createdb myapp;`
3. Connect to the DB `psql myapp` and run `grant all privileges on database myapp to myuser;`
##### Starting development servers:
To start client server in development mode:
1. `cd client`
2. `yarn start`

To start server iin development mode:
1. `cd server`
2. `yarn run watch`
3. `yarn run serve`

## Libraries used
Following libraries / utilities have been used in the repo:
##### Client
1. ReactJS: 15.6.1
2. Typescript: 2.4.2
3. TSLint: 5.6.0
4. react-apollo: 1.4.14
5. react-router: 4.1.2
6. styled-components: 2.1.2
7. jest: 20.0.3
8. enzyme: 2.9.1
9. prettier: 1.5.3
##### Server
1. NodeJS: 7.5.0
2. Express: 4.15.4
3. apollo-server-express: 1.1.0
4. Typescript: 2.4.2
5. TSLint: 5.6.0
6. db-migrate: 0.10.0-beta.23
7. graphql-tools: 1.2.1
8. prettier: 1.5.3
9. mocha: 3.5.0
10. chai: 4.1.1

References:
1. https://github.com/Microsoft/TypeScript-React-Starter
2. https://github.com/Microsoft/TypeScript-Node-Starter
3. https://github.com/facebook/jest/blob/master/examples/typescript
