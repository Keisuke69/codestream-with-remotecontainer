FROM node:16.3.0 AS dev
RUN apt update && apt install vim default-jdk -y && apt clean
RUN echo "source /usr/share/bash-completion/completions/git" >> ~/.bashrc
