FROM node:22-alpine

WORKDIR /usr/src/app

# No package.json / dependencies needed - the server only uses Node's
# built-in "http" and "os" modules.
COPY server.js ./

EXPOSE 3000

CMD ["node", "server.js"]
