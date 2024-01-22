FROM node:14-alpine

COPY build /nodejs/build
COPY patches /nodejs/patches
COPY package.json /nodejs/package.json
COPY babel.config.json /nodejs/babel.config.json
COPY .env.uat /nodejs/.env.uat
COPY .npmrc /nodejs/.npmrc

WORKDIR /nodejs

RUN npm install
RUN npm run postinstall
RUN echo $(ls)

EXPOSE 3306

CMD ["npm","start"]
