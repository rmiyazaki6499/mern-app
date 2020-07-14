![MERN Logo](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.3ritechnologies.com%2Fcourse%2Fmern-stack-training-in-pune%2F&psig=AOvVaw2UcHidrBrM6hlEMjw3NG9T&ust=1594852838316000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLiz6oLozeoCFQAAAAAdAAAAABAD)

# MERN App

This repository contains a simple MERN app as part of the **Deploying a Production ready React-Express App on EC2 with CI/CD** gist tutorial which you can find [here](https://gist.github.com/rmiyazaki6499/b564b40e306707c8ff6ca9c67d38fb6f)

## Table of Contents

- [Introduction](#introduction)
- [Project Layout](#project-layout)
- [Setting up the Mern-app project](#setting-up-the-mern-app-project)
- [Authors](#authors)

---

## Project Layout
  
   If you already have a working project go ahead and move on to either [Creating your AWS Account](#create-an-aws-account) or [Creating your EC2 Instance](#create-an-aws-ec2-instance).
  
  Otherwise feel free to use the generic MERN project I created on Github [here](https://github.com/rmiyazaki6499/mern-app.git).
  
  Here is the project layout:
  
  ```
  mern-app
   |__ client/ (React App Frontend)
      |__ public/
      |__ src/
   |__ app.js (Express Backend)
   |__ package.json
  
  ```
 
  
  ---
  
  ## Setting up the Mern-app project
  
  I will be using a generic MERN (MongoDb, Express, React, Node.js) stack app which uses a proxy with the Express server.
  The app simply displays the default React app components however, I have added a simple API which the frontend calls to confirm that the API call is successfull.
  
  Start by cloning the project with the command:
  ```
  $ git clone https://github.com/rmiyazaki6499/mern-app.git
  ```
  Next, we will install dependencies for both Express and React:
  ```
  $ cd mern-app
  $ npm install
  $ cd client
  $ npm install
  ```
  
  Let's first check to see what our React frontend looks like.
  To run the React server use the command in client directory:
  ```
  $ npm start
  ```
  Now if you go to http://localhost:3000, you should see something like this:
  
  ![mern-app_react](https://user-images.githubusercontent.com/41876764/87258089-b8358180-c455-11ea-955a-e182e689c993.png)
  
  The API is not working because well, we are not running our backend yet!
  Let's do that now.
  
  In another terminal session run the command `npm start` at the root directory of the project as we did with the frontend.
  It should look something like this:
  
  ![mern-app_run_server](https://user-images.githubusercontent.com/41876764/87258208-ad2f2100-c456-11ea-80c9-7ca9a3624462.png)
  
  You can see that we have the express server running on port `5000`.
  
  Now switch back to the http://localhost:3000 and refresh the page. You should see the Message at the bottom be updated!
  
  ![mern-app_react_success](https://user-images.githubusercontent.com/41876764/87258255-09924080-c457-11ea-97bd-40ad8784a00b.png)
  
  We have two servers running, one for the React frontend and one for the Express backend. 
  If your project set up is essentially two separate projects between the frontend and backend this would be as far as we would need to check.
  However, I have set this project set up so that rather than running two servers, we run a reverse proxy for React through Express and will serve the frontend through the Express server. 
  
  Because we will not be running the React server for our project, go ahead and stop the React server.
  
In the `client` directory run the command:
```
$ npm run-script build
```
  
React then will create a `build` directory with a production build of your app which is where our Express server will use to serve the frontend.
  
Now if you go to http://localhost:5000 you should see the same React page from earlier!
  

[Back to Table of Contents](#table-of-contents)


## Authors

Created by:

- [Ryuichi Miyazaki](https://github.com/rmiyazaki6499)
