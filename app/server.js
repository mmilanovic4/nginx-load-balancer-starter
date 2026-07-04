import http from 'http';
import os from 'os';

const PORT = process.env.PORT || 3000;
const INSTANCE_ID = process.env.INSTANCE_ID || os.hostname();

let requestCount = 0;

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.writeHead(204);
    return res.end();
  }

  requestCount += 1;

  const payload = {
    message: 'Hello!',
    instanceId: INSTANCE_ID,
    hostname: os.hostname(),
    requestCount,
    path: req.url,
    timestamp: new Date().toISOString(),
  };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(payload, null, 2));
});

server.listen(PORT, () => {
  console.log(`Instance ${INSTANCE_ID} listening on port ${PORT}`);
});
