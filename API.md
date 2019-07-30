## Track Metadata

This is our track metadata API. You can use this API to get
and set metadata for a given track.

### Set track's metadata

Sets track metadata

```endpoint
POST /.netlify/functions/tracks
```

#### Example request

```curl
curl --header "Content-Type: application/json" \
    --request POST \
      --data '{"url":"xyz","bpm":"125.0", "key":"12A", "token":"", "action":"set"}' \
        http://localhost:3000/.netlify/functions/tracks
```

#### Example request body

```json
{
  "url":"xyz",
  "bpm":"125",
  "key":"12A",
  "token":"",
  "action":"set"
}
```

Property | Description
---|---
`url` | (required) unique primary key
`bpm` | (required) musical bpm
`key` | (required) musical key
`token` | (required) secret key
`action` | (required) must be defined as "set"

#### Example response

> HTTP 200

```json
{
  "status": "ok"
}
```

### Get a track's metadata

Returns a track's metadata

```endpoint
POST /.netlify/functions/tracks
```

#### Example request

```curl
curl --header "Content-Type: application/json" \
    --request POST \
      --data '{"url":"xyz", "token":"", "action":"get"}' \
        http://localhost:3000/.netlify/functions/tracks
```

#### Example request body

```json
{
  "url":"xyz",
  "token":"",
  "action":"get"
}
```

Property | Description
---|---
`url` | (required) unique primary key
`token` | (required) secret key
`action` | (required) must be defined as "set"

#### Example response

> HTTP 200

```json
{
  "status": "ok"
  "url":"xyz",
  "key":"1A",
  "bpm":"125.0"
}
```
