FROM node:12.18-alpine3.9

RUN mkdir /app
WORKDIR /app

RUN apk update && \
    apk upgrade && \
	apk add git && \
	apk add vim && \
	git clone --depth=1 https://github.com/amix/vimrc.git ~/.vim_runtime && \
	sh ~/.vim_runtime/install_awesome_vimrc.sh && \
	sh -c "$(wget -O- https://raw.githubusercontent.com/deluan/zsh-in-docker/master/zsh-in-docker.sh)"

COPY package.json package.json
COPY client/package.json client/package.json
RUN npm install --silent 
RUN cd client/ && npm install --silent

COPY . .

LABEL maintainer="Ryuichi Miyazaki <rmiyazaki11@ucsbalum.com>"

CMD ./scripts/start.sh
