FROM node:12 as base
WORKDIR /app
COPY package.json ./

FROM base AS dependencies
RUN npm i --only=production
RUN cp -R node_modules prod_node_modules
RUN npm i

FROM base AS test
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
CMD ["bash"]
