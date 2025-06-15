FROM node:22.16-alpine3.22

RUN mkdir -p /app && corepack enable

WORKDIR /app

VOLUME [ "/app" ]

EXPOSE 8080

CMD [ "pnpm", "run", "dev" ]