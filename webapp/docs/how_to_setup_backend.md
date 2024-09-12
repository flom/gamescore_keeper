# How-To Setup the Backend

* Download [Pocketbase](https://pocketbase.io/)
* Store the executable in `/pocketbase`
* Run `./pocketbase serve`

## Remarks

When developing locally Pocketbase must run on port `8090`.

This is defined in `/vite.config.mts` where a proxy is setup to access Pocketbase behind `/api/...`.
