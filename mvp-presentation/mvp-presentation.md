# Codename: Lumpy Turnips
## Code Visualization for Node

___
# The Problem

## Visualizing Node.js Apps is Hard
* It is difficult to find errors in and track execution of your Node code
* Errors can be cryptic
* It's difficult to isolate breakpoints
* Tracking variables is hard

___
# The Solution

## A Node Package That Helps You
* Steps through your code line-by-line
* Provides clear visualizations
* Tracks data manipulation + variables
___
# Benefits

* Saves time debugging
* Can run any package
* Runs in your real environment
* You have your own visualization and can refer to it again and again
* Can share issues with teammates
* Total privacy + control of code

___
# MVP Features

* Installable NPM package
* Sufficient documentation to get running
* Inject our code into user's code line-by-line
* Output state of variables line-by-line
* Output can be loaded in browser
* Test coverage of file creation

---
# Find on NPM

![](https://dl.dropboxusercontent.com/u/6722535/npmexample.png)

---
# What Does This Look Like?
## Install

   npm install turnip

---
# What Does This Look Like?
## Use In Code

 1 var turnip = require('turnip');

 2 . . .

 3 turnip.start();

 4 // code here

 5 turnip.end();

___
# What Does This Look Like?
## Gather Results

   npm run turnip app.js

---
# What Does This Look Like?
## Display Output
![](https://dl.dropboxusercontent.com/u/6722535/mvp-wireframe.png)

---
# Thanks!
