# Nest CQRS

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Test for Calling API

After `Running the app`,

```bash
$ curl -XPOST \
  localhost:3000/heroes/1/kill \
  -H "Content-Type: application/json" \
  -d '{"dragonId": "1"}'
```
