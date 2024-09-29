# How-To Setup the Backend

- Download [Pocketbase](https://pocketbase.io/)
- Store the executable in `/pocketbase`
- Run `./pocketbase serve`

## Create User for e2e Tests

- In PocketBase admin UI create user with username and password matching `/cypress/fixtures/credentials.json`

## Remarks

When developing locally Pocketbase must run on port `8090`.

This is defined in `/vite.config.mts` where a proxy is setup to access Pocketbase behind `/api/...`.
