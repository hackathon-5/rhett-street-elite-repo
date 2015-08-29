FROM node

RUN mkdir /src
add . /src
WORKDIR /src
RUN npm install

CMD npm start