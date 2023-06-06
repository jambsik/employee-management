FROM node:18

RUN apt-get update && apt-get install -y curl bash-completion

RUN corepack enable

RUN corepack prepare yarn@stable --activate

RUN yarn set version berry

RUN npm install -g lint-staged

CMD ["bash"]
