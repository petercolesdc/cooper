# Cooper

*Base style and functional layers. Dale Cooper approved.*

![Dale Cooper Approved](https://i.imgur.com/ZDWFHnB.jpg "Dale Cooper Approved")

## What is?

Default SCSS, JS and assets for starting new projects

## How

It all runs on gulp and inputs and outputs are configured via the gulpfile.js.
As a default, there are templates bundled with the build and a local server setup from flat files. This is to test elements, and you wont need it in your builds on other projects.

## Setup

1. run 'npm install' in root
2. run 'gulp' to compile assets only
3. run 'gulp serve' to display test set of elements

## Starting a project

The power of Cooper is in having a solid base to start from. When using it in projects, it's unlikely you'll need to use it to run the local server to test elements, so 'gulp' is the default command for assets. You can ignore 'gulp serve' all together at this point.

What you should do to get started is the following:

1. Delete the templates and public folders.
2. Alter the gulpfile.js to out put css, js, and assets where you need them
3. Remove the Test templates section and related task runner from gulpfile.js (optional)
