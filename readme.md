# Express Response Timestamp

Middleware to add a timestamp to every `response.json()`, zero dependencies.

## Usage

```js
import express from "express";
import timestampHandler from "express-response-timestamp";

const app = express();

const PORT = 3005;

app.use(timestampHandler()); // Default: `() => new Date().toUTCString()`
// app.use(timestampHandler(() => new Date().toLocaleDateString()));
// app.use(timestampHandler(moment().year));

app.use("/", (_request, response) => {
  response.json({ foo: "bar", framework: "express" });
});

app.listen(PORT, () => {
  console.log(`Server listening http://localhost:${PORT}`);
});
```

The response of `/` is:

```json
{
  "foo": "bar",
  "framework": "express",
  "timestamp": "Mon, 20 Dec 2021 17:57:00 GMT"
}
```

## Licence

MIT
