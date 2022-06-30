FROM node:16
WORKDIR /app
COPY . .

RUN yarn install --frozen-lockfile

ENV PANTHEON_CMS_ENDPOINT dev-decoupled-drupal-qa.pantheonsite.io
RUN yarn build

ENV NODE_ENV production
EXPOSE 3000
ENV PORT 3000

CMD yarn start -p 3000 -H 0.0.0.0