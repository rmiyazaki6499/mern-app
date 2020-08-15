![MERN Logo](https://www.3ritechnologies.com/wp-content/uploads/2019/11/MERN-Stack-Training-in-Pune-e1575022427244.png)

# MERN App

This repository contains a simple MERN app as part of the **Deploying a Production ready React-Express App on EC2 with CI/CD** gist tutorial which you can find [here](https://gist.github.com/rmiyazaki6499/b564b40e306707c8ff6ca9c67d38fb6f)

## Table of Contents

- [Project Layout](#project-layout)
- [Setting up the Mern-app project](#setting-up-the-mern-app-project)
- [Setting up the Mern-app project with Docker](#setting-up-the-mern-app-project-with-docker)
  - [Install Docker](#install-docker)
  - [Build and Run the Container](#build-and-run-the-container)
  - [Cleaning up the Container and Image](#cleaning-up-the-container-and-image)
- [Setting up the Mern-app project manually](#setting-up-the-mern-app-project-manually)
- [Authors](#authors)

---

## Project Layout
  
  Here is the project layout:
  
  ```
  mern-app
   |__ client/ (React App Frontend)
      |__ public/
      |__ src/
   |__ scripts/
   |__ app.js (Express Backend)
   |__ package.json
   |__ Dockerfile
   |__ docker-compose.yml
  
  ```
 
  
  ---
  
  ## Setting up the `mern-app` project
  
  I will be using a generic MERN (MongoDb, Express, React, Node.js) stack app which uses a proxy with the Express server.
  The app simply displays the default React app components however, I have added a simple API which the frontend calls to confirm that the API call is successfull.
  
  Start by cloning the project with the command:
  ```
  $ git clone https://github.com/rmiyazaki6499/mern-app.git
  ```
  
  ## Setting up the `mern-app` project with Docker

  For those that are not interested in setting up the project manually or would simply not have to worry about downloading python and its dependencies, I have      created a Dockerfile and docker-compose.yml file to help create a container with everything you would need to run the **django-app**.

  ### Install Docker

  To make this as easy as possible, we will be using *Docker Compose* to creat our container.

  - If you do not have Docker yet, start by downloading it if you are on a Mac or Windows:
  https://www.docker.com/products/docker-desktop

  - Or if you are on a Linux Distribution follow the directions here:
  https://docs.docker.com/compose/install/

  - To confirm you have Docker Compose, open up your terminal and run the command below:

  ```
  $ docker-compose --version
  docker-compose version 1.26.2, build eefe0d31
  ```
  
  - Go into the project directory to build and run the container with:

  ```
  $ cd mern-app/
  $ docker-compose up --build
  ```
  
  Navigate to http://localhost:5000 to view the site on the local server.
It should look something like this:

  ![mern-app_react_success](https://user-images.githubusercontent.com/41876764/87258255-09924080-c457-11ea-97bd-40ad8784a00b.png)
  
  ### Cleaning up the Container and Image

  - To stop the container from running, use `<Ctrl-C>` twice.
  - To close down the container use the command:

  ```
  $ docker-compose down
  ```
  - Then to clean up the container and image which we are no longer using use the command:

  ```
  $ docker system prune -fa
  ```

  - Confirm that the container and image is no longer there with:

  ```
  $ docker system df -v
  ```
  
  ## Setting up the `mern-app` project manually
  
  - If you either did not want to use Docker or was curious to build the mern-app manually follow the directions below.
  
  - Start by installing the dependencies for both Express and React:
  ```
  $ cd mern-app/
  $ npm install
  $ cd client/
  $ npm install
  ```
  
  Let's first check to see what our React frontend looks like.
  - To run the React server use the command in client directory:
  ```
  $ npm start
  ```
  - Now if you go to http://localhost:3000, you should see something like this:
  
  ![mern-app_react](https://user-images.githubusercontent.com/41876764/87258089-b8358180-c455-11ea-955a-e182e689c993.png)
  
  The API is not working because well, we are not running our backend yet!
  Let's do that now.
  
  - In another terminal session run the command `npm start` at the root directory of the project as we did with the frontend.
  It should look something like this:
  
  ![mern-app_run_server](https://user-images.githubusercontent.com/41876764/87258208-ad2f2100-c456-11ea-80c9-7ca9a3624462.png)
  
  You can see that we have the express server running on port `5000`.
  
  - Now switch back to the http://localhost:3000 and refresh the page. You should see the Message at the bottom be updated!
  
  ![mern-app_react_success](https://user-images.githubusercontent.com/41876764/87258255-09924080-c457-11ea-97bd-40ad8784a00b.png)
  
  We have two servers running, one for the React frontend and one for the Express backend. 
  If your project set up is essentially two separate projects between the frontend and backend this would be as far as we would need to check.
  However, I have set this project set up so that rather than running two servers, we run a reverse proxy for React through Express and will serve the frontend through the Express server. 
  
  Because we will not be running the React server for our project, go ahead and stop the React server.
  
- In the `client` directory run the command:
```
$ npm run-script build
```
  
React then will create a `build` directory with a production build of your app which is where our Express server will use to serve the frontend.
  
- Now if you go to http://localhost:5000 you should see the same React page from earlier!
  

[Back to Table of Contents](#table-of-contents)


## Author

Created by:

- [Ryuichi Miyazaki](https://github.com/rmiyazaki6499)
