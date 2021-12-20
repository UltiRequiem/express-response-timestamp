export default function responseTimeStamp(
  getDate = () => new Date().toUTCString()
) {
  return (_request, response, next) => {
    const originalJson = response.send;

    response.json = function json(data) {
      response.set("Content-type", "application/json");
      originalJson.call(
        this,
        JSON.stringify({ ...data, timestamp: getDate() })
      );
    };

    next();
  };
}
