FROM node:lts-alpine

WORKDIR /app
COPY . /app/
RUN yarn install --frozen-lockfile

EXPOSE 3000
CMD ["yarn", "start"]